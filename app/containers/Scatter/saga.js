import Eos from 'eosjs'
import { takeLatest, call, put, select, all } from 'redux-saga/effects';
import { makeSelectScatter } from './selectors.js';
import { scatterConfig, scatterEosOptions, testnet } from 'eosConfig.js';
import { eosLoaded, attachedAccount, detachedAccount } from './actions.js';
import { SCATTER_LOADED, CONNECT_ACCOUNT, REMOVE_ACCOUNT } from './constants';

//
// Get the EOS Client once Scatter loads
//
function* getEosClient() {
  const scatter = yield select(makeSelectScatter());

  const eosClient = scatter.eos( scatterConfig, Eos, scatterEosOptions,testnet ? 'http' : 'https');
  yield put(eosLoaded(eosClient));
}

function* watchScatterLoaded() {
  yield takeLatest(SCATTER_LOADED, getEosClient);
}

//
// Make the request to connect an account
//

function* getEosAccount() {
  const scatter = yield select(makeSelectScatter());
  try {
    if(scatter.identity) {
      yield scatter.forgetIdentity();
    }
    const id = yield scatter.getIdentity({accounts:[{chainId:scatterConfig.chainId, blockchain:scatterConfig.blockchain}]});
    const eosAccount = id && id.accounts.find(x => x.blockchain === 'eos')
           ? id.accounts.find(x => x.blockchain === 'eos').name
           : 'Attach an Account';
    const accountAuth = id && id.accounts.find(x => x.blockchain === 'eos')
           ? id.accounts.find(x => x.blockchain === 'eos').authority
           : '';
    yield put(attachedAccount(eosAccount,accountAuth));
  } catch(err) {
    //console.log(err);
  }
}

function* watchScatterConnect() {
  yield takeLatest(CONNECT_ACCOUNT, getEosAccount);
}

//
// Remove an account
//

function* removeEosAccount() {
  const scatter = yield select(makeSelectScatter());
  try {
    if(scatter.identity) {
      yield scatter.forgetIdentity();
    }
    yield put(detachedAccount());
  } catch(err) {
    //console.log(err);
  }
}

function* watchScatterRemove() {
  yield takeLatest(REMOVE_ACCOUNT, removeEosAccount);
}

//
// Combine sagas into root saga
//

export default function* rootSaga() {
  yield all([
    watchScatterLoaded(),
    watchScatterConnect(),
    watchScatterRemove(),
  ])
}
