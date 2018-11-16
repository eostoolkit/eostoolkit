import { makeSelectReader, makeSelectIdentity } from 'containers/NetworkClient/selectors';
import { takeLatest, call, put, select, all, fork, join } from 'redux-saga/effects';
import { FETCH_REF } from './constants';
import { fetchedRef } from './actions';
import { refUrl } from 'remoteConfig';
//
// Get the network Ref
//
function* getRef() {
  try {

    const data = yield fetch(refUrl);
    const list = yield data.json();
    const formatted = Object.keys(list).map(ref => {
      
      const prop = list[ref].proposal;
      const stats = list[ref].stats;
      let json = {};
      try {
        json = JSON.parse(prop.proposal_json);
      } catch(err) {}
      const content = json.content ? json.content : "No content";
      return {
        name: prop.proposal_name,
        proposer: prop.proposer,
        title: prop.proposer,
        created: prop.created_at,
        expires: prop.expires_at,
        content,
        votes_yes: stats.votes[1] || 0,
        votes_no: stats.votes[0] || 0,
        votes_total: stats.votes["total"] || 0,
        weight_yes: stats.staked[1] || 0,
        weight_no: stats.staked[0] || 0,
        weight_total: stats.staked["total"] || 0,
      }
    });
    yield put(fetchedRef(formatted));
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
