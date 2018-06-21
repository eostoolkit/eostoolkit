import Eos from 'eosjs';
import { takeLatest, call, put, select, all } from 'redux-saga/effects';
import EosClient from 'containers/Scatter/selectors.js';
import { makeSelectEosAccount as EosAccount } from 'containers/Scatter/selectors.js';
import { makeSelectEosAuthority as EosAuthority } from 'containers/Scatter/selectors.js';
import Form from './selectors.js';
import { DEFAULT_ACTION } from './constants';
import { successNotification } from 'containers/Notification/actions';
import { failureNotification } from 'containers/Notification/actions';
import { loadingNotification } from 'containers/Notification/actions';

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
      if(form.activeKey) {
        tr.updateauth({
          account: eosAccount,
          permission: 'active',
          parent: 'owner',
          auth: form.activeKey,
        },{authorization: [{actor: eosAccount, permission: eosAuth}]}) //
      }
      if(form.ownerKey) {
        tr.updateauth({
          account: eosAccount,
          permission: 'owner',
          parent: '',
          auth: form.ownerKey,
        },{authorization: [{actor: eosAccount, permission: 'owner'}]})
      }
    });
    yield put(successNotification(res.transaction_id));

  } catch(err) {
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
  yield all([
    watchDefaultAction(),
  ])
}
