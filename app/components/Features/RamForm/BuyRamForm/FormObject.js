import React from 'react';

import withStyles from '@material-ui/core/styles/withStyles';
import Radio from '@material-ui/core/Radio';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import GridItem from 'components/Grid/GridItem';

import ToolForm from 'components/Tool/ToolForm';
import ToolInput from 'components/Tool/ToolInput';

import buyRamFormStyle from './buyRamFormStyle';
import { units } from './constants';

import messages from '../messages';
import commonMessages from '../../../messages';

const FormObject = props => {
  const { values, touched, errors, handleChange, handleBlur, handleSubmit, intl, ...toggleProps } = props;
  const {
    unit: { isEOS, handleByteUnitChange, handleEOSUnitChange },
    classes,
  } = toggleProps;

  const FormData = [
    {
      id: 'name',
      label: intl.formatMessage(commonMessages.formReceiverLabel),
      placeholder: intl.formatMessage(messages.buyRamFormReceiverPlaceholder),
    },
    {
      id: 'owner',
      label: intl.formatMessage(messages.buyRamFormPayerLabel),
      placeholder: intl.formatMessage(messages.buyRamFormPayerPlaceholder),
    },
  ];

  const eosInput = {
    id: 'eosQuantity',
    label: intl.formatMessage(messages.buyRamFormEOSInputLabel),
    placeholder: intl.formatMessage(messages.buyRamFormEOSInputPlaceholder),
  };

  const byteInput = {
    id: 'byteQuantity',
    label: intl.formatMessage(messages.buyRamFormBytesInputLabel),
    placeholder: intl.formatMessage(messages.buyRamFormEOSInputPlaceholder),
  };
  const formProps = {
    handleSubmit,
    submitColor: 'rose',
    submitText: intl.formatMessage(messages.buyRamFormSubmitText),
  };
  return (
    <ToolForm {...formProps}>
      {FormData.map(form => {
        return <ToolInput key={form.id} {...form} {...props} />;
      })}
      <GridItem className={classes.radioContainer} xs={12} sm={12} md={6}>
        <span className={classes.radioLabel}>Purchase unit:</span>
        <FormControlLabel
          control={<Radio checked={isEOS} color="primary" onChange={handleEOSUnitChange} />}
          label="EOS"
        />
        <FormControlLabel
          control={<Radio checked={!isEOS} color="primary" onChange={handleByteUnitChange} />}
          label="bytes"
        />
      </GridItem>
      {isEOS ? <ToolInput {...eosInput} {...props} /> : <ToolInput {...byteInput} {...props} />}
    </ToolForm>
  );
};

export default withStyles(buyRamFormStyle)(FormObject);
