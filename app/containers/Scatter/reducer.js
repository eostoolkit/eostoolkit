/*
 *
 * Scatter reducer
 *
 */

import { fromJS } from 'immutable';
import {
  SCATTER_LOADED,
  EOSCLIENT_LOADED,
  CONNECT_ACCOUNT,
  ATTACHED_ACCOUNT,
  REMOVE_ACCOUNT,
  DETACHED_ACCOUNT,
} from './constants';

const initialState = fromJS({
  scatter: null,
  eosClient: null,
  eosAccount: 'Attach an Account',
  eosAuthority: '',
});

function scatterReducer(state = initialState, action) {
  switch (action.type) {
    case SCATTER_LOADED:
      console.log('Scatter reducer');
      return state
        .set('scatter',action.scatter);
    case EOSCLIENT_LOADED:
      console.log('Eos built');
      return state
        .set('eosClient',action.eosClient);
    case ATTACHED_ACCOUNT:
      return state
        .set('eosAccount',action.name)
        .set('eosAuthority',action.authority);
    case DETACHED_ACCOUNT:
      return state
        .set('eosAccount','Attach an Account')
        .set('eosAuthority','');
    default:
      return state;
  }
}

export default scatterReducer;
