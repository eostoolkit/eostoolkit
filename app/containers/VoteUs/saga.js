import { takeLatest, put, select, all } from 'redux-saga/effects';
import EosClient, {
  makeSelectEosAuthority as EosAuthority,
  makeSelectEosAccount as EosAccount,
} from 'containers/Scatter/selectors';
import { failureNotification, loadingNotification, successNotification } from 'containers/Notification/actions';
import { DEFAULT_ACTION } from './constants';

//
// Get the EOS Client once Scatter loads
//
function* performAction() {
  const eosClient = yield select(EosClient());
  const eosAccount = yield select(EosAccount());
  const eosAuth = yield select(EosAuthority());
  yield put(loadingNotification());
  try {
    const details = yield eosClient.getAccount(eosAccount);
    const producers = details.voter_info ? details.voter_info.producers : [];
    if (producers.includes('aus1genereos')) {
      yield put(successNotification('You already voted for us! Thank you!'));
    } else {
      if (producers.length > 29) {
        producers.pop();
      }
      producers.push('aus1genereos');
      producers.sort();
      const res = yield eosClient.transaction(tr => {
        tr.voteproducer(
          {
            voter: eosAccount,
            proxy: '',
            producers,
          },
          { authorization: [{ actor: eosAccount, permission: eosAuth }] }
        );
      });
      yield put(successNotification(res.transaction_id));
    }
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
