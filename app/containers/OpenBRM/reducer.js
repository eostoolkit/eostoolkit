/*
 *
 * OpenBRM reducer
 *
 */

import { fromJS } from 'immutable';
import { FETCH_STAKE, FETCHED_STAKE, FETCH_REFUND, FETCHED_REFUND } from './constants';

const initialState = fromJS({
  loading: false,
  stakes: [],
  refunds: [],
});

function OpenBRMReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_STAKE:
      return state.set('loading', true);
    case FETCH_REFUND:
      return state.set('loading', true);
    case FETCHED_STAKE:
      return state.set('stakes', action.stakes).set('loading', false);
    case FETCHED_REFUND:
      return state.set('refunds', action.refunds).set('loading', false);
    default:
      return state;
  }
}

export default OpenBRMReducer;
