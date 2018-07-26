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
    console.error("An EOSToolkit error occured - see details below:");
    console.error(err);
    yield put(failureNotification(JSON.stringify(err)));
  }
}

function buyRAM({ eosClient, eosAccount, eosAuth, form: { owner, name, eosQuantity } }) {
  return eosClient.transaction(tr => {
    tr.buyram(
      {
        payer: owner,
        receiver: name,
        quant: `${Number(eosQuantity)
          .toFixed(4)
          .toString()} EOS`,
      },
      { authorization: [{ actor: eosAccount, permission: eosAuth }] }
    );
  });
}

function buyRAMBytes({ eosClient, eosAccount, eosAuth, form: { owner, name, byteQuantity } }) {
  return eosClient.transaction(tr => {
    tr.buyrambytes(
      {
        payer: owner,
        receiver: name,
        bytes: Number(byteQuantity),
      },
      { authorization: [{ actor: eosAccount, permission: eosAuth }] }
    );
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
