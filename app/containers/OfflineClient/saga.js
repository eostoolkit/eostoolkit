import {
  makeSelectReader,
  makeSelectWriter,
  makeSelectTransaction,
  makeSelectSigner,
  makeSelectIdentity,
  makeSelectActiveNetwork,
} from 'containers/NetworkClient/selectors';
import { takeLatest, call, put, select, all, fork, join } from 'redux-saga/effects';
import { failureNotification, loadingNotification, successNotification } from 'containers/Notification/actions';
import fileDownload from 'js-file-download';

import { STAGE_TRANSACTION, SIGN_TRANSACTION, PUSH_TRANSACTION } from './constants';

//actually offline transactions
export function* stageTransaction(action) {
  yield put(loadingNotification());
  try {
    const transaction = JSON.parse(action.data.transaction); //yield select(makeSelectTransaction());
    //const networkReader = yield select(makeSelectReader()); //changed this from reader to writter, others please verify
    const networkWriter = yield select(makeSelectWriter());

    if (!networkWriter || !transaction) {
      throw { message: 'Writer is not enabled - check your network connection' };
    }
    if (transaction.error) {
      throw { message: transaction.error };
    }
    if (transaction.success) {
      yield put(successNotification(transaction.success));
      return;
    }

    const actions = transaction.map(tx => {
      return {
        ...tx,
        authorization: [{ actor: action.data.actor, permission: action.data.permission }],
      };
    });
    const res = yield networkWriter.eosApi.transact(
      { actions },
      { broadcast: false, sign: false, blocksBehind: 3, expireSeconds: 3600 }
    );
    const data = JSON.stringify(res.transaction.transaction, null, 2);
    const filename = `tx-${action.data.actor}-${new Date().getTime()}.json`;

    fileDownload(data, filename, 'application/json');
    yield put(successNotification(res.transaction.transaction));
  } catch (err) {
    console.error('An EOSToolkit error occured - see details below:');
    console.error(err);
    yield put(failureNotification(err));
  }
}

//actually offline transactions
export function* signTransaction(action) {
  yield put(loadingNotification());
  try {
    const networkReader = yield select(makeSelectReader());
    const signer = yield select(makeSelectSigner());
    const identity = yield select(makeSelectIdentity());
    const network = yield select(makeSelectActiveNetwork());

    if (!networkReader || !signer || !identity) {
      throw { message: 'Require network connection and identity' };
    }

    //sign a transaction json
    const chainId = network.network.chainId;
    const transaction = JSON.parse(action.data.transaction);
    const abis = yield all(
      transaction.actions.map(action => {
        return fork(networkReader.fc.abiCache.abiAsync, action.account);
      })
    );
    yield join(...abis);

    const chainIdBuf = Buffer.from(chainId, 'hex');
    const packedContextFreeData = Buffer.from(new Uint8Array(32)); // TODO
    let buf = networkReader.fc.toBuffer('transaction', transaction);
    let signBuf = Buffer.concat([chainIdBuf, buf, packedContextFreeData]);
    let signature = yield signer.getArbitrarySignature(
      identity.publicKey,
      signBuf,
      'Offline signing of multisig action',
      false
    );

    const data = JSON.stringify(signature, null, 2);
    const filename = `signature-${identity.name}-${new Date().getTime()}.json`;

    fileDownload(data, filename, 'application/json');
    yield put(successNotification(signature));
  } catch (err) {
    console.error('An EOSToolkit error occured - see details below:');
    console.error(err);
    yield put(failureNotification(err));
  }
}

//push transactions
export function* pushTransaction(action) {
  yield put(loadingNotification());
  try {
    const networkReader = yield select(makeSelectReader());
    if (!networkReader) {
      throw { message: 'Reader is not enabled - check your network connection' };
    }
    const signatures = action.data.signatures
      .replace(/[\n\r]/g, '')
      .replace(/['"]+/g, '')
      .trim()
      .split(',');
    const transaction = {
      compression: 'none',
      transaction: JSON.parse(action.data.transaction),
      signatures,
    };
    const res = yield networkReader.push_transaction(transaction);
    yield put(successNotification({ TransactionId: res.transaction_id }));
  } catch (err) {
    console.error('An EOSToolkit error occured - see details below:');
    console.error(err);
    yield put(failureNotification(err));
  }
}

function* watchStageTransaction() {
  yield takeLatest(STAGE_TRANSACTION, stageTransaction);
}

function* watchSignTransaction() {
  yield takeLatest(SIGN_TRANSACTION, signTransaction);
}

function* watchPushTransaction() {
  yield takeLatest(PUSH_TRANSACTION, pushTransaction);
}

//
// Combine sagas into root saga
//

export default function* rootSaga() {
  yield all([watchStageTransaction(), watchSignTransaction(), watchPushTransaction()]);
}
