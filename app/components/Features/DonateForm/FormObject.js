import React from 'react';

// core components
import GridItem from 'components/Grid/GridItem';
import Button from 'components/CustomButtons/Button';


import ToolForm from 'components/Tool/ToolForm';
import ToolInput from 'components/Tool/ToolInput';


const FormData = [
  {
    id: "quantity",
    label: "Quantity (in EOS)",
    placeholder: "How much EOS to donate",
  },
  {
    id: "memo",
    label: "Memo",
    placeholder: "A note to send us",
  }
];


const FormObject = props => {
  const { values, touched, errors, handleChange, handleBlur, handleSubmit } = props;
  const formProps = {
    handleSubmit: handleSubmit,
    submitColor: "rose",
    submitText: "Donate",
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
