import { defineMessages } from 'react-intl';

export default defineMessages({
  // Messages for SetProxyForm
  proxyNameLabel: {
    id: 'app.components.Features.SetProxyForm.proxyNameLabel',
    defaultMessage: 'Proxy Account Name',
  },
  proxyOwnerLabel: {
    id: 'app.components.Features.SetProxyForm.proxyOwnerLabel',
    defaultMessage: 'Proxied Account Name',
  },
  proxyOwnerPlaceholder: {
    id: 'app.components.Features.SetProxyForm.proxyOwnerPlaceholder',
    defaultMessage: 'Account that will be proxied',
  },
  submitText: {
    id: 'app.components.Features.SetProxyForm.submitText',
    defaultMessage: 'Set Proxy',
  },
  proxyFormHeader: {
    id: 'app.components.Features.SetProxyForm.proxyFormHeader',
    defaultMessage: 'Set Proxy',
  },
  proxyFormSubHeader: {
    id: 'app.components.Features.SetProxyForm.proxyFormSubHeader',
    defaultMessage: ' - They will vote on your behalf',
  },
  proxyNameRequired: {
    id: 'app.components.Features.SetProxyForm.proxyNameRequired',
    defaultMessage: 'Proxied name is required',
  },
  proxyAccountRequired: {
    id: 'app.components.Features.SetProxyForm.proxyAccountRequired',
    defaultMessage: 'Account name is required',
  },
});
