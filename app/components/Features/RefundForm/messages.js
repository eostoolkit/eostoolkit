import { defineMessages } from 'react-intl';

export default defineMessages({
  // Messages for RefundForm
  refundFormOwnerLabel: {
    id: 'app.components.Features.RefundForm.refundFormOwnerLabel',
    defaultMessage: 'Owner',
  },
  refundFormOwnerPlaceholder: {
    id: 'app.components.Features.RefundForm.refundFormOwnerPlaceholder',
    defaultMessage: 'Account requesting refund',
  },
  refundFormHeader: {
    id: 'app.components.Features.RefundForm.refundFormHeader',
    defaultMessage: 'Refund',
  },
  refundFormSubHeader: {
    id: 'app.components.Features.RefundForm.refundFormSubHeader',
    defaultMessage: " - Fallback if unstaking doesn't refund automatically",
  },
  refundStakeHeader: {
    id: 'app.components.Features.RefundForm.refundStakeHeader',
    defaultMessage: 'Refund Stake',
  },
  refundStakeTextRow1: {
    id: 'app.components.Features.RefundForm.refundStakeTextRow1',
    defaultMessage:
      'This is a fallback function if your refund request does not complete automatically when unstaking EOS.',
  },
  refundStakeTextRow2: {
    id: 'app.components.Features.RefundForm.refundStakeTextRow2',
    defaultMessage: 'This function requires that 72 hours have passed from the last unstake attempt made.',
  },
});
