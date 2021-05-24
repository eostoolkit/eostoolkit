// import Ping from 'ping.js';
import Ping from 'utils/ping';
import { orderBy } from 'lodash';
import { put, all, join, fork, select, call } from 'redux-saga/effects';
import { tokensUrl, claimsUrl, lightAPI } from 'remoteConfig';

import { loadedNetworks, updateNetworks, loadedAccount, setNetwork, loadedRex, setTokens } from '../actions';
import { makeSelectIdentity, makeSelectReader, makeSelectNetworks, makeSelectActiveNetwork } from '../selectors';

/*
 *
 * NETWORKS
 * Get available networks
 *
 */

// fetch networks and select defaultNetwork
export function* fetchNetworks(filter) {
  // default network
  let defaultNameNetwork = 'EOS Mainnet';
  let defaultNetwork = 'eos';
  let defaultType = 'mainnet';
  let defaultName = 'Greymass';

  // get network saving in localstorage
  const networkStorage = localStorage.getItem('networkStorage');

  // if user provides full filter
  if (
    filter.filter.has('name') &&
    filter.filter.has('network') &&
    filter.filter.has('type') &&
    filter.filter.has('api')
  ) {
    defaultNameNetwork = filter.filter.get('name');
    defaultNetwork = filter.filter.get('network');
    defaultType = filter.filter.get('type');
    defaultName = filter.filter.get('api');
  } else if (filter.filter.has('name')) {
    // if user only provides name of network
    defaultNameNetwork = filter.filter.get('name');
  } else if (networkStorage) {
    // if user doesn't provide filter of network, get in localstorage
    const nameStr = networkStorage.split('@_')[0];
    const networkStr = networkStorage.split('@_')[1];
    const typeStr = networkStorage.split('@_')[2];
    const apiStr = networkStorage.split('@_')[3];

    if (networkStr && typeStr && apiStr && nameStr) {
      defaultNameNetwork = nameStr;
      defaultNetwork = networkStr;
      defaultType = typeStr;
      defaultName = apiStr;
    }
  }

  try {
    // fetch the remote network list
    const data = yield fetch(lightAPI);
    const rawNetworks = yield data.json();

    const networkData = Object.keys(rawNetworks['api-endpoints'])
      .map(key => {
        const apiData = rawNetworks['api-endpoints'][key];

        const networks = apiData.networks.map(network => ({ ...rawNetworks.networks[network], network }));

        return networks.map(network => {
          return {
            name: network.description,
            description: network.description,
            chainId: network.chainid,
            prefix: network.systoken,
            apiPrefix: network.network,
            network: 'eos',
            endpoints: [
              {
                name: 'Light API',
                protocol: 'https',
                port: 443,
                url: key.replace('https://', ''),
                description: 'Light API',
              },
            ],
          };
        });
      })
      .flat();

    const networks = networkData.map(network => {
      const { endpoints, ...networkDetails } = network;

      const endpointDetails = endpoints.map(endpoint => {
        return {
          ...endpoint,
          failures: 0,
          ping: -1,
        };
      });
      return {
        ...networkDetails,
        endpoints: endpointDetails,
      };
    });

    console.log({networks})

    let network = networks.find(n => n.name.toLowerCase() === defaultNameNetwork.toLowerCase());
    let endpoint;

    if (network) {
      endpoint = network.endpoints.find(e => e.name.toLowerCase() === defaultName.toLowerCase());
      if (!endpoint) {
        endpoint = network.endpoints[0];
      }
    } else {
      network = networks.find(n => n.network === 'eos' && n.type === 'mainnet');
      endpoint = network.endpoints.find(e => e.name === 'Greymass');
    }

    // update on local
    const endpointStorage = `${defaultNameNetwork}@_${defaultNetwork}@_${defaultType}@_${defaultName}`;
    localStorage.setItem('networkStorage', endpointStorage);
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

// function* makeEndpointsLatency(endpoint) {
//   const { ping, ...endpointDetails } = endpoint;

//   try {
//     return {
//       ...endpointDetails,
//       ping: yield call(Ping, `${endpoint.protocol}://${endpoint.url}:${endpoint.port}/v1/chain/get_info`),
//     };
//   } catch (c) {
//     return {
//       ...endpointDetails,
//       ping: 5000,
//     };
//   }
// }

// export function* fetchLatency() {
//   try {
//     // fetch the remote network list
//     const networks = yield select(makeSelectNetworks());
//     const active = yield select(makeSelectActiveNetwork());

//     const activeIndex = networks.findIndex(network => {
//       return network.chainId === active.network.chainId;
//     });

//     let endpoints = networks[activeIndex].endpoints;

//     const latencies = yield all(
//       endpoints.map(endpoint => {
//         return fork(makeEndpointsLatency, endpoint);
//       })
//     );

//     endpoints = yield join(...latencies);
//     networks[activeIndex].endpoints = endpoints;
//     yield put(updateNetworks(networks));

//     const sorted = orderBy(endpoints, ['failures', 'ping'], 'asc');
//     const best = sorted[0];

//     if (active.endpoint.name !== best.name) {
//       const activeNetwork = {
//         network: networks[activeIndex],
//         endpoint: best,
//       };

//       yield put(setNetwork(activeNetwork, false));
//     }
//   } catch (err) {
//     console.error('An EOSToolkit error occured - see details below:');
//     console.error(err);
//   }
// }

/*
 *
 * TOKENS
 * Get tokens and stats
 *
 */

function* fetchTokenInfo(reader, account, symbol) {
  try {
    if (symbol === 'OCT') throw { message: 'OCT has no STATS table - please fix!' };
    const stats = yield reader.get_currency_stats(account, symbol);
    const split = stats[symbol].max_supply.split(' ')[0].split('.');
    const precision = split.length > 1 ? split[1].length : 0;
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
    const activeNetwork = yield select(makeSelectActiveNetwork());

    console.log(activeNetwork);
    const tokenList = [
      {
        symbol: activeNetwork.network.prefix,
        account: 'eosio.token',
      },
      ...list,
    ];
    console.log(tokenList);
    const info = yield all(
      tokenList.map(token => {
        return fork(fetchTokenInfo, reader, token.account, token.symbol);
      })
    );
    console.log(info);
    const tokens = yield join(...info);
    console.log(tokens);
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
    const currency = yield reader.get_currency_balance(token, name);
    const currencies = currency.map(c => {
      return {
        account: token,
        balance: c,
      };
    });
    return currencies;
  } catch (c) {
    const networks = yield select(makeSelectNetworks());
    const active = yield select(makeSelectActiveNetwork());

    const activeIndex = networks.findIndex(network => {
      return network.chainId === active.network.chainId;
    });

    const endpointIndex = networks[activeIndex].endpoints.findIndex(endpoint => {
      return endpoint.name === active.endpoint.name;
    });

    networks[activeIndex].endpoints[endpointIndex].failures += 1;

    yield put(updateNetworks(networks));
    return [];
  }
}

function onlyUnique(value, index, self) {
  return self.indexOf(value) === index;
}

function convertFinalData({ account, balance }) {
  let amount = 0;
  let symbol = '';

  if (balance) {
    const balList = balance.split(' ');
    if (balList.length === 2) {
      symbol = balList[1];
      amount = balList[0];
    }
  }
  return { amount, code: account, symbol };
}

function* getAccountDetail(reader, name) {
  try {
    const account = yield reader.get_account(name);
    const activeNetwork = yield select(makeSelectActiveNetwork());

    console.log('ACTIVE NETWORK', activeNetwork);

    if (activeNetwork.network.prefix === 'EOS') {
      try {
        const flare = yield fetch(`https://api.light.xeos.me/api/account/eos/${account.account_name}`);

        const flareData = yield flare.json();

        if (flareData) {
          const array = [];

          yield put(setTokens(flareData.balances));

          yield flareData.balances.map(tk => {
            if (tk.amount) {
              return array.push(`${Number(tk.amount).toFixed(tk.decimals)} ${tk.currency}`);
            }
          });

          return {
            ...account,
            balances: array,
          };
        }
      } catch (err) {
        console.log(err);
      }
    }

    if (activeNetwork.network.prefix === 'TLOS') {
      try {
        const flare = yield fetch(`https://api.light.xeos.me/api/account/telos/${account.account_name}`);

        const flareData = yield flare.json();

        if (flareData) {
          const array = [];

          yield put(setTokens(flareData.balances));

          yield flareData.balances.map(tk => {
            if (tk.amount) {
              return array.push(`${Number(tk.amount).toFixed(tk.decimals)} ${tk.currency}`);
            }
          });

          return {
            ...account,
            balances: array,
          };
        }
      } catch (err) {
        console.log(err);
      }
    }

    if (activeNetwork.network.prefix === 'JUNGLE') {
      try {
        const flare = yield fetch(
          `https://lightapi.eosgeneva.io/api/account/${activeNetwork.network.prefix.toLowerCase()}/${
            account.account_name
          }`
        );

        const flareData = yield flare.json();

        if (flareData) {
          const array = [];

          yield put(setTokens(flareData.balances));

          yield flareData.balances.map(tk => {
            if (tk.amount) {
              return array.push(`${Number(tk.amount).toFixed(tk.decimals)} ${tk.currency}`);
            }
          });

          return {
            ...account,
            balances: array,
          };
        }
      } catch (err) {
        console.log(err);
      }
    }

    try {
      const flare = yield fetch(
        `https://lightapi.eosamsterdam.net/api/account/${activeNetwork.network.prefix.toLowerCase()}/${
          account.account_name
        }`
      );

      const flareData = yield flare.json();

      if (flareData) {
        const array = [];

        yield put(setTokens(flareData.balances));

        yield flareData.balances.map(tk => {
          if (tk.amount) {
            return array.push(`${Number(tk.amount).toFixed(tk.decimals)} ${tk.currency}`);
          }
        });

        return {
          ...account,
          balances: array,
        };
      }
    } catch (err) {
      console.log(err);
    }
  } catch (c) {
    console.log(c);
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

export function* fetchRexInfo() {
  const reader = yield select(makeSelectReader());
  const identity = yield select(makeSelectIdentity());
  if (reader === null || reader === undefined || identity === null || identity === undefined) return;
  try {
    const account = yield reader.get_account(identity.name);
    const body = {
      code: 'eosio',
      json: true,
      scope: 'eosio',
      table: 'rexbal',
      upper_bound: account.account_name,
      lower_bound: account.account_name,
    };
    const data = yield reader.get_table_rows(body);
    const rex = yield data.rows[0];

    console.log('rex: ', rex);

    yield put(loadedRex(rex));
  } catch (c) {
    console.log(c);
  }
}
