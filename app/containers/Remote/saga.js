import Eos from 'eosjs';
import { tokensUrl, networksUrl } from 'remoteConfig';
import { takeLatest, put, all, fork, join, select } from 'redux-saga/effects';
import { removeAccount, scatterLoaded } from 'containers/Scatter/actions';
import { makeSelectScatter } from 'containers/Scatter/selectors';
import { fetchedTokens, fetchedNetworks, selectedNetwork } from './actions';
import { FETCH_TOKENS, FETCH_NETWORKS, FETCH_ALL, SELECT_NETWORK } from './constants';
import { makeSelectEosClient, makeSelectActiveNetwork } from './selectors';

//
// Get available EOS networks
//
function* setNetwork() {
  try {
    const active = yield select(makeSelectActiveNetwork());
    const eosConfig = {
      broadcast: true,
      sign: true,
      chainId: active.network.chainId,
      httpEndpoint: `${active.endpoint.protocol}://${active.endpoint.url}:${active.endpoint.port}`,
    };
    const eosClient = yield Eos(eosConfig);
    yield put(selectedNetwork(active, eosClient));
    const scatter = yield select(makeSelectScatter());
    if (scatter) {
      yield put(scatterLoaded(scatter));
    }
    yield put(removeAccount());
  } catch (err) {
    // console.log(err);
  }
}

function* watchSelectNetwork() {
  yield takeLatest(SELECT_NETWORK, setNetwork);
}

//
// Get available EOS networks
//
function* getNetworks() {
  try {
    const data = yield fetch(networksUrl);
    const list = yield data.json();

    // get default
    const network = list.find(n => n.network === 'eos' && n.type === 'mainnet');
    const endpoint = network.endpoints.find(e => e.name === 'GenerEOS');

    const active = {
      network,
      endpoint,
    };
    const eosConfig = {
      broadcast: true,
      sign: true,
      chainId: active.network.chainId,
      httpEndpoint: `${active.endpoint.protocol}://${active.endpoint.url}:${active.endpoint.port}`,
    };

    const eosClient = yield Eos(eosConfig);

    yield put(fetchedNetworks(list));
    yield put(selectedNetwork(active, eosClient));
    const scatter = yield select(makeSelectScatter());
    if (scatter) {
      yield put(scatterLoaded(scatter));
    }
  } catch (err) {
    // console.log(err);
  }
}

function* watchFetchNetworks() {
  yield takeLatest(FETCH_NETWORKS, getNetworks);
}

//
// Retrieve token stats
//

function* getStats(account, symbol) {
  const eosClient = yield select(makeSelectEosClient());
  try {
    const stats = yield eosClient.getCurrencyStats(account, symbol);
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

function* getTokens() {
  try {
    const data = yield fetch(tokensUrl);
    const list = yield data.json();
    const stats = yield all(
      list.map(token => {
        return fork(getStats, token.account, token.symbol);
      })
    );
    const tokens = yield join(...stats);
    yield put(fetchedTokens(tokens));
  } catch (err) {
    // console.log(err);
  }
}

function* watchFetchTokens() {
  yield takeLatest(FETCH_TOKENS, getTokens);
}

//
// Combine sagas into root saga
//
function* getAll() {
  yield getNetworks();
  yield getTokens();
}

function* watchFetchAll() {
  yield takeLatest(FETCH_ALL, getAll);
}

export default function* rootSaga() {
  yield all([watchFetchAll(), watchFetchNetworks(), watchFetchTokens(), watchSelectNetwork()]);
}
