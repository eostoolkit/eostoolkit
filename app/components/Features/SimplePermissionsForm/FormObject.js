import React from 'react';

import ToolForm from 'components/Tool/ToolForm';
import ToolInput from 'components/Tool/ToolInput';

import messages from './messages';

const FormObject = props => {
  const { handleSubmit, intl } = props;

  const FormData = [
    {
      id: 'owner',
      label: intl.formatMessage(messages.simplePermissionOwnerLabel),
      placeholder: intl.formatMessage(messages.simplePermissionOwnerPlaceholder),
      md: 12,
    },
    {
      id: 'activeKey',
      label: intl.formatMessage(messages.simplePermissionActiveKeyLabel),
      placeholder: intl.formatMessage(messages.simplePermissionKeyOrNamePlaceholder),
      md: 12,
    },
    {
      id: 'ownerKey',
      label: intl.formatMessage(messages.simplePermissionOwnerKeyLabel),
      placeholder: intl.formatMessage(messages.simplePermissionKeyOrNamePlaceholder),
      md: 12,
    },
  ];
  const formProps = {
    handleSubmit,
    submitColor: 'rose',
    submitText: intl.formatMessage(messages.simplePermissionUpdateText),
  };
  return (
    <ToolForm {...formProps}>
      {FormData.map(form => {
        return <ToolInput key={form.id} {...form} {...props} />;
      })}
    </ToolForm>
  );
};

export default FormObject;
