import { makeSelectReader } from 'containers/NetworkClient/selectors';
import { takeLatest, call, put, select, all, fork, join } from 'redux-saga/effects';
import { FETCH_PROXIES } from './constants';
import { fetchedProxies } from './actions';

const proxyTable = {
    json: true,
    scope: 'regproxyinfo',
    code: 'regproxyinfo',
    table: 'proxies',
    limit: 500
}


//
// Get the network Proxies
//
function* getProxies() {
  try {
    const proxies = [];

    const networkReader = yield select(makeSelectReader());

    const data = yield networkReader.getTableRows(proxyTable);
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
