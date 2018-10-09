/*
 *
 * Grandpa reducer
 *
 */

import { fromJS } from 'immutable';
import { FETCH_MINER, FETCHED_MINER } from './constants';

const initialState = fromJS({
  loading: false,
  miner: null,
});

function GrandpaReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_MINER:
      return state.set('loading', true);
    case FETCHED_MINER:
      return state.set('miner', action.miner).set('loading', false);
    default:
      return state;
  }
}

export default GrandpaReducer;
