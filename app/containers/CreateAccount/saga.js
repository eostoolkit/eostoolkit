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
      tr.newaccount(
        {
          creator: form.owner,
          name: form.name,
          owner: form.ownerKey,
          active: form.activeKey,
        },
        { authorization: [{ actor: eosAccount, permission: eosAuth }] }
      );
      tr.buyrambytes(
        {
          payer: form.owner,
          receiver: form.name,
          bytes: Number(form.ram),
        },
        { authorization: [{ actor: eosAccount, permission: eosAuth }] }
      );
      tr.delegatebw(
        {
          from: form.owner,
          receiver: form.name,
          stake_net_quantity: `${Number(form.net)
            .toFixed(4)
            .toString()} EOS`,
          stake_cpu_quantity: `${Number(form.cpu)
            .toFixed(4)
            .toString()} EOS`,
          transfer: form.transfer ? 1 : 0,
        },
        { authorization: [{ actor: eosAccount, permission: eosAuth }] }
      );
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
