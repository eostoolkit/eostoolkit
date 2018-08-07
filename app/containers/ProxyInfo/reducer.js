/*
 *
 * ProxyInfo reducer
 *
 */

import { fromJS } from 'immutable';
import { FETCH_PROXIES, FETCHED_PROXIES } from './constants';

const initialState = fromJS({
  loading: false,
  proxies: [],
});

function ProxyInfoReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_PROXIES:
      return state.set('loading', true);
    case FETCHED_PROXIES:
      return state.set('proxies', action.proxies).set('loading', false);
    default:
      return state;
  }
}

export default ProxyInfoReducer;
