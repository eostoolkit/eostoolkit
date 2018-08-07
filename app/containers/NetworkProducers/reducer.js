/*
 *
 * NetworkProducers reducer
 *
 */

import { fromJS } from 'immutable';
import { FETCH_PRODUCERS, FETCHED_PRODUCERS, SELECT_PRODUCERS } from './constants';

const initialState = fromJS({
  loading: false,
  producers: [],
  selected: [],
});

function NetworkProducersReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_PRODUCERS:
      return state.set('loading', true);
    case FETCHED_PRODUCERS:
      return state.set('producers', action.producers).set('loading', false);
    case SELECT_PRODUCERS:
      return state.set('selected', action.selection);
    default:
      return state;
  }
}

export default NetworkProducersReducer;
