import { makeSelectReader, makeSelectIdentity } from 'containers/NetworkClient/selectors';
// import { takeLatest, call, put, select, all, fork, join } from 'redux-saga/effects';
import { takeLatest, put, select, all } from 'redux-saga/effects';
import { FETCH_STAKE } from './constants';
import { fetchedStake, fetchedRefund } from './actions';

const stakeTable = {
  json: true,
  // scope: scope is the user
  code: 'openbrmeos11',
  table: 'stakes',
  limit: 500,
};

const refundTable = {
  json: true,
  // scope: scope is the user
  code: 'openbrmeos11',
  table: 'lockedbals',
  limit: 500,
};

//
// Get the network Stake
//
function* getStake() {
  try {
    const data = [];
    const networkReader = yield select(makeSelectReader());
    const currentIdentity = yield select(makeSelectIdentity());

    const stake = {
      ...stakeTable,
      scope: currentIdentity.name,
    };
    const stakes = yield networkReader.getTableRows(stake);

    const refund = {
      ...refundTable,
      scope: currentIdentity.name,
    };
    const refunds = yield networkReader.getTableRows(refund);

    stakes.rows.map(row => {
      data.push({
        owner: currentIdentity.name,
        ...row,
      });
      return null;
    });

    refunds.rows.map(row => {
      data.push({
        owner: currentIdentity.name,
        ...row,
      });
      return null;
    });

    yield put(fetchedStake(data));
    // yield put(fetchedRefund(data));
  } catch (err) {
    console.error('An EOSToolkit error occured - see details below:');
    console.error(err);
    yield put(fetchedStake([]));
    // yield put(fetchedRefund([]));
  }
}

function* watchFetchStake() {
  yield takeLatest(FETCH_STAKE, getStake);
}

//
// Combine sagas into root saga
//

export default function* rootSaga() {
  yield all([watchFetchStake()]);
}
