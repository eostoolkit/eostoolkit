/*
 *
 * Referendum reducer
 *
 */

import { fromJS } from 'immutable';
import { FETCH_REF, FETCHED_REF } from './constants';

const initialState = fromJS({
  loading: false,
  stakes: [],
});

function ReferendumReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_REF:
      return state.set('loading', true);
    case FETCHED_REF:
      return state.set('stakes', action.stakes).set('loading', false);
    default:
      return state;
  }
}

export default ReferendumReducer;
