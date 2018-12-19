import React from 'react';

import ToolForm from 'components/Tool/ToolForm';
import ToolInput from 'components/Tool/ToolInput';

import messages from '../messages';
import commonMessages from '../../../messages';

const FormObject = props => {
  const { handleSubmit, intl } = props;
  const FormData = [
    {
      id: 'name',
      label: intl.formatMessage(messages.stakeHolderLabel),
      placeholder: intl.formatMessage(messages.stakeHolderPlaceholder),
    },
    {
      id: 'owner',
      label: intl.formatMessage(messages.stakeOwnerLabel),
      placeholder: intl.formatMessage(messages.stakeOwnerPlaceholder),
    },
    {
      id: 'cpu',
      label: intl.formatMessage(commonMessages.stakeCPULabel),
      placeholder: intl.formatMessage(messages.quantityEOSUnstake),
    },
    {
      id: 'net',
      label: intl.formatMessage(commonMessages.stakeNetLabel),
      placeholder: intl.formatMessage(messages.quantityEOSUnstake),
    },
  ];
  const formProps = {
    handleSubmit,
    submitColor: 'rose',
    submitText: intl.formatMessage(messages.undelegateSubmitText),
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
