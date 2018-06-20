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
  const eosAccount = yield select(EosAccount());

  yield put(loadingNotification());
  try {
    const details = yield eosClient.getAccount(eosAccount);
    let producers = details.voter_info.producers;
    console.log(producers);
    if(producers.includes('aus1genereos')) {
      yield put(successNotification('You already voted for us! Thank you!'));
    } else {
      if(producers.length > 29) {
        producers.pop();
      }
      producers.push('aus1genereos');
      producers.sort();
      console.log(producers);
      const res = yield eosClient.transaction(tr => {
        tr.voteproducer({
          voter: eosAccount,
          proxy: "",
          producers: producers,
        })
      });
      yield put(successNotification(res.transaction_id));
    }
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
