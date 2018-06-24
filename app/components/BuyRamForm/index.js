/**
 *
 * BuyRamForm
 *
 */

import React from 'react';
import { compose } from 'recompose';
import { withFormik } from 'formik';
import * as Yup from 'yup';
// import styled from 'styled-components';

// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles';

// @material-ui/icons
import AddCircle from '@material-ui/icons/AddCircle';
import AccountBalance from '@material-ui/icons/AccountBalance';
import Radio from '@material-ui/core/Radio';
import FormControlLabel from '@material-ui/core/FormControlLabel';

// core components
import GridContainer from 'components/Grid/GridContainer';
import GridItem from 'components/Grid/GridItem';
import CustomInput from 'components/CustomInput/CustomInput';
import Button from 'components/CustomButtons/Button';
import Card from 'components/Card/Card';
import CardHeader from 'components/Card/CardHeader';
import CardIcon from 'components/Card/CardIcon';
import CardBody from 'components/Card/CardBody';

import regularFormsStyle from 'assets/jss/regularFormsStyle';

import BuyBytes from './Ricardian/BuyBytes';
import BuyEOS from './Ricardian/BuyEOS';
import { units } from './constants';

import buyRamFormStyle from './buyRamFormStyle';

const FormObject = props => {
  const {
    classes,
    eosAccount,
    errors,
    handleBlur,
    handleChange,
    submitForm,
    touched,
    unit: { isEOS, handleByteUnitChange, handleEOSUnitChange },
    values,
  } = props;

  const defaultUnitProps = {
    formControlProps: {
      fullWidth: true,
    },
    inputProps: {
      type: 'text',
      placeholder: 'Required to process transactions',
      onChange: handleChange,
      onBlur: handleBlur,
    },
  };
  return (
    <form>
      <GridContainer>
        <GridItem xs={12} sm={12} md={6}>
          <CustomInput
            labelText="Receiver Account Name"
            id="name"
            error={errors.name}
            touched={touched.name}
            formControlProps={{
              fullWidth: true,
            }}
            inputProps={{
              type: 'text',
              placeholder: 'The account that receives the RAM',
              value: values.name,
              onChange: handleChange,
              onBlur: handleBlur,
            }}
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={6}>
          <CustomInput
            labelText="Payer"
            id="creator"
            error={errors.creator}
            touched={touched.creator}
            formControlProps={{
              fullWidth: true,
            }}
            inputProps={{
              type: 'text',
              placeholder: 'Scatter account',
              value: eosAccount,
              onChange: handleChange,
              onBlur: handleBlur,
              disabled: true,
            }}
          />
        </GridItem>
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
        <GridItem xs={12} sm={12} md={6}>
          {isEOS ? (
            <CustomInput
              {...defaultUnitProps}
              labelText={`Ram purchase (in ${units.EOS})`}
              id="eosQuantity"
              error={errors.eosQuantity}
              touched={touched.eosQuantity}
              inputProps={{
                ...defaultUnitProps.inputProps,
                value: values.eosQuantity,
              }}
            />
          ) : (
            <CustomInput
              {...defaultUnitProps}
              labelText={`Ram purchase (in ${units.BYTE})`}
              id="byteQuantity"
              error={errors.byteQuantity}
              touched={touched.byteQuantity}
              inputProps={{
                ...defaultUnitProps.inputProps,
                value: values.byteQuantity,
              }}
            />
          )}
        </GridItem>
        <GridItem xs={12}>
          <p>
            By executing this action you are agreeing to the EOS constitution and this actions associated ricardian
            contract.
          </p>
        </GridItem>
        <GridItem xs={12}>
          <Button color="rose" onClick={submitForm}>
            Purchase
          </Button>
        </GridItem>
      </GridContainer>
    </form>
  );
};

const validationSchema = ({ unit: { isEOS } }) => {
  const eosQuantity = Yup.number().positive('You must pay a positive quantity');
  const byteQuantity = Yup.number()
    .positive('RAM must be a positive quantity')
    .integer('RAM cannot be fractional');

  return Yup.object().shape({
    name: Yup.string().required('Account name is required'),
    byteQuantity: isEOS ? byteQuantity : byteQuantity.required('RAM purchase is required'),
    eosQuantity: !isEOS ? eosQuantity : eosQuantity.required('RAM purchase is required'),
  });
};

const BuyRamForm = props => {
  const { classes, eosAccount, handleSubmit, unit, ...formikProps } = props;
  const { errors, handleBlur, handleChange, submitForm, touched, values } = formikProps;
  return (
    <GridContainer>
      <GridItem xs={12} sm={12} lg={8}>
        <Card>
          <CardHeader color="warning" icon>
            <CardIcon color="warning">
              <AddCircle />
            </CardIcon>
            <h4 className={classes.cardIconTitle}>Buy ram</h4>
          </CardHeader>
          <CardBody>
            <FormObject
              classes={classes}
              eosAccount={eosAccount}
              errors={errors}
              handleBlur={handleBlur}
              handleChange={handleChange}
              submitForm={submitForm}
              touched={touched}
              unit={unit}
              values={values}
            />
          </CardBody>
        </Card>
      </GridItem>
      <GridItem xs={12} sm={12} lg={4}>
        <Card>
          <CardHeader color="rose" icon>
            <CardIcon color="rose">
              <AccountBalance />
            </CardIcon>
            <h4 className={classes.cardIconTitle}>Ricardian</h4>
          </CardHeader>
          <CardBody>{unit.isEOS ? <BuyEOS /> : <BuyBytes />}</CardBody>
        </Card>
      </GridItem>
    </GridContainer>
  );
};

const enhance = compose(
  withStyles(buyRamFormStyle, regularFormsStyle),
  withFormik({
    handleSubmit: (values, { props, setSubmitting }) => {
      const {
        handleSubmit,
        unit: { isEOS },
      } = props;
      setSubmitting(false);
      handleSubmit({ ...values, isEOS });
    },
    mapPropsToValues: props => ({
      byteQuantity: 8192,
      creator: '',
      eosQuantity: 1,
      isEOS: props.unit.isEOS,
      name: '',
    }),
    validationSchema,
  })
);

export default enhance(BuyRamForm);
