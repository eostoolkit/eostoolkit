/**
 *
 * BuyRamForm
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
import Radio from '@material-ui/core/Radio';
import FormGroup from '@material-ui/core/FormGroup';
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

const FormObject = props => {
  const { eosAccount, errors, handleBlur, handleChange, handleSubmit, touched, values } = props;
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
          {/* <FormLabel component="legend">Buy RAM in...</FormLabel> */}
          <FormGroup row>
            <FormControlLabel value="eos" control={<Radio color="primary" />} label="EOS" />
            <FormControlLabel value="bytes" control={<Radio color="primary" />} label="bytes" />
          </FormGroup>
        </GridItem>
        <GridItem xs={12} sm={12} md={6}>
          <CustomInput
            labelText="Ram purchase (in EOS)"
            id="quantity"
            error={errors.quantity}
            touched={touched.quantity}
            formControlProps={{
              fullWidth: true,
            }}
            inputProps={{
              type: 'text',
              placeholder: 'Required to process transactions',
              value: values.quantity,
              onChange: handleChange,
              onBlur: handleBlur,
            }}
          />
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
  const { classes, handleSubmit, eosAccount } = props;
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
                quantity: '1',
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
            <h4 className={classes.cardIconTitle}>Ricardian</h4>
          </CardHeader>
          <CardBody>
            <p>
              This action will attempt to reserve about {'{ quant }'} worth of RAM on behalf of {'{ receiver }'}.
              <br />
              <br />
              {'{ buyer }'} authorizes this contract to transfer {'{ quant }'} to buy RAM based upon the current price
              as determined by the market maker algorithm.
              <br />
              <br />
              {'{ buyer }'} accepts that a 0.5% fee will be charged on the amount spent and that the actual RAM received
              may be slightly less than expected due to the approximations necessary to enable this service.
              <br />
              <br />
              {'{ buyer }'} accepts that a 0.5% fee will be charged if and when they sell the RAM received.
              <br />
              <br />
              {'{ buyer }'} accepts that rounding errors resulting from limits of computational precision may result in
              less RAM being allocated.
              <br />
              <br />
              {'{ buyer }'} acknowledges that the supply of RAM may be increased at any time up to the limits of
              off-the-shelf computer equipment and that this may result in RAM selling for less than purchase price.
              <br />
              <br />
              {'{ buyer }'} acknowledges that the price of RAM may increase or decrease over time according to supply
              and demand.
              <br />
              <br />
              {'{ buyer }'} acknowledges that RAM is non-transferrable.
              <br />
              <br />
              {'{ buyer }'} acknowledges RAM currently in use by their account cannot be sold until it is freed and that
              freeing RAM may be subject to terms of other contracts.
            </p>
          </CardBody>
        </Card>
      </GridItem>
    </GridContainer>
  );
};

export default withStyles(regularFormsStyle)(BuyRamForm);
