/*
 * RefundForm Messages
 *
 * This contains all the text for the RefundForm component.
 */
import { defineMessages } from 'react-intl';

export default defineMessages({
  header: {
    id: 'app.components.RefundForm.header',
    defaultMessage: 'Refund Stake',
  },
  validateRequired: {
    id: 'app.common.validateRequired',
    defaultMessage: 'Required',
  },
  disclaimer: {
    id: 'app.common.disclaimer',
    defaultMessage:
      'By executing this action you are agreeing to the EOS constitution and this actions associated ricardian contract.',
  },
  refund: {
    id: 'app.common.refund',
    defaultMessage: 'Refund',
  },
  ownerName: {
    id: 'app.components.DelegateForm.ownerName',
    defaultMessage: 'Stake Owner',
  },
  ownerText: {
    id: 'app.components.DelegateForm.ownerText',
    defaultMessage: 'Account that controls the stake',
  },
});
