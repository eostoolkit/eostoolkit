import { makeSelectReader } from 'containers/NetworkClient/selectors';
import { takeLatest, call, put, select, all, fork, join } from 'redux-saga/effects';
import { STAGE_TRANSACTION, SIGN_TRANSACTION, PUSH_TRANSACTION } from './constants';


//actually offline transactions
export function* stageTransaction() {
  yield put(loadingNotification());
  try {
    const transaction = yield select(makeSelectTransaction());
    const networkReader = yield select(makeSelectReader());
    const networkWriter = yield select(makeSelectWriter());
    const signer = yield select(makeSelectSigner());
    const identity = yield select(makeSelectIdentity());
    const network = yield select(makeSelectActiveNetwork());

    // if (!networkReader || !transaction ) {
    //   throw { message: 'Reader is not enabled - check your network connection' };
    // }
    // if (transaction.error) {
    //   throw { message: transaction.error };
    // }
    // if (transaction.success) {
    //   yield put(successNotification(transaction.success));
    //   return;
    // }

    const actions = transaction.map(tx => {
      return {
        ...tx,
        authorization: [{ actor:identity.name, permission:identity.authority }],
      };
    });

    console.log(networkReader);

    console.log(`Attempting to send tx to client: ${JSON.stringify(actions, null, 2)}`);
    const res = yield networkWriter.transaction({ actions },{broadcast: false, sign: false, expireInSeconds: 3600});


    //console.log(`Made offline tx to scatter: ${JSON.stringify(res.transaction, null, 2)}`);

    //sign a transaction json
    const chainId = network.network.chainId;
    const chainIdBuf = Buffer.from(chainId,'hex');
    const packedContextFreeData = Buffer.from(new Uint8Array(32)) // TODO
    let buf = networkReader.fc.toBuffer('transaction',res.transaction.transaction);
    let signBuf = Buffer.concat([chainIdBuf, buf, packedContextFreeData]);
    let signature = yield signer.getArbitrarySignature(identity.publicKey,signBuf,'Offline signing of multisig action',false);

    console.log(sign);
  } catch (err) {
    console.error('An EOSToolkit error occured - see details below:');
    console.error(err);
    yield put(failureNotification(err));
  }
}


function* watchStageTransaction() {
  yield takeLatest(SIGN_TRANSACTION, stageTransaction);
}

//
// Combine sagas into root saga
//

export default function* rootSaga() {
  yield all([watchStageTransaction()]);
}
