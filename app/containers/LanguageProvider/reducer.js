/*
 *
 * LanguageProvider reducer
 *
 */

import { fromJS } from 'immutable';

import { CHANGE_LOCALE } from './constants';
import {DEFAULT_LOCALE} from 'i18n'; // eslint-disable-line

const browserLang = navigator ? navigator.language || navigator.browserLanguage || DEFAULT_LOCALE : DEFAULT_LOCALE;

const initialState = fromJS({
  locale: browserLang.substring(0,2),
});

function languageProviderReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_LOCALE:
      return state.set('locale', action.locale);
    default:
      return state;
  }
}

export default languageProviderReducer;
