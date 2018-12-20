/**
 * i18n.js
 *
 * This will setup the i18n language files and locale data for your app.
 *
 */
import { addLocaleData } from 'react-intl';

/*
* Import Locale data if specific locales are needed
* */
import enLocaleData from 'react-intl/locale-data/en';
import deLocaleData from 'react-intl/locale-data/de';

import { DEFAULT_LOCALE } from './containers/App/constants'; // eslint-disable-line

/*
* Import translation files here after translating all application strings in country specific translation json file
* */
import enTranslationMessages from './translations/en.json';
import deTranslationMessages from './translations/de.json';

export const appLocales = ['en', 'de'];

addLocaleData(enLocaleData);
addLocaleData(deLocaleData);

export const formatTranslationMessages = (locale, messages) => {
  const defaultFormattedMessages =
    locale !== DEFAULT_LOCALE ? formatTranslationMessages(DEFAULT_LOCALE, enTranslationMessages) : {};
  return Object.keys(messages).reduce((formattedMessages, key) => {
    let message = messages[key];
    if (!message && locale !== DEFAULT_LOCALE) {
      message = defaultFormattedMessages[key];
    }
    return Object.assign(formattedMessages, { [key]: message });
  }, {});
};

/*
* Do not forget to add new translation messages!!
* */
export const translationMessages = {
  en: formatTranslationMessages('en', enTranslationMessages),
  de: formatTranslationMessages('de', deTranslationMessages),
};
