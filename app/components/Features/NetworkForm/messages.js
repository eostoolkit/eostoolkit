/*
 * NetworkForm Messages
 *
 * This contains all the text for the HomePage component.
 */
import { defineMessages } from 'react-intl';

export default defineMessages({
  selectNetwork: {
    id: 'app.components.Features.NetworkForm.selectNetwork',
    defaultMessage: 'Select a network',
  },
  addNetworkToGit: {
    id: 'app.components.Features.NetworkForm.addNetworkToGit',
    defaultMessage: `Get your testnet or endpoint added to this list by submitting a pull request to <a href="https://github.com/eostoolkit/eos-networks" target="new">GitHub</a>`,
  },
});
