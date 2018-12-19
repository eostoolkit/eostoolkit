import React from 'react';

import ToolForm from 'components/Tool/ToolForm';
import ToolInput from 'components/Tool/ToolInput';
import ToolSwitch from 'components/Tool/ToolSwitch';

import messages from './messages';
import commonMessages from '../../messages';

const FormObject = props => {
  const { handleSubmit, intl } = props;

  const FormData = [
    {
      id: 'name',
      label: intl.formatMessage(messages.formAccountName),
      placeholder: intl.formatMessage(commonMessages.twelveCharactersMessage),
    },
    {
      id: 'owner',
      label: intl.formatMessage(messages.formOwner),
      placeholder: intl.formatMessage(messages.formOwnerPlaceholder),
    },
    {
      id: 'ownerKey',
      label: intl.formatMessage(messages.formOwnerKey),
      placeholder: intl.formatMessage(messages.formPublicKeyPlaceholder),
    },
    {
      id: 'activeKey',
      label: intl.formatMessage(messages.formActiveKey),
      placeholder: intl.formatMessage(messages.formPublicKeyPlaceholder),
    },
    {
      id: 'cpu',
      label: intl.formatMessage(messages.formCPULabel),
      placeholder: intl.formatMessage(messages.formCPUPlaceholder),
    },
    {
      id: 'net',
      label: intl.formatMessage(messages.formNETLabel),
      placeholder: intl.formatMessage(messages.formNETPlaceholder),
    },
    {
      id: 'ram',
      label: intl.formatMessage(messages.formRAMLabel),
      placeholder: intl.formatMessage(messages.formRAMPlaceholder),
    },
  ];

  const switchData = {
    id: 'transfer',
    label: intl.formatMessage(commonMessages.transferLabel),
    placeholder: intl.formatMessage(messages.formFransferPlaceholder),
  };

  const formProps = {
    handleSubmit,
    submitColor: 'rose',
    submitText: 'Create',
  };
  return (
    <ToolForm {...formProps}>
      {FormData.map(form => {
        return <ToolInput key={form.id} {...form} {...props} />;
      })}
      <ToolSwitch {...switchData} {...props} />
    </ToolForm>
  );
};

export default FormObject;
