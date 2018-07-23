import { takeLatest, put, select, all } from 'redux-saga/effects';
import EosClient, {
  makeSelectEosAuthority as EosAuthority,
  makeSelectEosAccount as EosAccount,
} from 'containers/Scatter/selectors';
import { failureNotification, loadingNotification, successNotification } from 'containers/Notification/actions';
import Form, { makeSelectRegProxy as RegProxy } from './selectors';
import { DEFAULT_ACTION, REG_PROXY } from './constants';
//
// Get the EOS Client once Scatter loads
//
function* performRegProxy() {
  const eosClient = yield select(EosClient());
  const form = yield select(RegProxy());
  const eosAccount = yield select(EosAccount());
  const eosAuth = yield select(EosAuthority());
  yield put(loadingNotification());
  try {
    const res = yield eosClient.transaction('regproxyinfo', tr => {
      tr.remove(
        {
          proxy: form.proxy,
        },
        { authorization: [{ actor: eosAccount, permission: eosAuth }] }
      );
    });
    yield put(successNotification(res.transaction_id));
  } catch (err) {
    yield put(failureNotification(err));
  }
}

function* watchRegProxy() {
  yield takeLatest(REG_PROXY, performRegProxy);
}
//
// Get the EOS Client once Scatter loads
//
function* performAction() {
  const eosClient = yield select(EosClient());
  const form = yield select(Form());
  const eosAccount = yield select(EosAccount());
  const eosAuth = yield select(EosAuthority());
  yield put(loadingNotification());
  try {
    const res = yield eosClient.transaction(tr => {
      tr.regproxy(
        {
          proxy: form.owner,
          isproxy: 0,
        },
        { authorization: [{ actor: eosAccount, permission: eosAuth }] }
      );
    });
    yield put(successNotification(res.transaction_id));
  } catch (err) {
    yield put(failureNotification(err));
  }
}

function* watchDefaultAction() {
  yield takeLatest(DEFAULT_ACTION, performAction);
}

//
// Combine sagas into root saga
//

export default function* rootSaga() {
  yield all([watchDefaultAction(), watchRegProxy()]);
}
