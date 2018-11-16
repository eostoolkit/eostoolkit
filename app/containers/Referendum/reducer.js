/*
 *
 * Referendum reducer
 *
 */

import { fromJS } from 'immutable';
import { FETCH_REF, FETCHED_REF } from './constants';

const initialState = fromJS({
  loading: false,
  refs: [],
});

function ReferendumReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_REF:
      return state.set('loading', true);
    case FETCHED_REF:
      return state.set('refs', action.refs).set('loading', false);
    default:
      return state;
  }
}

export default ReferendumReducer;
