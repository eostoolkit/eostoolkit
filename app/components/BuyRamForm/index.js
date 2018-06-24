/**
 *
 * BuyRamForm
 *
 */

import React from 'react';
import { compose } from 'recompose';
import { Formik } from 'formik';
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
    handleSubmit,
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
            value="eos"
            control={<Radio checked={isEOS} color="primary" onChange={handleEOSUnitChange} />}
            label="EOS"
          />
          <FormControlLabel
            value="bytes"
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
          <Button onClick={handleSubmit} color="rose">
            Purchase
          </Button>
        </GridItem>
      </GridContainer>
    </form>
  );
};

const validationSchema = Yup.object().shape({
  name: Yup.string().required('Account name is required'),
  quantity: Yup.number()
    .required('Quantity is required')
    .positive('You must pay a positive quantity'),
});

const BuyRamForm = props => {
  const { classes, handleSubmit, eosAccount, unit } = props;
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
            <Formik
              initialValues={{
                creator: '',
                name: '',
                eosQuantity: 1,
                byteQuantity: 8192,
              }}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
              eosAccount={eosAccount}
              render={formikProps => (
                <FormObject {...formikProps} eosAccount={eosAccount} classes={classes} unit={unit} />
              )}
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

const enhance = compose(withStyles(buyRamFormStyle, regularFormsStyle));

export default enhance(BuyRamForm);
