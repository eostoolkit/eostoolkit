import { defineMessages } from 'react-intl';

//TODO: I suggest "common form terms and validations be grouped under a common folder"
export default defineMessages({
  // Messages for TransferForm
  recipientLabel: {
    id: 'app.components.Features.TransferForm.recipientLabel',
    defaultMessage: 'Recipient INTL',
  },
  recipientPlaceholder: {
    id: 'app.components.Features.TransferForm.recipientPlaceholder',
    defaultMessage: 'Account that receives the Token INTL',
  },
  nameValidation: {
    id: 'app.components.Features.TransferForm.nameValidation',
    defaultMessage: 'Account name is required INTL',
  },
});
