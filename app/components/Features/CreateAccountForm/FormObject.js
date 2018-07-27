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
    label: "New Account Name",
    placeholder: "12 characters, a-z, 1-5",
  },
  {
    id: "owner",
    label: "Creator",
    placeholder: "Account that creates the new account",
  },
  {
    id: "ownerKey",
    label: "Owner Public Key",
    placeholder: "Enter public key",
  },
  {
    id: "activeKey",
    label: "Active Public Key",
    placeholder: "Enter public key",
  },
  {
    id: "cpu",
    label: "CPU Stake (in EOS)",
    placeholder: "Required to process transactions",
  },
  {
    id: "net",
    label: "Net Stake (in EOS)",
    placeholder: "Required to use network",
  },
  {
    id: "ram",
    label: "Ram Purchase (in bytes)",
    placeholder: "Required to store account",
  }
];

const switchData = {
  id: "transfer",
  label: "Transfer",
  placeholder: "Tranfer Off: owner retains staking control and voting rights. Transfer On: New account gains staking control and voting rights.",
}

const FormObject = props => {
  const { values, touched, errors, handleChange, handleBlur, handleSubmit } = props;
  const formProps = {
    handleSubmit: handleSubmit,
    submitColor: "rose",
    submitText: "Create",
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
