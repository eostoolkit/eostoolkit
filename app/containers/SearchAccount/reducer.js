/*
 *
 * SearchAccount reducer
 *
 */

import { fromJS } from 'immutable';
import { LOOKUP_ACCOUNT, LOOKUP_PUBKEY, LOOKUP_LOADING, LOOKUP_LOADED } from './constants';

const initialState = fromJS({
  name: '',
  pubkey: '',
  loading: false,
  accounts: [],
});

function SearchAccountReducer(state = initialState, action) {
  switch (action.type) {
    case LOOKUP_ACCOUNT:
      return state.set('name', action.name);
    case LOOKUP_PUBKEY:
      return state.set('pubkey', action.pubkey);
    case LOOKUP_LOADING:
      return state.set('loading', true);
    case LOOKUP_LOADED:
      return state.set('accounts', action.accounts).set('loading', false);
    default:
      return state;
  }
}

export default SearchAccountReducer;
