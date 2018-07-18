import { takeLatest, put, select, all } from 'redux-saga/effects';
import EosClient, {
  makeSelectEosAuthority as EosAuthority,
  makeSelectEosAccount as EosAccount,
} from 'containers/Scatter/selectors';
import selectTokens from 'containers/Tokens/selectors';
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
  const eosTokens = yield select(selectTokens());
  yield put(loadingNotification());
  try {
    const token = eosTokens.find(tk => tk.symbol === form.symbol);
    const res = yield eosClient.transaction(token.account, tr => {
      tr.transfer(
        {
          from: form.owner,
          to: form.name,
          quantity: `${Number(form.quantity)
            .toFixed(token.precision)
            .toString()} ${form.symbol}`,
          memo: form.memo,
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
