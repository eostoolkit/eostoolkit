import { takeLatest, put, select, all } from 'redux-saga/effects';
import EosClient, { makeSelectEosAccount as EosAccount } from 'containers/Scatter/selectors';
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
  yield put(loadingNotification());
  try {
    const res = form.isEOS
      ? yield buyRAM({ eosClient, eosAccount, form })
      : yield buyRAMBytes({ eosClient, eosAccount, form });

    yield put(successNotification(res.transaction_id));
  } catch (err) {
    yield put(failureNotification(err));
  }
}

function buyRAM({ eosClient, eosAccount, form: { name, eosQuantity } }) {
  return eosClient.transaction(tr => {
    tr.buyram({
      payer: eosAccount,
      receiver: name,
      quant: `${Number(eosQuantity)
        .toFixed(4)
        .toString()} EOS`,
    });
  });
}

function buyRAMBytes({ eosClient, eosAccount, form: { name, byteQuantity } }) {
  return eosClient.transaction(tr => {
    tr.buyrambytes({
      payer: eosAccount,
      receiver: name,
      bytes: Number(byteQuantity),
    });
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
