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
    submitText: intl.formatMessage(messages.createProxySubmitText),
  };
  const FormData = [
    {
      id: 'owner',
      label: intl.formatMessage(commonMessages.formProxyAccountLabel),
      placeholder: intl.formatMessage(commonMessages.formProxyAccountPlaceholder),
      md: 12,
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
