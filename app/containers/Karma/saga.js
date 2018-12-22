import { makeSelectReader, makeSelectIdentity } from 'containers/NetworkClient/selectors';
import { takeLatest, call, put, select, all, fork, join } from 'redux-saga/effects';
import { FETCH_STAKE } from './constants';
import { fetchedStake } from './actions';

const stakeTable = {
    json: true,
    //scope: scope is the user
    code: 'therealkarma',
    table: 'power',
    limit: 500
}

const stakeTable2 = {
    json: true,
    //scope: scope is the user
    code: 'therealkarma',
    table: 'powered',
    limit: 500
}

const refundTable = {
    json: true,
    //scope: scope is the user
    code: 'therealkarma',
    table: 'refunding',
    limit: 500
}


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
    }
    const stakes = yield networkReader.getTableRows(stake);

    const stake2 = {
      ...stakeTable2,
      scope: currentIdentity.name,
    }
    const stakes2 = yield networkReader.getTableRows(stake2);

    const refund = {
      ...refundTable,
      scope: currentIdentity.name,
    }
    const refunds = yield networkReader.getTableRows(refund);

    stakes.rows.map(row => {
      data.push({
        owner: currentIdentity.name,
        ...row,
      });
    });

    stakes2.rows.map(row => {
      data.push({
        owner: currentIdentity.name,
        weight: row.weight,
        last_claim_time: row.last_claim*24*3600*1000*1000,
      });
    });

    refunds.rows.map(row => {
      data.push({
        owner: 'Refunding',
        weight: row.quantity,
        last_claim_time: row.request_time,
      });
    });


    yield put(fetchedStake(data));
  } catch (err) {
    console.error('An EOSToolkit error occured - see details below:');
    console.error(err);
    yield put(fetchedStake([]));
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
