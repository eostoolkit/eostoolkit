import { defineMessages } from 'react-intl';

export default defineMessages({
  // Messages for TransferForm
  recipientPlaceholder: {
    id: 'app.components.Features.TransferForm.recipientPlaceholder',
    defaultMessage: 'Account that receives the Token',
  },
  senderLabel: {
    id: 'app.components.Features.TransferForm.senderLabel',
    defaultMessage: 'Sender',
  },
  senderPlaceholder: {
    id: 'app.components.Features.TransferForm.senderPlaceholder',
    defaultMessage: 'Account that sends the Token',
  },
  senderValidation: {
    id: 'app.components.Features.TransferForm.senderValidation',
    defaultMessage: 'Sender name is required',
  },
  quantityLabel: {
    id: 'app.components.Features.TransferForm.quantityLabel',
    defaultMessage: 'Quantity (in Tokens)',
  },
  quantityPlaceholder: {
    id: 'app.components.Features.TransferForm.quantityPlaceholder',
    defaultMessage: 'How many Tokens to send',
  },
  quantityValidation: {
    id: 'app.components.Features.TransferForm.quantityValidation',
    defaultMessage: 'Quantity is required',
  },
  quantityValidationPositive: {
    id: 'app.components.Features.TransferForm.quantityValidationPositive',
    defaultMessage: 'You must send a positive quantity',
  },
  symbolLabel: {
    id: 'app.components.Features.TransferForm.symbolLabel',
    defaultMessage: 'Symbol',
  },
  symbolPlaceholder: {
    id: 'app.components.Features.TransferForm.symbolPlaceholder',
    defaultMessage: 'Symbol of the Token',
  },
  symbolValidation: {
    id: 'app.components.Features.TransferForm.symbolValidation',
    defaultMessage: 'Symbol is required',
  },
  memoLabel: {
    id: 'app.components.Features.TransferForm.memoLabel',
    defaultMessage: 'Memo',
  },
  memoPlaceholder: {
    id: 'app.components.Features.TransferForm.memoPlaceholder',
    defaultMessage: 'A memo to attach to transfer',
  },
});
