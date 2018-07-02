/*
 * SimplePermissionsForm Messages
 *
 * This contains all the text for the SimplePermissionsForm component.
 */
import { defineMessages } from 'react-intl';

export default defineMessages({
  header: {
    id: 'app.components.SimplePermissionsForm.header',
    defaultMessage: 'Change Permissions (Simple)',
  },
  ownerName: {
    id: 'app.components.SimplePermissionsForm.ownerName',
    defaultMessage: 'Change Permissions For',
  },
  ownerText: {
    id: 'app.components.SimplePermissionsForm.ownerText',
    defaultMessage: 'Account whose permissions will change',
  },
  ownerPermission: {
    id: 'app.components.SimplePermissionsForm.ownerPermission',
    defaultMessage: 'Owner Permission (Only complete if you want to change)',
  },
  activePermission: {
    id: 'app.components.SimplePermissionsForm.activePermission',
    defaultMessage: 'Active Permission (Only complete if you want to change)',
  },
  permissionText: {
    id: 'app.common.permissionText',
    defaultMessage: 'Enter public key, account, or json',
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
  update: {
    id: 'app.common.update',
    defaultMessage: 'Update',
  },
  warningHeader: {
    id: 'app.components.SimplePermissionsForm.warningHeader',
    defaultMessage: 'Important',
  },
  warning1: {
    id: 'app.components.SimplePermissionsForm.warning1',
    defaultMessage: 'This action has serious consequences',
  },
  warning2: {
    id: 'app.components.SimplePermissionsForm.warning2',
    defaultMessage: 'You can change active or owner permission or both',
  },
  warning3: {
    id: 'app.components.SimplePermissionsForm.warning3',
    defaultMessage: "Leave blank any permission you DON'T want to change",
  },
  warning4: {
    id: 'app.components.SimplePermissionsForm.warning4',
    defaultMessage: 'To change only active permission select youraccount@active for your Scatter identity',
  },
  warning5: {
    id: 'app.components.SimplePermissionsForm.warning5',
    defaultMessage: 'To change any permission select youraccount@owner for your Scatter identity',
  },
  warning6: {
    id: 'app.components.SimplePermissionsForm.warning6',
    defaultMessage:
      'If you change your active permission you have to update your scatter identity to use this new key pair',
  },
  warning7: {
    id: 'app.components.SimplePermissionsForm.warning7',
    defaultMessage:
      'If you dont have the key pairs you assign to the active permission you will no longer be able send transactions',
  },
  warning8: {
    id: 'app.components.SimplePermissionsForm.warning8',
    defaultMessage: 'You can recover your active permission using your owner permission, however:',
  },
  warning9: {
    id: 'app.components.SimplePermissionsForm.warning9',
    defaultMessage: "If you don't control the permissions you assign - your account becomes IRRECOVERABLE",
  },
});
