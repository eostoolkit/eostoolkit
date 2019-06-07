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
      id: 'cpu',
      label: intl.formatMessage(messages.rexCpuQuantity),
      placeholder: intl.formatMessage(messages.rexCpuQuantityPlaceholder),
    },
    {
      id: 'net',
      label: intl.formatMessage(messages.rexNetQuantity),
      placeholder: intl.formatMessage(messages.rexNetQuantityPlaceholder),
    },
  ];
  const formProps = {
    handleSubmit,
    submitColor: 'rose',
    submitText: intl.formatMessage(messages.rexBuySubmit),
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
