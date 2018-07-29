import React from 'react';

import ToolForm from 'components/Tool/ToolForm';
import ToolInput from 'components/Tool/ToolInput';

const FormData = [
  {
    id: "owner",
    label: "Seller",
    placeholder: "Account that sells the Ram",
  },
  {
    id: "ram",
    label: "Ram to Sell (in bytes)",
    placeholder: "How many bytes to sell",
  },
];

const FormObject = props => {
  const { values, touched, errors, handleChange, handleBlur, handleSubmit } = props;
  const formProps = {
    handleSubmit: handleSubmit,
    submitColor: "rose",
    submitText: "Sell",
  }
  return (
    <ToolForm {...formProps}>
      {FormData.map(form => {
        return (<ToolInput key={form.id} {...form} {...props}/>)
      })}
    </ToolForm>
  );
};

export default FormObject;
