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
    const res = yield eosClient.transaction(form.account, tr => {
      if (form.method === 'signup') {
        tr.signup(
          {
            owner: eosAccount,
            quantity: `0.0000 ${form.symbol}`,
          },
          { authorization: [{ actor: eosAccount, permission: eosAuth }] }
        );
      }

      if (form.method === 'claim') {
        tr.claim(
          {
            claimer: eosAccount,
          },
          { authorization: [{ actor: eosAccount, permission: eosAuth }] }
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
