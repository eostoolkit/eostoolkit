/*
 * LinkAuthForm Messages
 *
 * This contains all the text for the HomePage component.
 */
import { defineMessages } from 'react-intl';

export default defineMessages({
  unlinkAuthText: {
    id: 'app.components.Features.LinkAuthForm.unlinkAuthText',
    defaultMessage: 'Unlink Auth',
  },
  unlinkAuthSubheader: {
    id: 'app.components.Features.LinkAuthForm.unlinkAuthSubheader',
    defaultMessage: '- Remove permissions for certain contract actions',
  },
  formContractNameRequired: {
    id: 'app.components.Features.LinkAuthForm.formContractNameRequired',
    defaultMessage: 'Contract name is required',
  },
  formActionNameRequired: {
    id: 'app.components.Features.LinkAuthForm.formActionNameRequired',
    defaultMessage: 'Action name is required',
  },

  linkAuthText: {
    id: 'app.components.Features.LinkAuthForm.linkAuthText',
    defaultMessage: 'Link Auth',
  },
  linkAuthAccountPlaceholder: {
    id: 'app.components.Features.LinkAuthForm.linkAuthAccountPlaceholder',
    defaultMessage: 'Account name to link',
  },
  linkAuthAccountPermissionPlaceholder: {
    id: 'app.components.Features.LinkAuthForm.linkAuthAccountPermissionPlaceholder',
    defaultMessage: 'Account permission to link (i.e. sender)',
  },
  formContractNameLabel: {
    id: 'app.components.Features.LinkAuthForm.formContractNameLabel',
    defaultMessage: 'Contract Name',
  },
  formContractNamePlaceholder: {
    id: 'app.components.Features.LinkAuthForm.formContractNamePlaceholder',
    defaultMessage: 'Contract account name (i.e. eosio.token)',
  },
  formContractActionLabel: {
    id: 'app.components.Features.LinkAuthForm.formContractNameLabel',
    defaultMessage: 'Contract Action',
  },
  formContractActionPlaceholder: {
    id: 'app.components.Features.LinkAuthForm.formContractActionPlaceholder',
    defaultMessage: 'Contract action name (i.e. transfer)',
  },
  unlinkAuthAccountPlaceholder: {
    id: 'app.components.Features.LinkAuthForm.unlinkAuthAccountPlaceholder',
    defaultMessage: 'Account name to unlink',
  },
  linkAuthSubheader: {
    id: 'app.components.Features.LinkAuthForm.linkAuthSubheader',
    defaultMessage: '- Specify permissions for certain contract actions',
  },
});
