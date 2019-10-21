import { makeSelectReader } from 'containers/NetworkClient/selectors';
import { takeLatest, call, put, select, all, fork, join } from 'redux-saga/effects';
import { FETCH_PROXIES } from './constants';
import { fetchedProxies } from './actions';

const proxyTable = {
    json: true,
    scope: 'zks4poorswap',
    code: 'zks4poorswap',
    table: 'cycles',
    limit: 500
}


//
// Get the network Proxies
//
function* getProxies() {
  try {
    const proxies = [];

    const networkReader = yield select(makeSelectReader());

    const data = yield networkReader.get_table_rows(proxyTable);
    data.rows.map(row => {
      proxies.push({
        ...row,
      });
    });
    yield put(fetchedProxies(proxies));
  } catch (err) {
    console.error('An EOSToolkit error occured - see details below:');
    console.error(err);
  }
}

function* watchFetchProxies() {
  yield takeLatest(FETCH_PROXIES, getProxies);
}

//
// Combine sagas into root saga
//

export default function* rootSaga() {
  yield all([watchFetchProxies()]);
}
