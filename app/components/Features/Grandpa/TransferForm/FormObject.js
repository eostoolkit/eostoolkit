import React from 'react';

import withStyles from '@material-ui/core/styles/withStyles';
import Radio from '@material-ui/core/Radio';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import GridItem from 'components/Grid/GridItem';

import ToolForm from 'components/Tool/ToolForm';
import ToolInput from 'components/Tool/ToolInput';

import buyRamFormStyle from './buyRamFormStyle';

const FormObject = props => {
  const { values, touched, errors, handleChange, handleBlur, handleSubmit, ...toggleProps } = props;
  const {
    unit: { token, handleToken },
    classes,
  } = toggleProps;

  const FormData = [
    {
      id: 'name',
      label: 'Recipient',
      placeholder: 'Account that receives the coins',
    },
    {
      id: 'quantity',
      label: 'Quantity',
      placeholder: 'Quantity of Tokens',
    },
    {
      id: 'memo',
      label: 'Memo',
      placeholder: 'Memo for the recipient',
      lg: 12,
    },
  ];
  const formProps = {
    handleSubmit,
    submitColor: 'rose',
    submitText: 'Transfer',
    noDisclaimer: true,
  };
  return (
    <ToolForm {...formProps}>
      {FormData.map(form => {
        return <ToolInput key={form.id} {...form} {...props} />;
      })}
      <GridItem className={classes.radioContainer} xs={12} sm={12} md={6}>
        <FormControlLabel
          control={<Radio checked={token === 'BTC'} color="primary" onChange={() => handleToken('BTC')} />}
          label="BTC"
        />
        <FormControlLabel
          control={<Radio checked={token === 'ETH'} color="primary" onChange={() => handleToken('ETH')} />}
          label="ETH"
        />
        <FormControlLabel
          control={<Radio checked={token === 'DOGE'} color="primary" onChange={() => handleToken('DOGE')} />}
          label="DOGE"
        />
      </GridItem>
    </ToolForm>
  );
};

export default withStyles(buyRamFormStyle)(FormObject);
