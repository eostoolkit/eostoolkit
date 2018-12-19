import { defineMessages } from 'react-intl';

export default defineMessages({
  // Messages for StakeForm
  stakeOwnerLabel: {
    id: 'app.components.Features.StakeForm.stakeOwnerLabel',
    defaultMessage: 'Stake Owner',
  },
  stakeOwnerPlaceholder: {
    id: 'app.components.Features.StakeForm.stakeOwnerPlaceholder',
    defaultMessage: 'Account that controls the stake',
  },
  quantityCUPStake: {
    id: 'app.components.Features.StakeForm.quantityCUPStake',
    defaultMessage: 'How much EOS to stake',
  },
  quantityNetStakeLabel: {
    id: 'app.components.Features.StakeForm.quantityNetStake',
    defaultMessage: 'Net Stake (in EOS)',
  },
  quantityNetStakePlaceholder: {
    id: 'app.components.Features.StakeForm.quantityNetStakePlaceholder',
    defaultMessage: 'How much EOS to stake',
  },
  transferPlaceholder: {
    id: 'app.components.Features.StakeForm.transferPlaceholder',
    defaultMessage:
      'Tranfer Off: owner retains staking control and voting rights. Transfer On: New account gains staking control and voting rights.',
  },
  delegateSubmitText: {
    id: 'app.components.Features.StakeForm.submitText',
    defaultMessage: 'Delegate',
  },
  stakeHolderLabel: {
    id: 'app.components.Features.StakeForm.stakeHolderLabel',
    defaultMessage: 'Stake Holder',
  },
  stakeHolderPlaceholder: {
    id: 'app.components.Features.StakeForm.stakeHolderPlaceholder',
    defaultMessage: 'Account that holds the stake',
  },
  quantityEOSUnstake: {
    id: 'app.components.Features.StakeForm.quantityEOSUnstake',
    defaultMessage: 'How much EOS to unstake',
  },
  undelegateSubmitText: {
    id: 'app.components.Features.StakeForm.undelegateSubmitText',
    defaultMessage: 'Undelegate',
  },
  delegateFormHeader: {
    id: 'app.components.Features.StakeForm.delegateFormHeader',
    defaultMessage: 'Delegate',
  },
  delegateFormSubHeader: {
    id: 'app.components.Features.StakeForm.delegateFormSubHeader',
    defaultMessage: ' - Stake',
  },
  undelegateFormHeader: {
    id: 'app.components.Features.StakeForm.undelegateFormHeader',
    defaultMessage: 'Undelegate',
  },
  undelegateFormSubHeader: {
    id: 'app.components.Features.StakeForm.undelegateFormSubHeader',
    defaultMessage: ' - Unstake',
  },
  undelegateFormUnstakePositiveQuantity: {
    id: 'app.components.Features.StakeForm.undelegateFormUnstakePositiveQuantity',
    defaultMessage: 'You must unstake a positive quantity',
  },
});
