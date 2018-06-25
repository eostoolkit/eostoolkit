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
    const res = form.isEOS
      ? yield buyRAM({ eosClient, eosAccount, eosAuth, form })
      : yield buyRAMBytes({ eosClient, eosAccount, eosAuth, form });

    yield put(successNotification(res.transaction_id));
  } catch (err) {
    yield put(failureNotification(err));
  }
}

function buyRAM({ eosClient, eosAccount, eosAuth, form: { name, eosQuantity } }) {
  return eosClient.transaction(tr => {
    tr.buyram({
      payer: eosAccount,
      receiver: name,
      quant: `${Number(eosQuantity)
        .toFixed(4)
        .toString()} EOS`,
      },
      { authorization: [{ actor: eosAccount, permission: eosAuth }] });
  });
}

function buyRAMBytes({ eosClient, eosAccount, eosAuth, form: { name, byteQuantity } }) {
  return eosClient.transaction(tr => {
    tr.buyrambytes({
      payer: eosAccount,
      receiver: name,
      bytes: Number(byteQuantity),
    },
    { authorization: [{ actor: eosAccount, permission: eosAuth }] });
  });
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
