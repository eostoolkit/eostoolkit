/*
 *
 * Remote reducer
 *
 */

import { fromJS } from 'immutable';
import { FETCHED_TOKENS, FETCHED_NETWORKS, SELECT_NETWORK, SELECTED_NETWORK } from './constants';

const initialState = fromJS({
  tokens: [
    {
      contract: 'eosio.token',
      symbol: 'EOS',
      precision: 4,
    },
  ],
  networks: null,
  activeNetwork: null,
  eosClient: null,
});

function RemoteReducer(state = initialState, action) {
  switch (action.type) {
    case FETCHED_TOKENS:
      return state.set('tokens', action.tokens);
    case FETCHED_NETWORKS:
      return state.set('networks', action.networks);
    case SELECT_NETWORK:
      return state.set('activeNetwork', { network: action.network, endpoint: action.endpoint });
    case SELECTED_NETWORK:
      return state.set('activeNetwork', action.network).set('eosClient', action.client);
    default:
      return state;
  }
}

export default RemoteReducer;
