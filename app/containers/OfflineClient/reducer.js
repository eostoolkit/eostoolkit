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
  switch (action.type) {
    default:
      return state;
  }
}

export default OfflineClientReducer;
