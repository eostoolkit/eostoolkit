import React from 'react';
import ToolForm from 'components/Tool/ToolForm';
import ToolInput from 'components/Tool/ToolInput';

const FormData = [
  {
    id: "proxy",
    label: "Proxy Account",
    placeholder: "Account that is the proxy",
    md: 12,
  },
];

const FormObject = props => {
  const { values, touched, errors, handleChange, handleBlur, handleSubmit } = props;
  const formProps = {
    handleSubmit: handleSubmit,
    submitColor: "rose",
    submitText: "Unregister",
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
