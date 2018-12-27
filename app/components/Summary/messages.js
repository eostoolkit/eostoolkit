/*
 * Summary Messages
 *
 * This contains all the text for the components in Summaries.
 */
import { defineMessages } from 'react-intl';

export default defineMessages({
  attachAccount: {
    id: 'app.components.Summary.index.attachAccount',
    defaultMessage: 'Attach an Account',
  },
  loadAccountText: {
    id: 'app.components.Summary.resources.loadAccountText',
    defaultMessage: 'Load an account to view your resource utilization and balances.',
  },
  loadAccountAdditionalInfoText: {
    id: 'app.components.Summary.resources.loadAccountAdditionalInfoText',
    defaultMessage:
      'If your account details keep disappearing it is because many networks are close to you. Select one manually by clicking "Change Network" to prevent this.',
  },
  tokenDetailInfoText: {
    id: 'app.components.Summary.resources.tokenDetailInfoText',
    defaultMessage: 'Token details powered by eosflare and greymass',
  },
  refundingText: {
    id: 'app.components.Summary.resources.refundingText',
    defaultMessage: 'REFUNDING',
  },
  noneText: {
    id: 'app.components.Summary.resources.noneText',
    defaultMessage: 'None',
  },
  tokensText: {
    id: 'app.components.Summary.resources.tokensText',
    defaultMessage: 'Tokens',
  },
});
