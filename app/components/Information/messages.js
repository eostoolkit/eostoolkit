/*
 * Information Messages
 *
 * This contains all the text for the Information components.
 */
import { defineMessages } from 'react-intl';

export default defineMessages({
  // Messages for Home component
  homeHeader: {
    id: 'app.components.Information.Home.homeHeader',
    defaultMessage: 'Getting started',
  },
  scatterInfo: {
    id: 'app.components.Information.Home.scatterInfo',
    defaultMessage: `You must have <a href="https://get-scatter.com/" target="new">Scatter</a> installed to safely and securely send transactions to the EOS Network.`,
  },
  helpdesk: {
    id: 'app.components.Information.Home.helpdeskInfo',
    defaultMessage: `Checkout our <a href="https://eoshelpdesk.zendesk.com" target="new">EOS Helpdesk</a> to find useful information and tutorials for EOSToolkit and the EOS Network.`,
  },
  telegram: {
    id: 'app.components.Information.Home.generEOSTelegram',
    defaultMessage: `If you would like to ask us questions are participate in the GenerEOS Community, check out our <a href="https://t.me/generEOS" target="new">Telegram</a> group.`,
  },
  governanceLinkPart1: {
    id: 'app.components.Information.Home.governanceLinkP2',
    defaultMessage: `Make sure you have read and understand the `,
  },
  governanceLinkPart2: {
    id: 'app.components.Information.Home.governanceLinkP2',
    defaultMessage: ` prior to using the EOS Network.`,
  },
  // TODO: Add to de.json
  // Messages for ChangePermissions component
  changePermissionsHeader: {
    id: 'app.components.Information.ChangePermissions.changePermissionsHeader',
    defaultMessage: 'This action has serious consequences',
  },
  changePermissionsHeaderTow: {
    id: 'app.components.Information.ChangePermissions.changePermissionsHeaderTwo',
    defaultMessage: `If you don't control the permissions you assign - your account becomes IRRECOVERABLE`,
  },
  changePermissionsHeaderThree: {
    id: 'app.components.Information.ChangePermissions.changePermissionsHeaderThree',
    defaultMessage: `If you assign an ACCOUNT instead of a KEY as a permission you risk breaking your account - be 100% SURE`,
  },
  changePermissionsLineOne: {
    id: 'app.components.Information.ChangePermissions.changePermissionsLineOne',
    defaultMessage: `You can change active or owner permission or both`,
  },
  changePermissionsLineTwo: {
    id: 'app.components.Information.ChangePermissions.changePermissionsLineTwo',
    defaultMessage: `Leave blank any permission you DON'T want to change`,
  },
  changePermissionsLineThree: {
    id: 'app.components.Information.ChangePermissions.changePermissionsLineThree',
    defaultMessage: `To change only active permission select youraccount@active for your Scatter identity`,
  },
  changePermissionsLineFour: {
    id: 'app.components.Information.ChangePermissions.changePermissionsLineFour',
    defaultMessage: `To change any permission select youraccount@owner for your Scatter identity`,
  },
  changePermissionsLineFive: {
    id: 'app.components.Information.ChangePermissions.changePermissionsLineFive',
    defaultMessage: `If you change your active permission you have to update your scatter identity to use this new key pair`,
  },
  changePermissionsLineSix: {
    id: 'app.components.Information.ChangePermissions.changePermissionsLineSix',
    defaultMessage: `If you don't have the key pairs you assign to the active permission you will no longer be able send transactions`,
  },
  // Messages for Disclaimer component
  disclaimerText: {
    id: 'app.components.Information.Disclaimer.disclaimerText',
    defaultMessage: `By executing this action you are agreeing to the EOS constitution and this action's associated ricardian contract. The ricardian contract may be viewed in the Scatter approval prompt.`,
  }
});
