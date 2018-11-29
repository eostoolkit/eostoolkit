/*
 * Home Messages
 *
 * This contains all the text for the Home component.
 */
import { defineMessages } from 'react-intl';

export default defineMessages({
  header: {
    id: 'app.components.Information.Home.header',
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
});
