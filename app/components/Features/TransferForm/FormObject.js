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
      label: intl.formatMessage(commonMessages.recipientLabel),
      placeholder: intl.formatMessage(messages.recipientPlaceholder),
    },
    {
      id: 'owner',
      label: intl.formatMessage(messages.senderLabel),
      placeholder: intl.formatMessage(messages.senderPlaceholder),
    },
    {
      id: 'quantity',
      label: intl.formatMessage(messages.quantityLabel),
      placeholder: intl.formatMessage(messages.quantityPlaceholder),
    },
    {
      id: 'symbol',
      label: intl.formatMessage(messages.symbolLabel),
      placeholder: intl.formatMessage(messages.symbolPlaceholder),
    },
    {
      id: 'memo',
      label: intl.formatMessage(commonMessages.memoLabel),
      placeholder: intl.formatMessage(messages.memoPlaceholder),
      md: 12,
    },
  ];

  const formProps = {
    handleSubmit,
    submitColor: 'rose',
    submitText: 'Send',
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
