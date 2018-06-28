import { takeLatest, put, select, all } from 'redux-saga/effects';
import { v4 as uuidv4 } from 'uuid';
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
    const res = yield eosClient.transaction('eosforumtest', tr => {
      tr.post(
        {
          account: form.owner,
          post_uuid: uuidv4(),
          title: form.title,
          content: form.content,
          reply_to_account: '',
          reply_to_post_uuid: '',
          certify: 1,
          json_metadata: '',
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
  yield all([watchDefaultAction()]);
}
