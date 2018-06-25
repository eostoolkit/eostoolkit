/*
 *
 * Scatter reducer
 *
 */

import { fromJS } from 'immutable';
import { SCATTER_LOADED, EOSCLIENT_LOADED, ATTACHED_ACCOUNT, DETACHED_ACCOUNT, REFRESHED_DATA } from './constants';

const initialState = fromJS({
  scatter: null,
  eosClient: null,
  eosAccount: 'Attach an Account',
  eosAuthority: '',
  eosAccountData: null,
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
      return state.set('eosAccount', 'Attach an Account').set('eosAuthority', '');
    case REFRESHED_DATA:
      return state.set('eosAccountData', action.data);
    default:
      return state;
  }
}

export default scatterReducer;
