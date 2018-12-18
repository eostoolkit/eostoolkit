import React from 'react';
import { makeSelectTokens as selectTokens } from 'containers/NetworkClient/selectors';
import ToolForm from 'components/Tool/ToolForm';
import ToolInput from 'components/Tool/ToolInput';
import messages from './messages';

const FormObject = props => {
  const { handleSubmit, intl } = props;

  const FormData = [
    {
      id: 'name',
      label: intl.formatMessage(messages.recipientLabel),
      placeholder: intl.formatMessage(messages.recipientPlaceholder),
    },
    {
      id: 'owner',
      label: 'Sender',
      placeholder: 'Account that sends the Token',
    },
    {
      id: 'quantity',
      label: 'Quantity (in Tokens)',
      placeholder: 'How many Tokens to send',
    },
    {
      id: 'symbol',
      label: 'Symbol',
      placeholder: 'Symbol of the Token',
    },
    {
      id: 'memo',
      label: 'Memo',
      placeholder: 'A memo to attach to transfer',
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
