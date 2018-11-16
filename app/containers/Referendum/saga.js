import { makeSelectReader, makeSelectIdentity } from 'containers/NetworkClient/selectors';
import { takeLatest, call, put, select, all, fork, join } from 'redux-saga/effects';
import { FETCH_REF } from './constants';
import { fetchedRef } from './actions';
import { refUrl } from 'remoteConfig';
//
// Get the network Ref
//
function* getRef() {
  try {

    const data = yield fetch(refUrl);
    const list = yield data.json();
    console.log(list);//TODO: remove
    yield put(fetchedRef(list));
  } catch (err) {
    console.error('An EOSToolkit error occured - see details below:');
    console.error(err);
    yield put(fetchedRef([]));
  }
}

function* watchFetchRef() {
  yield takeLatest(FETCH_REF, getRef);
}

//
// Combine sagas into root saga
//

export default function* rootSaga() {
  yield all([watchFetchRef()]);
}
