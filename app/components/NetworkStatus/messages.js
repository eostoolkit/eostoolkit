/*
 * Home Messages
 *
 * This contains all the text for the Home component.
 */
import { defineMessages } from 'react-intl';

export default defineMessages({
  attachAccountText: {
    id: 'app.components.NetworkStatus.Identity.attachAccountText',
    defaultMessage: 'Please attach Identity',
  },
  installScatterText: {
    id: 'app.components.NetworkStatus.Identity.installScatterText',
    defaultMessage: 'Please install Scatter',
  },
  ifReadNotTickedText: {
    id: 'app.components.NetworkStatus.Status.ifReadNotTickedText',
    defaultMessage:
      "If READ is not ticked, it means the selected mainnet endpoint could not be accessed. Either your internet is restricted or the selected endpoint is down. Try selecting a different endpoint via 'Change network' menu above.",
  },
  ifWriteNotTickedText: {
    id: 'app.components.NetworkStatus.Status.ifWriteNotTickedText',
    defaultMessage:
      'If WRITE access is not ticked, make sure scatter is configured with a valid network and that network is also linked to your scatter identity.',
  },
  ifAccountNotTickedText: {
    id: 'app.components.NetworkStatus.Status.ifAccountNotTickedText',
    defaultMessage:
      "If ACCOUNT is not ticked make sure to use the 'Select account' menu above and select a scatter identity and account to perform actions under.",
  },
});
