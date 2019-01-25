import { makeSelectReader } from 'containers/NetworkClient/selectors';
import { takeLatest, call, put, select, all, fork, join } from 'redux-saga/effects';
import { FETCH_PRODUCERS } from './constants';
import { fetchedProducers } from './actions';

const producerTable = key => {
  return {
    json: true,
    scope: 'eosio',
    code: 'eosio',
    table: 'producers',
    limit: 1000,
    table_key: 'owner',
    lower_bound: key,
  };
};

const globalTable = () => {
  return {
    json: true,
    scope: 'eosio',
    code: 'eosio',
    table: 'global',
  };
};

//
// Get the network Producers
//
function* getProducers() {
  try {
    const producers = [];
    let key = '';
    let data = { more: true };

    const networkReader = yield select(makeSelectReader());
    const global = yield networkReader.getTableRows(globalTable());
    const total_vote = global.rows[0].total_producer_vote_weight;

    while (data.more) {
      data = yield networkReader.getTableRows(producerTable(key));
      if(data.more) {
        key = data.rows.pop().owner;
      }
      data.rows.map(row => {
        if (row.is_active == "1") {
          producers.push({
            ...row,
            vote_percent: (row.total_votes / total_vote) * 100,
          });
        }
      });
    }
    yield put(fetchedProducers(producers));
  } catch (err) {
    console.error('An EOSToolkit error occured - see details below:');
    console.error(err);
  }
}

function* watchFetchProducers() {
  yield takeLatest(FETCH_PRODUCERS, getProducers);
}

//
// Combine sagas into root saga
//

export default function* rootSaga() {
  yield all([watchFetchProducers()]);
}
