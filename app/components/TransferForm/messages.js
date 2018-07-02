/*
 * TransferForm Messages
 *
 * This contains all the text for the TransferForm component.
 */
import { defineMessages } from 'react-intl';

export default defineMessages({
  header: {
    id: 'app.components.TransferForm.header',
    defaultMessage: 'Transfer',
  },
  disclaimer: {
    id: 'app.common.disclaimer',
    defaultMessage:
      'By executing this action you are agreeing to the EOS constitution and this actions associated ricardian contract.',
  },
  recepient: {
    id: 'app.common.recepient',
    defaultMessage: 'Recepient',
  },
  sender: {
    id: 'app.common.sender',
    defaultMessage: 'Sender',
  },
  quantity: {
    id: 'app.common.quantity',
    defaultMessage: 'Quantity (in Tokens)',
  },
  memo: {
    id: 'app.common.memo',
    defaultMessage: 'Memo',
  },
  recepientText: {
    id: 'app.common.transferRecepientText',
    defaultMessage: 'Account that receives the Tokens',
  },
  senderText: {
    id: 'app.common.senderText',
    defaultMessage: 'Account that sends the Tokens',
  },
  quantityText: {
    id: 'app.common.quantityText',
    defaultMessage: 'How many Tokens to send',
  },
  memoText: {
    id: 'app.common.memoText',
    defaultMessage: 'A memo to attach to transfer',
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
  send: {
    id: 'app.common.send',
    defaultMessage: 'Send',
  },
});
