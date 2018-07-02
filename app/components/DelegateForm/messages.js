/*
 * DelegateForm Messages
 *
 * This contains all the text for the DelegateForm component.
 */
import { defineMessages } from 'react-intl';

export default defineMessages({
  header: {
    id: 'app.components.DelegateForm.header',
    defaultMessage: 'Delegate Bandwidth (Stake)',
  },
  ownerName: {
    id: 'app.components.DelegateForm.ownerName',
    defaultMessage: 'Stake Owner',
  },
  ownerText: {
    id: 'app.components.DelegateForm.ownerText',
    defaultMessage: 'Account that controls the stake',
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
  transfer: {
    id: 'app.common.transfer',
    defaultMessage: 'Transfer',
  },
  delegate: {
    id: 'app.common.delegate',
    defaultMessage: 'Delegate',
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
  recepient: {
    id: 'app.common.recepient',
    defaultMessage: 'Recepient',
  },
  recepientText: {
    id: 'app.common.delegateRecepientText',
    defaultMessage: 'Account that receives the Stake',
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
});
