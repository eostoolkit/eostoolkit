import Eos from 'eosjs';
import { put, select, call } from 'redux-saga/effects';
import { failureNotification, loadingNotification, successNotification } from 'containers/Notification/actions';
import { push } from 'react-router-redux';
import { makeSelectIdentity, makeSelectWriter, makeSelectTransaction, makeSelectOffline } from '../selectors';

export function* pushTransaction(action) {
  const offlineMode = yield select(makeSelectOffline());
  if(offlineMode) {
    yield action.history.push('/multisig/auth');
  } else {
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
          authorization: [{ actor:networkIdentity.name, permission:networkIdentity.authority }],
        };
      });
      console.log(`Attempting to send tx to scatter: ${JSON.stringify(actions, null, 2)}`);
      const res = yield networkWriter.transaction({ actions });
      yield put(successNotification(res.transaction_id));

    } catch (err) {
      console.error('An EOSToolkit error occured - see details below:');
      console.error(err);
      yield put(failureNotification(err));
    }
  }
}
