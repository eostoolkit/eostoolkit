//import Ping from 'ping.js';
import Ping from 'utils/ping';
import { orderBy } from 'lodash';
import { put, all, join, fork, select, call, spawn } from 'redux-saga/effects';
import { tokensUrl, networksUrl, claimsUrl } from 'remoteConfig';

import { loadedNetworks, updateNetworks, loadedAccount, setNetwork } from '../actions';
import { makeSelectIdentity, makeSelectReader, makeSelectTokens, makeSelectNetworks, makeSelectActiveNetwork } from '../selectors';

/*
*
* NETWORKS
* Get available networks
*
*/

// fetch networks and select defaultNetwork
export function* fetchNetworks() {
  try {
    // fetch the remote network list
    const data = yield fetch(networksUrl);
    const rawNetworks = yield data.json();

    const networks = rawNetworks.map(network => {
      const { endpoints, ...networkDetails } = network;
      const endpointDetails = endpoints.map(endpoint => {
        return {
          ...endpoint,
          failures: 0,
          ping: -1,
        }
      })
      return {
        ...networkDetails,
        endpoints: endpointDetails,
      }
    });

    // get default
    const network = networks.find(n => n.network === 'eos' && n.type === 'mainnet');
    const endpoint = network.endpoints.find(e => e.name === 'Greymass');

    // build activeNetwork
    const activeNetwork = {
      network,
      endpoint,
    };

    yield put(loadedNetworks(networks, activeNetwork));
  } catch (err) {
    console.error('An EOSToolkit error occured - see details below:');
    console.error(err);
  }
}


function* makeEndpointsLatency(endpoint) {
  const {ping, ...endpointDetails} = endpoint;

  try {
    return {
      ...endpointDetails,
      ping: yield call(Ping,`${endpoint.protocol}://${endpoint.url}:${endpoint.port}/v1/chain/get_info`)
    };
  } catch (c) {
    return {
      ...endpointDetails,
      ping: 5000
    };
  }
}

export function* fetchLatency() {
  try {
    // fetch the remote network list
    let networks = yield select(makeSelectNetworks());
    const active = yield select(makeSelectActiveNetwork());

    const activeIndex = networks.findIndex(network=>{
      return network.chainId === active.network.chainId;
    });

    let endpoints = networks[activeIndex].endpoints;

    const latencies = yield all(endpoints.map(endpoint => {
      return fork(makeEndpointsLatency,endpoint)
    }));

    endpoints = yield join(...latencies);
    networks[activeIndex].endpoints = endpoints;
    yield put(updateNetworks(networks));

    const sorted = orderBy(endpoints, ['failures','ping'], 'asc');
    const best = sorted[0];

    if(active.endpoint.name !== best.name) {
      const activeNetwork = {
        network: networks[activeIndex],
        endpoint: best,
      };

      yield put(setNetwork(activeNetwork,false));
    }

  } catch (err) {
    console.error('An EOSToolkit error occured - see details below:');
    console.error(err);
  }
}

/*
*
* TOKENS
* Get tokens and stats
*
*/

function* fetchTokenInfo(reader, account, symbol) {
  try {
    if (symbol === 'OCT') throw { message: 'OCT has no STATS table - please fix!' };
    const stats = yield reader.getCurrencyStats(account, symbol);
    const precision = stats[symbol].max_supply.split(' ')[0].split('.')[1].length;
    return {
      account,
      symbol,
      precision,
    };
  } catch (c) {
    return {
      account,
      symbol,
      precision: 4,
    };
  }
}

export function* fetchTokens(reader) {
  try {
    const data = yield fetch(tokensUrl);
    const list = yield data.json();

    const tokenList = [
      {
        symbol: "EOS",
        account: "eosio.token"
      },
      ...list
    ]
    const info = yield all(
      tokenList.map(token => {
        return fork(fetchTokenInfo, reader, token.account, token.symbol);
      })
    );
    const tokens = yield join(...info);
    return tokens;
  } catch (err) {
    console.error('An EOSToolkit error occured - see details below:');
    console.error(err);
    return null;
  }
}

export function* fetchClaims() {
  try {
    const data = yield fetch(claimsUrl);
    const claims = yield data.json();
    return claims;
  } catch (err) {
    console.error('An EOSToolkit error occured - see details below:');
    console.error(err);
    return [];
  }
}

/*
*
* IDENTITY
* Get signer identity
*
*/

export function* fetchIdentity(signer, activeNetwork) {
  try {
    const currentIdentity = yield select(makeSelectIdentity());
    // build a network to suggest
    const networkConfig = {
      protocol: activeNetwork.endpoint.protocol,
      blockchain: activeNetwork.network.network,
      host: activeNetwork.endpoint.url,
      port: activeNetwork.endpoint.port,
      chainId: activeNetwork.network.chainId,
    };

    // suggest the network to the user
    yield signer.suggestNetwork(networkConfig);

    // get identities specific to the activeNetwork
    const id = yield signer.getIdentity({
      accounts: [
        {
          chainId: activeNetwork.network.chainId,
          blockchain: activeNetwork.network.network,
        },
      ],
    });

    const match = id && id.accounts.find(x => x.blockchain === activeNetwork.network.network);

    if (match) {
      return match;
    }
    return null;
  } catch (err) {
    console.error('An EOSToolkit error occured - see details below:');
    console.error(err);
    return null;
  }
}

/*
*
* ACCOUNT
* Load account(s) that has been selected as identity
*
*/

function* getCurrency(reader, token, name) {
  try {
    const currency = yield reader.getCurrencyBalance(token, name);
    const currencies = currency.map(c => {
      return {
        account: token,
        balance: c,
      };
    });
    return currencies;
  } catch (c) {
    let networks = yield select(makeSelectNetworks());
    const active = yield select(makeSelectActiveNetwork());

    const activeIndex = networks.findIndex(network=>{
      return network.chainId === active.network.chainId;
    })

    const endpointIndex = networks[activeIndex].endpoints.findIndex(endpoint=>{
      return endpoint.name === active.endpoint.name;
    })

    networks[activeIndex].endpoints[endpointIndex].failures += 1;

    yield put(updateNetworks(networks));
    return [];
  }
}

function* getAccountDetail(reader, name) {
  try {
    const account = yield reader.getAccount(name);
    const tokens = yield select(makeSelectTokens());
    const tokenData = yield all(
      tokens.map(token => {
        return fork(getCurrency, reader, token.account, name);
      })
    );

    const currencies = yield join(...tokenData);
    const balances = currencies.reduce((a, b) => a.concat(b), []);
    yield spawn(fetchLatency);
    return {
      ...account,
      balances,
    };
  } catch (c) {
    return null;
  }
}

export function* fetchAccount() {
  const reader = yield select(makeSelectReader());
  const identity = yield select(makeSelectIdentity());
  try {
    if (identity && identity.name) {
      const account = yield call(getAccountDetail, reader, identity.name);
      yield put(loadedAccount(account));
    } else {
      yield put(loadedAccount(null));
    }
  } catch (err) {
    console.error('An EOSToolkit error occured - see details below:');
    console.error(err);
  }
}
