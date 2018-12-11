import { makeSelectTokens as selectTokens, makeSelectReader } from 'containers/NetworkClient/selectors';
import { takeLatest, call, put, select, all, fork, join } from 'redux-saga/effects';
import { makeSelectSearchName, makeSelectSearchPubkey } from './selectors';
import { LOOKUP_ACCOUNT, LOOKUP_PUBKEY } from './constants';
import { lookupLoading, lookupLoaded } from './actions';

function* getCurrency(token, name) {
  const networkReader = yield select(makeSelectReader());
  try {
    const currency = yield networkReader.getCurrencyBalance(token, name);
    const currencies = currency.map(c => {
      return {
        account: token,
        balance: c,
      };
    });
    return currencies;
  } catch (err) {
    console.error('An EOSToolkit error occured - see details below:');
    console.error(err);
    return [];
  }
}

function* getAccountDetail(name) {
  try {
    const networkReader = yield select(makeSelectReader());
    const account = yield networkReader.getAccount(name);

    let body = {account:account.account_name};
    try {
      const flare = yield fetch('https://api-pub.eosflare.io/v1/eosflare/get_account',{
        method: "POST",
        headers: {
          "Content-Type": "application/json; charset=utf-8",
        },
        body:JSON.stringify(body),
      });
      const flareData = yield flare.json();

      if(flareData.account) {
        let tokens = flareData.account.tokens.map(token=>{
          return `${token.contract}:${token.symbol}`;
        });
        tokens.unshift('eosio.token:EOS');
        body = {
          ...body,
          tokens,
        }
      }
    } catch(err) {}

    const data = yield fetch('https://eos.greymass.com/v1/chain/get_currency_balances',{
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
      body:JSON.stringify(body),
    });
    const list = yield data.json();
    return {
      ...account,
      balances: list,
    };
  } catch (err) {
    console.error('An EOSToolkit error occured - see details below:');
    console.error(err);
    return {};
  }
}

//
// Get the EOS all accounts by public key
//
function* performSearchPubkey() {
  const networkReader = yield select(makeSelectReader());
  const publicKey = yield select(makeSelectSearchPubkey());
  yield put(lookupLoading());
  try {
    const res = yield networkReader.getKeyAccounts(publicKey);
    const details = yield all(
      res.account_names.map(accountName => {
        return fork(getAccountDetail, accountName);
      })
    );
    const accounts = yield join(...details);
    yield put(lookupLoaded(accounts));
  } catch (err) {
    console.error('An EOSToolkit error occured - see details below:');
    console.error(err);
    yield put(lookupLoaded([{}]));
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
    console.error('An EOSToolkit error occured - see details below:');
    console.error(err);
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
