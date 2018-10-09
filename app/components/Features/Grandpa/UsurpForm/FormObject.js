import React from 'react';

import ToolForm from 'components/Tool/ToolForm';
import ToolInput from 'components/Tool/ToolInput';

const FormData = [
  {
    id: 'quantity',
    label: 'Usurp Fee (in EOS)',
    placeholder: 'How much?',
  },
  {
    id: 'memo',
    label: 'Memo',
    placeholder: 'Your message',
  },
];

const FormObject = props => {
  const { handleSubmit } = props;
  const formProps = {
    handleSubmit,
    submitColor: 'success',
    submitText: 'Usurp',
    noDisclaimer: true,
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
