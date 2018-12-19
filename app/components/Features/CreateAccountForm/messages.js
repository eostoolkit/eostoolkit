/*
 * General purpose Messages
 *
 * This contains all the text for general purpose messages
 */
import { defineMessages } from 'react-intl';

export default defineMessages({
  formHeader: {
    id: 'app.components.Features.CreateAccountForm.formHeader',
    defaultMessage: 'Create Account',
  },
  formTutorialHeader: {
    id: 'app.components.Features.CreateAccountForm.formTutorialHeader',
    defaultMessage: 'Tutorial',
  },
  formTutorialText: {
    id: 'app.components.Features.CreateAccountForm.formTutorialText',
    defaultMessage: 'Tutorial coming soon',
  },
  formAccountName: {
    id: 'app.components.Features.CreateAccountForm.formAccountName',
    defaultMessage: 'New Account Name',
  },
  formAccountNameCreatorMessage: {
    id: 'app.components.Features.CreateAccountForm.formAccountNameCreatorMessage',
    defaultMessage: 'Creator name is required',
  },
  formAccountNameMessageRequired: {
    id: 'app.components.Features.CreateAccountForm.formAccountNameMessageRequired',
    defaultMessage: 'Account name is required',
  },
  formAccountNameInvalid: {
    id: 'app.components.Features.CreateAccountForm.formAccountNameInvalid',
    defaultMessage: 'Invalid account name',
  },
  formOwner: {
    id: 'app.components.Features.CreateAccountForm.formOwner',
    defaultMessage: 'Creator',
  },
  formOwnerPlaceholder: {
    id: 'app.components.Features.CreateAccountForm.formOwnerPlaceholder',
    defaultMessage: 'Account that creates the new account',
  },
  formOwnerKey: {
    id: 'app.components.Features.CreateAccountForm.formOwnerKey',
    defaultMessage: 'Owner Public Key',
  },
  formActiveKey: {
    id: 'app.components.Features.CreateAccountForm.formActiveKey',
    defaultMessage: 'Active Public Key',
  },
  formPublicKeyPlaceholder: {
    id: 'app.components.Features.CreateAccountForm.formPublicKeyPlaceholder',
    defaultMessage: 'Enter public key',
  },
  formOwnerKeyMessage: {
    id: 'app.components.Features.CreateAccountForm.formOwnerKeyMessage',
    defaultMessage: 'Owner key is required',
  },
  formActiveKeyRequired: {
    id: 'app.components.Features.CreateAccountForm.formActiveKeyRequired',
    defaultMessage: 'Active key is required',
  },
  formActiveKeyPlaceholder: {
    id: 'app.components.Features.CreateAccountForm.formActiveKeyPlaceholder',
    defaultMessage: 'Search for this public key',
  },
  formCPULabel: {
    id: 'app.components.Features.CreateAccountForm.formCPULabel',
    defaultMessage: 'CPU Stake (in EOS)',
  },
  formCPUPlaceholder: {
    id: 'app.components.Features.CreateAccountForm.formCPUPlaceholder',
    defaultMessage: 'Required to process transactions',
  },
  formCPUMessageRequired: {
    id: 'app.components.Features.CreateAccountForm.formCPUMessageRequired',
    defaultMessage: 'CPU Stake is required',
  },
  formNETLabel: {
    id: 'app.components.Features.CreateAccountForm.formNETLabel',
    defaultMessage: 'Net Stake (in EOS)',
  },
  formNETPlaceholder: {
    id: 'app.components.Features.CreateAccountForm.formNETPlaceholder',
    defaultMessage: 'Required to use network',
  },
  formNETMessageRequired: {
    id: 'app.components.Features.CreateAccountForm.formNETMessageRequired',
    defaultMessage: 'NET Stake is required',
  },
  formPositiveQuantityRequired: {
    id: 'app.components.Features.CreateAccountForm.formPositiveQuantityRequired',
    defaultMessage: 'You must stake a positive quantity',
  },
  formRAMLabel: {
    id: 'app.components.Features.CreateAccountForm.formRAMLabel',
    defaultMessage: 'Ram Purchase (in bytes)',
  },
  formRAMPlaceholder: {
    id: 'app.components.Features.CreateAccountForm.formRAMPlaceholder',
    defaultMessage: 'Required to store account',
  },
  formRAMMessageRequired: {
    id: 'app.components.Features.CreateAccountForm.formRAMMessageRequired',
    defaultMessage: 'RAM purchase is required',
  },
  formRAMMessagePositive: {
    id: 'app.components.Features.CreateAccountForm.formRAMMessagePositive',
    defaultMessage: 'RAM must be a positive quantity',
  },
  formRAMMessageInteger: {
    id: 'app.components.Features.CreateAccountForm.formRAMMessageInteger',
    defaultMessage: 'RAM cannot be fractional',
  },
  formFransferPlaceholder: {
    id: 'app.components.Features.CreateAccountForm.formFransferPlaceholder',
    defaultMessage:
      'ranfer Off: owner retains staking control and voting rights. Transfer On: New account gains staking control and voting rights.',
  },
});
