/*
 * CreateAccountForm Messages
 *
 * This contains all the text for the CreateAccountForm component.
 */
import { defineMessages } from 'react-intl';

export default defineMessages({
  header: {
    id: 'app.components.CreateAccountForm.header',
    defaultMessage: 'Create Account',
  },
  accountName: {
    id: 'app.components.CreateAccountForm.accountName',
    defaultMessage: 'New Account Name',
  },
  accountText: {
    id: 'app.components.CreateAccountForm.accountText',
    defaultMessage: '12 characters, a-z, 1-5',
  },
  ownerName: {
    id: 'app.components.CreateAccountForm.ownerName',
    defaultMessage: 'Creator Account',
  },
  ownerText: {
    id: 'app.components.CreateAccountForm.ownerText',
    defaultMessage: 'Account creating the new account',
  },
  ownerPermission: {
    id: 'app.common.ownerPermission',
    defaultMessage: 'Owner Public Key',
  },
  activePermission: {
    id: 'app.common.activePermission',
    defaultMessage: 'Active Public Key',
  },
  permissionText: {
    id: 'app.common.permissionText',
    defaultMessage: 'Enter public key, account, or json',
  },
  netStake: {
    id: 'app.common.netStake',
    defaultMessage: 'Net Stake (in EOS)',
  },
  cpuStake: {
    id: 'app.common.cpuStake',
    defaultMessage: 'CPU Stake (in EOS)',
  },
  netText: {
    id: 'app.common.netText',
    defaultMessage: 'Required for network traffic',
  },
  cpuText: {
    id: 'app.common.cpuText',
    defaultMessage: 'Required for processing power',
  },
  ramBuyBytes: {
    id: 'app.common.ramBuyBytes',
    defaultMessage: 'Ram Purchase (in bytes)',
  },
  ramBuyText: {
    id: 'app.common.ramBuyText',
    defaultMessage: 'Required to store account data',
  },
  transfer: {
    id: 'app.common.transfer',
    defaultMessage: 'Transfer',
  },
  transferDesc: {
    id: 'app.components.CreateAccountForm.transferDesc',
    defaultMessage:
      'Tranfer Off: owner retains staking control and voting rights. Transfer On: New account gains staking control and voting rights.',
  },
  disclaimer: {
    id: 'app.common.disclaimer',
    defaultMessage:
      'By executing this action you are agreeing to the EOS constitution and this actions associated ricardian contract.',
  },
  create: {
    id: 'app.common.create',
    defaultMessage: 'Create',
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
});
