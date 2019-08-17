/*
 * Author: Andre Litty
 * Project: eostoolkit
 * Date: 20.05.19
 * Version: 1.0
 */

import React from 'react';

import ToolForm from 'components/Tool/ToolForm';
import ToolInput from 'components/Tool/ToolInput';

import messages from '../messages';

const FormObject = props => {
  const { handleSubmit, intl } = props;
  const FormData = [
    {
      id: 'rex',
      label: intl.formatMessage(messages.rexSellText),
      placeholder: intl.formatMessage(messages.rexSellTextPlaceholder),
    },
  ];
  const formProps = {
    handleSubmit,
    submitColor: 'rose',
    submitText: intl.formatMessage(messages.rexSellText),
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
