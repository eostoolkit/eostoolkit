import { makeSelectReader } from 'containers/NetworkClient/selectors';
import { takeLatest, call, put, select, all, fork, join } from 'redux-saga/effects';
import { FETCH_PRODUCERS } from './constants';
import { fetchedProducers } from './actions';

const producerTable = {
  json: true,
  scope: "eosio",
  code: "eosio",
  table: "producers",
  limit: 5000,
}

//
// Get the network Producers
//
function* getProducers() {
  try {
    const networkReader = yield select(makeSelectReader());
    const producers = yield networkReader.getTableRows(producerTable);
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
