/*
 * SellRamForm Messages
 *
 * This contains all the text for the SellRamForm component.
 */
import { defineMessages } from 'react-intl';

export default defineMessages({
  header: {
    id: 'app.components.SellRamForm.header',
    defaultMessage: 'Sell Ram',
  },
  ownerName: {
    id: 'app.components.SellRamForm.ownerName',
    defaultMessage: 'Seller',
  },
  ownerText: {
    id: 'app.components.SellRamForm.ownerText',
    defaultMessage: 'Account that owns and sells the Ram',
  },
  validateRequired: {
    id: 'app.common.validateRequired',
    defaultMessage: 'Required',
  },
  validateInvalid: {
    id: 'app.common.validateInvalid',
    defaultMessage: 'Invalid',
  },
  validateNumber: {
    id: 'app.common.validateNumber',
    defaultMessage: 'Must be a number',
  },
  validatePositive: {
    id: 'app.common.validatePositive',
    defaultMessage: 'Must be positive',
  },
  validateInteger: {
    id: 'app.common.validateInteger',
    defaultMessage: 'Must be integer',
  },
  disclaimer: {
    id: 'app.common.disclaimer',
    defaultMessage:
      'By executing this action you are agreeing to the EOS constitution and this actions associated ricardian contract.',
  },
  sell: {
    id: 'app.common.sell',
    defaultMessage: 'Sell',
  },
  ram: {
    id: 'app.components.DelegateForm.ram',
    defaultMessage: 'Ram to Sell (in bytes)',
  },
  ramText: {
    id: 'app.components.DelegateForm.ramText',
    defaultMessage: 'How many bytes of Ram to sell',
  },
});
