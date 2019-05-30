import React from 'react';
import ToolForm from 'components/Tool/ToolForm';
import ToolInput from 'components/Tool/ToolInput';

import messages from './messages';
import commonMessages from '../../messages';

const FormObject = props => {
  const { handleSubmit, intl } = props;
  const formProps = {
    handleSubmit,
    submitColor: 'rose',
    submitText: 'Register',
  };
  const FormData = [
    {
      id: 'proxy',
      label: intl.formatMessage(commonMessages.formProxyAccountLabel),
      placeholder: intl.formatMessage(commonMessages.formProxyAccountPlaceholder),
    },
    {
      id: 'name',
      label: intl.formatMessage(messages.formProxyName64Label),
      placeholder: intl.formatMessage(messages.formProxyName64Placeholder),
    },
    {
      id: 'slogan',
      label: intl.formatMessage(messages.formProxySlogan64Label),
      placeholder: intl.formatMessage(messages.formProxySlogan64Placeholder),
      md: 12,
      multiline: true,
      rows: 3,
    },
    {
      id: 'philosophy',
      label: intl.formatMessage(messages.formProxyPhilosophy1024Label),
      placeholder: intl.formatMessage(messages.formProxyPhilosophy1024Placeholder),
      md: 12,
      multiline: true,
      rows: 5,
      },
    {
      id: 'background',
      label: intl.formatMessage(messages.formProxyBackground1024Label),
      placeholder: intl.formatMessage(messages.formProxyBackground1024Placeholder),
      md: 12,
      multiline: true,
      rows: 5,
    },
    {
      id: 'website',
      label: intl.formatMessage(messages.formProxyWebsite1024Label),
      placeholder: intl.formatMessage(messages.formProxyWebsite1024Placeholder),
    },
    {
      id: 'logo_256',
      label: intl.formatMessage(messages.formProxyLogo256Label),
      placeholder: intl.formatMessage(messages.formProxyLogo256Placeholder),
    },
    {
      id: 'telegram',
      label: 'Telegram',
      placeholder: intl.formatMessage(messages.formProxyTelegramPlaceholder),
    },
    {
      id: 'steemit',
      label: 'Steemit',
      placeholder: intl.formatMessage(messages.formProxySteemitPlaceholder),
    },
    {
      id: 'twitter',
      label: 'Twitter',
      placeholder: intl.formatMessage(messages.formProxyTwitterPlaceholder),
    },
    {
      id: 'wechat',
      label: 'WeChat',
      placeholder: intl.formatMessage(messages.formProxyWeChatPlaceholder),
    },
  ];
  return (
    <ToolForm {...formProps}>
      {FormData.map(form => {
        return <ToolInput key={form.id} {...form} {...props} />;
      })}
    </ToolForm>
  );
};

export default FormObject;
