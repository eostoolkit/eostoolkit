import Eos from 'eosjs';
import eosConfig from 'eosConfig';
import eosTokens from 'eosTokens';
import { takeLatest, call, put, select, all, fork, join } from 'redux-saga/effects';
import { makeSelectSearchName, makeSelectSearchPubkey } from './selectors';
import { LOOKUP_ACCOUNT, LOOKUP_PUBKEY } from './constants';
import { lookupLoading, lookupLoaded } from './actions';

function* getCurrency(token, name) {
  const eosClient = yield Eos(eosConfig);
  const currency = yield eosClient.getCurrencyBalance(token, name);
  // TODO: This is some prep work for airdrop token support.
  const currencies = currency.map(c => {
    return {
      account: token,
      balance: c,
    };
  });
  return currencies;
}

function* getAccountDetail(name) {
  const eosClient = yield Eos(eosConfig);
  const tokens = yield all(
    eosTokens.map(token => {
      return fork(getCurrency, token, name);
    })
  );
  const currencies = yield join(...tokens);
  const balances = currencies.reduce((a, b) => a.concat(b), []);
  return {
    ...(yield eosClient.getAccount(name)),
    balances,
  };
}

//
// Get the EOS all accounts by public key
//
function* performSearchPubkey() {
  const eosClient = yield Eos(eosConfig);
  const publicKey = yield select(makeSelectSearchPubkey());
  yield put(lookupLoading());
  try {
    const res = yield eosClient.getKeyAccounts(publicKey);
    const details = yield all(
      res.account_names.map(accountName => {
        return fork(getAccountDetail, accountName);
      })
    );
    const accounts = yield join(...details);
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
  const accountName = yield select(makeSelectSearchName());
  yield put(lookupLoading());
  try {
    const account = yield call(getAccountDetail, accountName);
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
