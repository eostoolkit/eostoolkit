import { defineMessages } from 'react-intl';

// TODO: I suggest "common form terms and validations be grouped under a common folder"
export default defineMessages({
  // Messages for TransferForm
  recipientLabel: {
    id: 'app.components.Features.TransferForm.recipientLabel',
    defaultMessage: 'Recipient',
  },
  recipientPlaceholder: {
    id: 'app.components.Features.TransferForm.recipientPlaceholder',
    defaultMessage: 'Account that receives the Token',
  },
  nameValidation: {
    id: 'app.components.Features.TransferForm.nameValidation',
    defaultMessage: 'Account name is required',
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
