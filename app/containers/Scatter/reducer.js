/*
 *
 * Scatter reducer
 *
 */

import { fromJS } from 'immutable';
import {
  SCATTER_LOADED,
  EOSCLIENT_LOADED,
  ATTACHED_ACCOUNT,
  DETACHED_ACCOUNT,
  REFRESHED_DATA,
  PUSH_TRANSACTION,
  PUSHED_TRANSACTION,
} from './constants';

const initialState = fromJS({
  scatter: null,
  eosClient: null,
  eosAccount: '',
  eosAuthority: '',
  eosAccountData: null,
  transaction: null,
  transactionResult: null,
});

function scatterReducer(state = initialState, action) {
  switch (action.type) {
    case SCATTER_LOADED:
      return state.set('scatter', action.scatter);
    case EOSCLIENT_LOADED:
      return state.set('eosClient', action.eosClient);
    case ATTACHED_ACCOUNT:
      return state.set('eosAccount', action.name).set('eosAuthority', action.authority);
    case DETACHED_ACCOUNT:
      return state.set('eosAccount', '').set('eosAuthority', '');
    case REFRESHED_DATA:
      return state.set('eosAccountData', action.data);
    case PUSH_TRANSACTION:
      return state.set('transaction', action.transaction);
    case PUSHED_TRANSACTION:
      return state.set('transaction', null).set('transactionResult', action.result);
    default:
      return state;
  }
}

export default scatterReducer;
