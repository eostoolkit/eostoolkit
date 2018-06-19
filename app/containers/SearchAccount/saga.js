import Eos from 'eosjs';
import eosConfig from 'eosConfig.js';
import { takeLatest, call, put, select, all } from 'redux-saga/effects';
import { makeSelectSearchName, makeSelectSearchPubkey } from './selectors.js';
import { LOOKUP_ACCOUNT, LOOKUP_PUBKEY } from './constants';
import { lookupLoading, lookupLoaded } from './actions';


function* getAccountDetail(eosClient, name) {
  const account = yield eosClient.getAccount(name);
  const currency = yield eosClient.getCurrencyBalance('eosio.token',name);
  account.currency = currency;
  return(account);
}

//
// Get the EOS all accounts by public key
//
function* performSearchPubkey() {
  const eosClient = yield Eos(eosConfig);
  const publicKey = yield select(makeSelectSearchPubkey());
  const accounts = [];
  yield put(lookupLoading());
  try {
    const res = yield eosClient.getKeyAccounts(publicKey);
    for(const accountName of res.account_names) {
      const detail = yield call(getAccountDetail,eosClient,accountName);
      accounts.push(detail);
    }
    yield put(lookupLoaded(accounts));
  } catch(err) {
    yield put(lookupLoaded([]));
  }
}

function* watchSeachPubkey() {
  yield takeLatest(LOOKUP_PUBKEY, performSearchPubkey);
}

//
// Get the EOS single account
//
function* performSearchAccount() {
  const eosClient = yield Eos(eosConfig);
  const accountName = yield select(makeSelectSearchName());
  yield put(lookupLoading());
  try {
    const account = yield call(getAccountDetail,eosClient,accountName);
    yield put(lookupLoaded([account]));
  } catch(err) {
    yield put(lookupLoaded([]));
  }
}

function* watchSeachAccount() {
  yield takeLatest(LOOKUP_ACCOUNT, performSearchAccount);
}

//
// Combine sagas into root saga
//

export default function* rootSaga() {
  yield all([
    watchSeachAccount(),
    watchSeachPubkey(),
  ])
}
