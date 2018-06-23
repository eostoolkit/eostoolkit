/**
 *
 * CreateAccountForm
 *
 */

import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
// import styled from 'styled-components';

// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles';

// @material-ui/icons
import AddCircle from '@material-ui/icons/AddCircle';
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

import regularFormsStyle from 'assets/jss/regularFormsStyle';

const FormObject = props => {
  const { values, touched, errors, handleChange, handleBlur, handleSubmit, eosAccount } = props;
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
        <GridItem xs={12} sm={12} md={6}>
          <CustomInput
            labelText="Ram Purchase (in bytes)"
            id="ram"
            error={errors.ram}
            touched={touched.ram}
            formControlProps={{
              fullWidth: true,
            }}
            inputProps={{
              type: 'text',
              placeholder: 'How many bytes to purchase',
              value: values.ram,
              onChange: handleChange,
              onBlur: handleBlur,
            }}
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={4}>
          <Button onClick={handleSubmit} color="rose">
            Purchase
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
  name: Yup.string().required('Account name is required'),
  ram: Yup.number()
    .required('RAM purchase is required')
    .positive('RAM must be a positive quantity')
    .integer('RAM cannot be fractional'),
});

const CreateAccountForm = props => {
  const { classes, handleSubmit, eosAccount } = props;
  return (
    <GridContainer>
      <GridItem xs={12} sm={12} lg={8}>
        <Card>
          <CardHeader color="warning" icon>
            <CardIcon color="warning">
              <AddCircle />
            </CardIcon>
            <h4 className={classes.cardIconTitle}> Buy ram bytes </h4>
          </CardHeader>
          <CardBody>
            <Formik
              initialValues={{
                creator: '',
                name: '',
                ram: '8192',
              }}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
              eosAccount={eosAccount}
              render={formikProps => <FormObject {...formikProps} eosAccount={eosAccount} classes={classes} />}
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
            <h4 className={classes.cardIconTitle}> Ricardian </h4>
          </CardHeader>
          <CardBody>
            <p>
              This action will attempt to reserve about {'{bytes}'}
              bytes of RAM on behalf of {'{receiver}'}. <br />
              <br /> {'{buyer}'}
              authorizes this contract to transfer sufficient EOS tokens to buy the RAM based upon the current price as
              determined by the market maker algorithm. <br />
              <br /> {'{buyer}'}
              accepts that a 0.5 % fee will be charged on the EOS spent and that the actual RAM received may be slightly
              less than requested due to the approximations necessary to enable this service. {'{buyer}'} accepts that a
              0.5 % fee will be charged if and when they sell the RAM received. {'{buyer}'}
              accepts that rounding errors resulting from limits of computational precision may result in less RAM being
              allocated. {'{buyer}'}
              acknowledges that the supply of RAM may be increased at any time up to the limits of off - the - shelf
              computer equipment and that this may result in RAM selling for less than purchase price. {'{buyer}'}
              acknowledges that the price of RAM may increase or decrease over time according to supply and demand.
              {'{buyer}'}
              acknowledges that RAM is non - transferable. {'{buyer}'}
              acknowledges RAM currently in use by their account cannot be sold until it is freed and that freeing RAM
              may be subject to terms of other contracts.
            </p>
          </CardBody>
        </Card>
      </GridItem>
    </GridContainer>
  );
};

export default withStyles(regularFormsStyle)(CreateAccountForm);
