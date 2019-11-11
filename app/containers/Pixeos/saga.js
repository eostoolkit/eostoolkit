import { makeSelectReader, makeSelectIdentity } from 'containers/NetworkClient/selectors';
import { takeLatest, call, put, select, all, fork, join } from 'redux-saga/effects';
import { FETCH_STAKE } from './constants';
import { fetchedStake } from './actions';

const stakeTable = {
    json: true,
    scope: 'pixeos1stake',
    code: 'pixeos1stake',
    table: 'stakes',
    limit: 1
}

const refundTable = {
    json: true,
    scope: 'pixeos1stake',
    code: 'pixeos1stake',
    table: 'stakes',
    limit: 1
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
      lower_bound: currentIdentity.name,
      upper_bound: currentIdentity.name,
    }
    const stakes = yield networkReader.get_table_rows(stake);

    const refund = {
      ...refundTable,
      lower_bound: currentIdentity.name,
      upper_bound: currentIdentity.name,
    }
    const refunds = yield networkReader.get_table_rows(refund);

    stakes.rows.map(row => {
      data.push({
        owner: currentIdentity.name,
        ...row,
      });
      console.log("Pixeos stakes: ");
      console.log(row);
    });

    refunds.rows.map(row => {
      data.push({
        owner: 'Refunding',
        ...row,
      });
      console.log("Pixeos refunds: ");
      console.log(row);
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
