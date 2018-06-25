import Eos from 'eosjs';
import eosConfig from 'eosConfig';
import { takeLatest, call, put, select, all } from 'redux-saga/effects';
import { makeSelectSearchName, makeSelectSearchPubkey } from './selectors';
import { LOOKUP_ACCOUNT, LOOKUP_PUBKEY } from './constants';
import { lookupLoading, lookupLoaded } from './actions';

function* getAccountDetail(eosClient, name) {
  const currency = yield eosClient.getCurrencyBalance('eosio.token', name);
  // TODO: This is some prep work for airdrop token support.
  const currencies = currency.map(c => {
    return {
      account: 'eosio.token',
      balance: c,
    };
  });
  return {
    ...(yield eosClient.getAccount(name)),
    currencies,
  };
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
    // TODO: fix the following rule quickly
    // eslint-disable-next-line no-restricted-syntax
    for (const accountName of res.account_names) {
      const detail = yield call(getAccountDetail, eosClient, accountName);
      accounts.push(detail);
    }
    yield put(lookupLoaded(accounts));
  } catch (err) {
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
    const account = yield call(getAccountDetail, eosClient, accountName);
    yield put(lookupLoaded([account]));
  } catch (err) {
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
  yield all([watchSeachAccount(), watchSeachPubkey()]);
}
