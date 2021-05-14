import { defineMessages } from 'react-intl';

export default defineMessages({
  sendingTitle: {
    id: 'app.containers.Notification.sendingTitle',
    defaultMessage: 'Sending...',
  },
  scatterShouldAppearMessage: {
    id: 'app.containers.Notification.scatterShouldAppearMessage',
    defaultMessage: 'Your Wallet provider should appear shortly to confirm this action.',
  },
  transactionDelayNotification: {
    id: 'app.containers.Notification.transactionDelayNotification',
    defaultMessage: 'Your transaction will be sent to the network afterwards',
  },
  successTitle: {
    id: 'app.containers.Notification.successTitle',
    defaultMessage: 'Success',
  },
  successThanksMessage: {
    id: 'app.containers.Notification.successThanksMessage',
    defaultMessage: 'Thank you for using EOSToolkit.io',
  },
  successSupportMessage: {
    id: 'app.containers.Notification.successSupportMessage',
    defaultMessage: 'Your votes support continued development of these tools',
  },
  alreadyGrabedTitle: {
    id: 'app.containers.Notification.alreadyGrabedTitle',
    defaultMessage: 'Already Grabbed!',
  },
  successAlreadyAirgrabedMessage: {
    id: 'app.containers.Notification.successAlreadyAirgrabedMessage',
    defaultMessage: 'You have already claimed this Airgrab!',
  },
  successSetUpToReceiveNewDropsMessage: {
    id: 'app.containers.Notification.successSetUpToReceiveNewDropsMessage',
    defaultMessage: 'You are all set to receive new drops!',
  },
  failrureTitle: {
    id: 'app.containers.Notification.failrureTitle',
    defaultMessage: 'Failure',
  },
  failureTransactionFailed: {
    id: 'app.containers.Notification.failureTransactionFailed',
    defaultMessage: 'Transaction has failed',
  },
  failureScatterFailed: {
    id: 'app.containers.Notification.failureScatterFailed',
    defaultMessage: 'You must install and connect in some wallet provider',
  },
});
