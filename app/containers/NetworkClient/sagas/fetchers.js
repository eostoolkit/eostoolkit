import { put, all, join, fork, select, call } from 'redux-saga/effects';
import { tokensUrl, networksUrl } from 'remoteConfig';

import { loadedNetworks, loadedAccount } from '../actions';
import { makeSelectIdentity, makeSelectReader, makeSelectTokens } from '../selectors';

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
    const networks = yield data.json();

    // get default
    const network = networks.find(n => n.network === 'eos' && n.type === 'mainnet');
    const endpoint = network.endpoints.find(e => e.name === 'Scatter Load Balancer');

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

    console.log(tokenList);

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

    // should we remove an existing identity
    // we assume that on first load:
    //  signer.identity = object and currentIdentity = null
    //  so we can skip forgetIdentity
    // if signer.identity = object and currentIdentity != null
    //  then the user has requested t
    if (signer.identity && currentIdentity) {
      yield signer.forgetIdentity();
    }

    // get identities specific to the activeNetwork
    const id = yield signer.getIdentity({
      accounts: [
        {
          chainId: activeNetwork.network.chainId,
          blockchain: activeNetwork.network.network,
        },
      ],
    });

    // console.log(id);

    const match = id && id.accounts.find(x => x.blockchain === activeNetwork.network.network);

    if (match) {
      return {
        actor: match.name,
        permission: match.authority,
      };
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
    if (identity && identity.actor) {
      const account = yield call(getAccountDetail, reader, identity.actor);
      yield put(loadedAccount(account));
    } else {
      yield put(loadedAccount(null));
    }
  } catch (err) {
    console.error('An EOSToolkit error occured - see details below:');
    console.error(err);
  }
}
