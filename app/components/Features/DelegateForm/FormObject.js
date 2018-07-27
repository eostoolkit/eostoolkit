import React from 'react';

// core components
import GridItem from 'components/Grid/GridItem';
import Button from 'components/CustomButtons/Button';


import ToolForm from 'components/Tool/ToolForm';
import ToolInput from 'components/Tool/ToolInput';
import ToolSwitch from 'components/Tool/ToolSwitch';

const FormData = [
  {
    id: "name",
    label: "Recipient",
    placeholder: "Account that receives the stake",
  },
  {
    id: "owner",
    label: "Stake Owner",
    placeholder: "Account that controls the stake",
  },
  {
    id: "cpu",
    label: "CPU Stake (in EOS)",
    placeholder: "How much EOS to stake",
  },
  {
    id: "net",
    label: "Net Stake (in EOS)",
    placeholder: "How much EOS to stake",
  }
];

const switchData = {
  id: "transfer",
  label: "Transfer",
  placeholder: "Tranfer Off: owner retains staking control and voting rights. Transfer On: New account gains staking control and voting rights.",
  md: 12,
}

const FormObject = props => {
  const { values, touched, errors, handleChange, handleBlur, handleSubmit } = props;
  const formProps = {
    handleSubmit: handleSubmit,
    submitColor: "rose",
    submitText: "Delegate",
  }
  return (
    <ToolForm {...formProps}>
      {FormData.map(form => {
        return (<ToolInput key={form.id} {...form} {...props}/>)
      })}
      <ToolSwitch {...switchData}{...props} />

    </ToolForm>
  );
};

export default FormObject;
