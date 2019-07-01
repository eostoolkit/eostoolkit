import {RpcError} from 'eosjs';
import { put, select, call } from 'redux-saga/effects';
import { failureNotification, loadingNotification, successNotification } from 'containers/Notification/actions';
import { push } from 'react-router-redux';
import { makeSelectIdentity, makeSelectWriter, makeSelectTransaction, makeSelectOffline } from '../selectors';
import { loadAccount } from '../actions';

function *sleep(time) {
  yield new Promise(resolve => setTimeout(resolve, time));
}

export function* pushTransaction(action) {
  const offlineMode = yield select(makeSelectOffline());
  if(offlineMode) {
    yield action.history.push('/multisig/create');
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
      console.log(`Attempting to send tx to scatterzzzz: ${JSON.stringify(actions, null, 2)}`);
      const res = yield networkWriter.transact({ actions }, {blocksBehind: 3, expireSeconds: 30});
      console.log("@@@ result of transaction to eos ", res);
      yield put(successNotification({TransactionId: res.transaction_id}));
      //wait for block to be committed
      yield sleep(1000);
      yield put(loadAccount());
    } catch (err) {
      console.error('An EOSToolkit error occured - see details below:');
      console.error(err);
      yield put(failureNotification(err));
    }
  }
}
