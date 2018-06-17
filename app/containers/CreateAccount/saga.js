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
    yield eosClient.transaction(tr => {
      tr.newaccount({
        creator: eosAccount,
        name: form.name,
        owner: form.ownerKey,
        active: form.activeKey,
      })
      tr.buyrambytes({
        payer: eosAccount,
        receiver: form.name,
        bytes: Number(form.ram)
      })
      tr.delegatebw({
        from: eosAccount,
        receiver: form.name,
        stake_net_quantity: Number(form.net).toFixed(4).toString() + ' EOS',
        stake_cpu_quantity: Number(form.cpu).toFixed(4).toString() + ' EOS',
        transfer: form.transfer ? 1 : 0
      })
    }).then((result) => {
      put(successNotification(result.transaction_id));
    })

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
