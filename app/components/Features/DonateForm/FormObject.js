import React from 'react';

import ToolForm from 'components/Tool/ToolForm';
import ToolInput from 'components/Tool/ToolInput';

import messages from './messages';
import commonMessages from '../../messages';

const FormObject = props => {
  const { handleSubmit, intl } = props;
  const FormData = [
    {
      id: 'quantity',
      label: intl.formatMessage(messages.donateFormEOSQuantityLabel),
      placeholder: intl.formatMessage(messages.donateFormEOSQuantityPlaceholder),
    },
    {
      id: 'memo',
      label: intl.formatMessage(commonMessages.memoLabel),
      placeholder: intl.formatMessage(messages.donateFormMemoPlaceholder),
    },
  ];
  const formProps = {
    handleSubmit,
    submitColor: 'rose',
    submitText: intl.formatMessage(messages.donateText),
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
