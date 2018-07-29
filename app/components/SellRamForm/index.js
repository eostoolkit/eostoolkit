/**
 *
 * SellRamForm
 *
 */

import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { isMobile } from 'react-device-detect';
// import styled from 'styled-components';

// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles';

// @material-ui/icons
import RemoveCircle from '@material-ui/icons/RemoveCircle';
import AccountBalance from '@material-ui/icons/AccountBalance';

// core components
import GridContainer from 'components/Grid/GridContainer';
import GridItem from 'components/Grid/GridItem';
import CustomInput from 'components/CustomInput/CustomInput';
import Button from 'components/CustomButtons/Button';
import Card from 'components/Card/Card';
import CardHeader from 'components/Card/CardHeader';
import CardIcon from 'components/Card/CardIcon';
import CardBody from 'components/Card/CardBody';
import MobileDetectedAlert from 'components/MobileDetectedAlert';

import regularFormsStyle from 'assets/jss/regularFormsStyle';

const FormObject = props => {
  const { values, touched, errors, handleChange, handleBlur, handleSubmit } = props;
  return (
    <form onSubmit={handleSubmit}>
      <GridContainer>
        <GridItem xs={12} sm={12} md={6}>
          <CustomInput
            labelText="Seller"
            id="owner"
            error={errors.owner}
            touched={touched.owner}
            formControlProps={{
              fullWidth: true,
            }}
            inputProps={{
              type: 'text',
              placeholder: 'Account that sells the Ram',
              value: values.owner,
              onChange: handleChange,
              onBlur: handleBlur,
            }}
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={6}>
          <CustomInput
            labelText="Ram to Sell (in bytes)"
            id="ram"
            error={errors.ram}
            touched={touched.ram}
            formControlProps={{
              fullWidth: true,
            }}
            inputProps={{
              type: 'text',
              placeholder: 'How many bytes to sell',
              value: values.ram,
              onChange: handleChange,
              onBlur: handleBlur,
            }}
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={4}>
          <Button type="submit" color="rose">
            Sell
          </Button>
        </GridItem>
        <GridItem xs={12} sm={12} md={8}>
          <p>
            By executing this action you are agreeing to the EOS constitution and this actions associated ricardian
            contract.
          </p>
        </GridItem>
      </GridContainer>
    </form>
  );
};

const validationSchema = Yup.object().shape({
  owner: Yup.string().required('Buyer name is required'),
  ram: Yup.number()
    .required('RAM quantity is required')
    .positive('RAM must be a positive quantity')
    .integer('RAM cannot be fractional'),
});

const SellRamForm = props => {
  const { classes, handleSubmit, eosAccount } = props;
  return (
    <GridContainer>
      <GridItem xs={12} sm={12} lg={8}>
        <Card>
          <CardHeader color="warning" icon>
            <CardIcon color="warning">
              <RemoveCircle />
            </CardIcon>
            <h4 className={classes.cardIconTitle}>Sell ram bytes</h4>
          </CardHeader>
          <CardBody>
            {isMobile ? (
              <MobileDetectedAlert />
            ) : (
              <Formik
                initialValues={{
                  owner: eosAccount,
                  name: '',
                  ram: '8192',
                }}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
                render={formikProps => <FormObject {...formikProps} classes={classes} />}
              />
            )}
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
          <CardBody>
            <p>
              The {'{ sellram }'} action sells unused RAM for tokens.
              <br />
              <br />
              As an authorized party I {'{ signer }'} wish to sell {'{ bytes }'} of unused RAM from account{' '}
              {'{ account }'}.
            </p>
          </CardBody>
        </Card>
      </GridItem>
    </GridContainer>
  );
};

export default withStyles(regularFormsStyle)(SellRamForm);
