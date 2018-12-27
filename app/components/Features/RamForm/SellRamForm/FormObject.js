import React from 'react';

import ToolForm from 'components/Tool/ToolForm';
import ToolInput from 'components/Tool/ToolInput';

import messages from '../messages';

const FormObject = props => {
  const { handleSubmit, intl } = props;
  const FormData = [
    {
      id: 'owner',
      label: intl.formatMessage(messages.sellRamFormSellerLabel),
      placeholder: intl.formatMessage(messages.sellRamFormSellerPlaceholder),
    },
    {
      id: 'ram',
      label: intl.formatMessage(messages.sellRamFormBytesLabel),
      placeholder: intl.formatMessage(messages.sellRamFormBytesPlaceholder),
    },
  ];
  const formProps = {
    handleSubmit,
    submitColor: 'rose',
    submitText: intl.formatMessage(messages.sellRamFormSubmitText),
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
