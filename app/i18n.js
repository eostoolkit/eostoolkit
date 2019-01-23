/**
 * i18n.js
 *
 * This will setup the i18n language files and locale data for your app.
 *
 */
 const addLocaleData = require('react-intl').addLocaleData; //eslint-disable-line
 const enLocaleData = require('react-intl/locale-data/en');
 const zhLocaleData = require('react-intl/locale-data/zh');
 const koLocaleData = require('react-intl/locale-data/ko');
 const viLocaleData = require('react-intl/locale-data/vi');
 const ruLocaleData = require('react-intl/locale-data/ru');

 const enTranslationMessages = require('./translations/en.json');
 const zhTranslationMessages = require('./translations/zh.json');
 const koTranslationMessages = require('./translations/ko.json');
 const viTranslationMessages = require('./translations/vi.json');
 const ruTranslationMessages = require('./translations/ru.json');

 addLocaleData(enLocaleData);
 addLocaleData(zhLocaleData);
 addLocaleData(koLocaleData);
 addLocaleData(viLocaleData);
 addLocaleData(ruLocaleData);

 const DEFAULT_LOCALE = 'en';

 // prettier-ignore
 const appLocales = [
   'en',
   'ko',
   'zh',
   'vi',
   'ru',
 ];

 const formatTranslationMessages = (locale, messages) => {
   const defaultFormattedMessages =
     locale !== DEFAULT_LOCALE ? formatTranslationMessages(DEFAULT_LOCALE, enTranslationMessages) : {};
   const flattenFormattedMessages = (formattedMessages, key) => {
     const formattedMessage =
       !messages[key] && locale !== DEFAULT_LOCALE ? defaultFormattedMessages[key] : messages[key];
     return Object.assign(formattedMessages, { [key]: formattedMessage });
   };
   return Object.keys(messages).reduce(flattenFormattedMessages, {});
 };

 const translationMessages = {
   en: formatTranslationMessages('en', enTranslationMessages),
   zh: formatTranslationMessages('zh', zhTranslationMessages),
   ko: formatTranslationMessages('ko', koTranslationMessages),
   vi: formatTranslationMessages('vi', viTranslationMessages),
   ru: formatTranslationMessages('ru', ruTranslationMessages),
 };

 exports.appLocales = appLocales;
 exports.formatTranslationMessages = formatTranslationMessages;
 exports.translationMessages = translationMessages;
 exports.DEFAULT_LOCALE = DEFAULT_LOCALE;
