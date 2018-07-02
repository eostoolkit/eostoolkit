/*
 * UndelegateForm Messages
 *
 * This contains all the text for the UndelegateForm component.
 */
import { defineMessages } from 'react-intl';

export default defineMessages({
  header: {
    id: 'app.components.UndelegateForm.header',
    defaultMessage: 'Undelegate Bandwidth (Unstake)',
  },
  warning: {
    id: 'app.components.UndelegateForm.warning',
    defaultMessage: 'Unstaking takes three days. Unstaking lowers your vote weight immediately',
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
    id: 'app.components.UndelegateForm.netStake',
    defaultMessage: 'Net Unstake (in EOS)',
  },
  cpuStake: {
    id: 'app.components.UndelegateForm.cpuStake',
    defaultMessage: 'CPU Unstake (in EOS)',
  },
  netText: {
    id: 'app.components.UndelegateForm.netText',
    defaultMessage: 'How much EOS to remove from NET',
  },
  cpuText: {
    id: 'app.components.UndelegateForm.cpuText',
    defaultMessage: 'How much EOS to remove from CPU',
  },
  transfer: {
    id: 'app.common.transfer',
    defaultMessage: 'Transfer',
  },
  undelegate: {
    id: 'app.common.undelegate',
    defaultMessage: 'Undelegate',
  },
  transferDesc: {
    id: 'app.components.UndelegateForm.transferDesc',
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
    id: 'app.common.undelegateRecepientText',
    defaultMessage: 'Account that currently holds the Stake',
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
