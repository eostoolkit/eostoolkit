/*
 *
 * ResignProxy reducer
 *
 */

import { fromJS } from 'immutable';
import { DEFAULT_ACTION, REG_PROXY } from './constants';

const initialState = fromJS({
  form: null,
  regProxy: null,
});

function ResignProxyReducer(state = initialState, action) {
  switch (action.type) {
    case DEFAULT_ACTION:
      return state.set('form', action.form);
    case REG_PROXY:
      return state.set('regProxy', action.form);
    default:
      return state;
  }
}

export default ResignProxyReducer;
