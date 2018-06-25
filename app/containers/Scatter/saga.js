import Eos from 'eosjs';
import { takeLatest, put, select, all } from 'redux-saga/effects';
import { scatterConfig, scatterEosOptions, testnet } from 'eosConfig';
import EosClient, { makeSelectEosAccount, makeSelectScatter } from 'containers/Scatter/selectors';
import { eosLoaded, attachedAccount, detachedAccount, refreshAccountData, refreshedAccountData } from './actions';
import { SCATTER_LOADED, CONNECT_ACCOUNT, REMOVE_ACCOUNT, REFRESH_DATA } from './constants';

//
// Get the EOS Client once Scatter loads
//
function* getEosClient() {
  const scatter = yield select(makeSelectScatter());

  const eosClient = scatter.eos(scatterConfig, Eos, scatterEosOptions, testnet ? 'http' : 'https');
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
    if (scatter.identity) {
      yield scatter.forgetIdentity();
    }
    const id = yield scatter.getIdentity({
      accounts: [
        {
          chainId: scatterConfig.chainId,
          blockchain: scatterConfig.blockchain,
        },
      ],
    });
    const eosAccount =
      id && id.accounts.find(x => x.blockchain === 'eos')
        ? id.accounts.find(x => x.blockchain === 'eos').name
        : 'Attach an Account';
    const accountAuth =
      id && id.accounts.find(x => x.blockchain === 'eos')
        ? id.accounts.find(x => x.blockchain === 'eos').authority
        : '';
    yield put(attachedAccount(eosAccount, accountAuth));
    yield put(refreshAccountData());
  } catch (err) {
    // console.log(err);
  }
}

function* watchScatterConnect() {
  yield takeLatest(CONNECT_ACCOUNT, getEosAccount);
}

//
// Refresh account data
//

function* refreshEosAccountData() {
  const accountName = yield select(makeSelectEosAccount());
  const eosClient = yield select(EosClient());
  try {
    if (accountName && accountName !== 'Attach an Account') {
      const account = yield eosClient.getAccount(accountName);
      const currency = yield eosClient.getCurrencyBalance('eosio.token', accountName);
      account.currency = currency;
      yield put(refreshedAccountData(account));
    } else {
      yield put(refreshedAccountData(null));
    }
  } catch (err) {
    // console.log(err);
  }
}

function* watchEosRefreshData() {
  yield takeLatest(REFRESH_DATA, refreshEosAccountData);
}

//
// Remove an account
//

function* removeEosAccount() {
  const scatter = yield select(makeSelectScatter());
  try {
    if (scatter.identity) {
      yield scatter.forgetIdentity();
    }
    yield put(detachedAccount());
    yield put(refreshAccountData());
  } catch (err) {
    // console.log(err);
  }
}

function* watchScatterRemove() {
  yield takeLatest(REMOVE_ACCOUNT, removeEosAccount);
}

//
// Combine sagas into root saga
//

export default function* rootSaga() {
  yield all([watchScatterLoaded(), watchScatterConnect(), watchScatterRemove(), watchEosRefreshData()]);
}
