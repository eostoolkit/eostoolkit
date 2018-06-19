import Eos from 'eosjs';
import { takeLatest, call, put, select, all } from 'redux-saga/effects';
import EosClient from 'containers/Scatter/selectors.js';
import { makeSelectEosAccount as EosAccount } from 'containers/Scatter/selectors.js';
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
  yield put(loadingNotification());
  try {
    const res = yield eosClient.transaction(tr => {
      tr.undelegatebw({
        from: eosAccount,
        receiver: form.name,
        unstake_net_quantity: Number(form.net).toFixed(4).toString() + ' EOS',
        unstake_cpu_quantity: Number(form.cpu).toFixed(4).toString() + ' EOS',
      })
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
