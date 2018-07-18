/*
 *
 * Tokens reducer
 *
 */

import { fromJS } from 'immutable';
import { FETCHED_TOKENS } from './constants';

const initialState = fromJS({
  tokens: [
    {
      contract: 'eosio.token',
      symbol: 'EOS',
      precision: 4,
    },
  ],
});

function TokensReducer(state = initialState, action) {
  switch (action.type) {
    case FETCHED_TOKENS:
      return state.set('tokens', action.tokens);
    default:
      return state;
  }
}

export default TokensReducer;
