import { makeSelectReader, makeSelectIdentity } from 'containers/NetworkClient/selectors';
import { takeLatest, call, put, select, all, fork, join } from 'redux-saga/effects';
import { FETCH_REF } from './constants';
import { fetchedRef } from './actions';

//
// Get the network Ref
//
function* getRef() {
  try {
    const data = [];
    const networkReader = yield select(makeSelectReader());
    const currentIdentity = yield select(makeSelectIdentity());

    const stake = {
      ...stakeTable,
      scope: currentIdentity.name,
    }
    const stakes = yield networkReader.getTableRows(stake);

    const refund = {
      ...refundTable,
      scope: currentIdentity.name,
    }
    const refunds = yield networkReader.getTableRows(refund);

    stakes.rows.map(row => {
      data.push({
        type:'Ref',
        ...row,
      });
    });

    refunds.rows.map(row => {
      data.push({
        type:'Refund',
        id: row.id,
        from: row.from,
        to:row.to,
        horus_weight:row.horus_amount,
        time_initial:row.request_time
      });
    });


    yield put(fetchedRef(data));
  } catch (err) {
    console.error('An EOSToolkit error occured - see details below:');
    console.error(err);
    yield put(fetchedRef([]));
  }
}

function* watchFetchRef() {
  yield takeLatest(FETCH_REF, getRef);
}

//
// Combine sagas into root saga
//

export default function* rootSaga() {
  yield all([watchFetchRef()]);
}
