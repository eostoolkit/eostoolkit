import Eos from 'eosjs';
import { put, select } from 'redux-saga/effects';
import { failureNotification, loadingNotification, successNotification } from 'containers/Notification/actions';

import { makeSelectIdentity, makeSelectWriter, makeSelectReader, makeSelectTransaction } from '../selectors';

export function* pushTransaction() {
  yield put(loadingNotification());
  try {
    const networkIdentity = yield select(makeSelectIdentity());
    const transaction = yield select(makeSelectTransaction());
    const networkWriter = yield select(makeSelectWriter());
    if (!networkWriter || !transaction || !networkIdentity) {
      throw { message: 'Writing is not enabled - check your Scatter connection' };
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
        authorization: [networkIdentity],
      };
    });
    console.log(`Attempting to send tx to scatter: ${JSON.stringify(actions, null, 2)}`);
    const res = yield networkWriter.transaction({ actions });
    console.log("Happy");
    yield put(successNotification(res.transaction_id));
    console.log("Sad");
  } catch (err) {
    console.error('An EOSToolkit error occured - see details below:');
    console.error(err);
    yield put(failureNotification(err));
  }
}

//actually offline transactions
// export function* pushTransaction() {
//   yield put(loadingNotification());
//   try {
//     const transaction = yield select(makeSelectTransaction());
//     const networkReader = yield select(makeSelectReader());
//     const networkWriter = yield select(makeSelectWriter());
//
//     if (!networkReader || !transaction ) {
//       throw { message: 'Reader is not enabled - check your network connection' };
//     }
//     if (transaction.error) {
//       throw { message: transaction.error };
//     }
//     if (transaction.success) {
//       yield put(successNotification(transaction.success));
//       return;
//     }
//
//     const actions = transaction.map(tx => {
//       return {
//         ...tx,
//         authorization: [{actor:'offline',permission:'offline'}],
//       };
//     });
//
//     console.log(`Attempting to send tx to client: ${JSON.stringify(actions, null, 2)}`);
//     const res = yield networkReader.transaction({ actions },{broadcast: false, sign: false, expireInSeconds: 3600});
//     console.log(`Made offline tx to scatter: ${JSON.stringify(res.transaction, null, 2)}`);
//     console.log(res);
//     const res2 = yield networkWriter.transaction(res.transaction.transaction,{broadcast: false, sign: true});
//     console.log(`Made offline tx to scatter: ${JSON.stringify(res2.transaction, null, 2)}`);
//     yield put(successNotification('Transaction generated'));
//   } catch (err) {
//     console.error('An EOSToolkit error occured - see details below:');
//     console.error(err);
//     yield put(failureNotification(err));
//   }
// }
