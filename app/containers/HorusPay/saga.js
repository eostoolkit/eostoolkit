import { makeSelectReader, makeSelectIdentity } from 'containers/NetworkClient/selectors';
import { takeLatest, call, put, select, all, fork, join } from 'redux-saga/effects';
import { FETCH_STAKE } from './constants';
import { fetchedStake } from './actions';

const stakeTable = {
    json: true,
    //scope: 'regproxyinfo', scope is the user
    code: 'horustokenio',
    table: 'stakedhorus',
    limit: 500
}


//
// Get the network Stake
//
function* getStake() {
  try {
    const stakes = [];
    const networkReader = yield select(makeSelectReader());
    const currentIdentity = yield select(makeSelectIdentity());

    const table = {
      ...stakeTable,
      scope: currentIdentity.name,
    }
    const data = yield networkReader.getTableRows(table);


    data.rows.map(row => {
      stakes.push({
        ...row,
      });
    });
    yield put(fetchedStake(stakes));
  } catch (err) {
    console.error('An EOSToolkit error occured - see details below:');
    console.error(err);
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
