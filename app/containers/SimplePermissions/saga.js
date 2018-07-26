import { takeLatest, put, select, all } from 'redux-saga/effects';
import EosClient, {
  makeSelectEosAuthority as EosAuthority,
  makeSelectEosAccount as EosAccount,
} from 'containers/Scatter/selectors';
import { failureNotification, loadingNotification, successNotification } from 'containers/Notification/actions';
import Form from './selectors';
import { DEFAULT_ACTION } from './constants';

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
      if (form.activeKey) {
        tr.updateauth(
          {
            account: form.owner,
            permission: 'active',
            parent: 'owner',
            auth: form.activeKey,
          },
          { authorization: [{ actor: eosAccount, permission: eosAuth }] }
        ); //
      }
      if (form.ownerKey) {
        tr.updateauth(
          {
            account: form.owner,
            permission: 'owner',
            parent: '',
            auth: form.ownerKey,
          },
          { authorization: [{ actor: eosAccount, permission: 'owner' }] }
        );
      }
    });
    yield put(successNotification(res.transaction_id));
  } catch (err) {
    console.error("An EOSToolkit error occured - see details below:");
    console.error(err);
    yield put(failureNotification(JSON.stringify(err)));
  }
}

function* watchDefaultAction() {
  yield takeLatest(DEFAULT_ACTION, performAction);
}

//
// Combine sagas into root saga
//

export default function* rootSaga() {
  yield all([watchDefaultAction()]);
}
