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
  networkTableColumnName: {
    id: 'app.components.Features.NetworkForm.networkTableColumnName',
    defaultMessage: 'Name',
  },
  networkTableColumnNetwork: {
    id: 'app.components.Features.NetworkForm.networkTableColumnNetwork',
    defaultMessage: 'Network',
  },
  networkTableColumnType: {
    id: 'app.components.Features.NetworkForm.networkTableColumnType',
    defaultMessage: 'Type',
  },
  networkTableColumnAPI: {
    id: 'app.components.Features.NetworkForm.networkTableColumnAPI',
    defaultMessage: 'API',
  },
  networkTableColumnHost: {
    id: 'app.components.Features.NetworkForm.networkTableColumnHost',
    defaultMessage: 'Host',
  },
  networkTableColumnFailures: {
    id: 'app.components.Features.NetworkForm.networkTableColumnFailures',
    defaultMessage: 'Failures',
  },
  networkTableColumnPing: {
    id: 'app.components.Features.NetworkForm.networkTableColumnPing',
    defaultMessage: 'Ping',
  },
  networkTableColumnSelect: {
    id: 'app.components.Features.NetworkForm.networkTableColumnSelect',
    defaultMessage: 'Select',
  },
  networkTableUnknownNetworkText: {
    id: 'app.components.Features.NetworkForm.networkTableUnknownNetworkText',
    defaultMessage: 'Unknown',
  },
  networkTableCurrentNetworkText: {
    id: 'app.components.Features.NetworkForm.networkTableCurrentNetworkText',
    defaultMessage: 'Current Network',
  },
});
