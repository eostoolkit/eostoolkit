/*
 *
 * OfflineClient reducer
 *
 */

import { fromJS } from 'immutable';
import { STAGE_TRANSACTION, SIGN_TRANSACTION, PUSH_TRANSACTION } from './constants';

const initialState = fromJS({
  transaction: null
});

function OfflineClientReducer(state = initialState, action) {
  console.log(action);
  switch (action.type) {
    case STAGE_TRANSACTION:
      return state.set('transaction', action.transaction);
    case SIGN_TRANSACTION:
      return state.set('transaction', action.transaction);
    case PUSH_TRANSACTION:
      return state.set('transaction', action.transaction);
    default:
      return state;
  }
}

export default OfflineClientReducer;
