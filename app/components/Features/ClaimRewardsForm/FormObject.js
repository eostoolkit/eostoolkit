import React from 'react';

import ToolForm from 'components/Tool/ToolForm';
import ToolInput from 'components/Tool/ToolInput';

import messages from './messages';

const FormObject = props => {
  const { handleSubmit, intl } = props;
  const FormData = [
    {
      id: 'owner',
      label: intl.formatMessage(messages.claimerLabel),
      placeholder: intl.formatMessage(messages.claimerPlaceholder),
      md: 12,
    },
  ];
  const formProps = {
    handleSubmit,
    submitColor: 'rose',
    submitText: intl.formatMessage(messages.claimerSubmitText),
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
