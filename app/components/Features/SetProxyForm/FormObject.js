import React from 'react';

import ToolForm from 'components/Tool/ToolForm';
import ToolInput from 'components/Tool/ToolInput';

import messages from './messages';
import commonMessages from '../../messages';

const FormObject = props => {
  const { handleSubmit, intl } = props;

  const FormData = [
    {
      id: 'name',
      label: intl.formatMessage(messages.proxyNameLabel),
      placeholder: intl.formatMessage(commonMessages.twelveCharactersMessage),
    },
    {
      id: 'owner',
      label: intl.formatMessage(messages.proxyOwnerLabel),
      placeholder: intl.formatMessage(messages.proxyOwnerPlaceholder),
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
