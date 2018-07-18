import Eos from 'eosjs';
import eosTokens from 'eosTokens';
import { takeLatest, put, all, fork, join } from 'redux-saga/effects';
import eosConfig from 'eosConfig';
import { fetchedTokens } from './actions';
import { FETCH_TOKENS } from './constants';

//
// Retrieve token stats
//

function* getStats(account, symbol) {
  const eosClient = yield Eos(eosConfig);
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

function* fetchEosTokens() {
  try {
    const data = yield fetch(eosTokens);
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
  yield takeLatest(FETCH_TOKENS, fetchEosTokens);
}

//
// Combine sagas into root saga
//

export default function* rootSaga() {
  yield all([watchFetchTokens()]);
}
