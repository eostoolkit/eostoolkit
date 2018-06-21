/**
 *
 * TransferForm
 *
 */

import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
// import styled from 'styled-components';

// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles';

// @material-ui/icons
import Payment from '@material-ui/icons/Payment';
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
            labelText="Recepient"
            id="name"
            error={errors.name}
            touched={touched.name}
            formControlProps={{
              fullWidth: true,
            }}
            inputProps={{
              type: 'text',
              placeholder: 'The account that receives the EOS',
              value: values.name,
              onChange: handleChange,
              onBlur: handleBlur,
            }}
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={6}>
          <CustomInput
            labelText="Sender"
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
            labelText="Quantity (in EOS)"
            id="quantity"
            error={errors.quantity}
            touched={touched.quantity}
            formControlProps={{
              fullWidth: true,
            }}
            inputProps={{
              type: 'text',
              placeholder: 'How much EOS to send',
              value: values.quantity,
              onChange: handleChange,
              onBlur: handleBlur,
            }}
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={6}>
          <CustomInput
            labelText="Memo"
            id="memo"
            error={errors.memo}
            touched={touched.memo}
            formControlProps={{
              fullWidth: true,
            }}
            inputProps={{
              type: 'text',
              placeholder: 'A memo to attach to transfer',
              value: values.memo,
              onChange: handleChange,
              onBlur: handleBlur,
            }}
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={4}>
          <Button onClick={handleSubmit} color="rose">
            Send
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
  memo: Yup.string(),
  quantity: Yup.number()
    .required('Quantity is required')
    .positive('You must send a positive quantity'),
});

const TransferForm = props => {
  const { classes, handleSubmit, eosAccount } = props;
  return (
    <GridContainer>
      <GridItem xs={12} sm={12} lg={8}>
        <Card>
          <CardHeader color="warning" icon>
            <CardIcon color="warning">
              <Payment />
            </CardIcon>
            <h4 className={classes.cardIconTitle}>Transfer</h4>
          </CardHeader>
          <CardBody>
            <Formik
              initialValues={{
                creator: '',
                name: '',
                quantity: '0',
                memo: '',
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
              I, {'{from}'}, certify the following to be true to the best of my knowledge:
              <br />
              <br />
              1. I certify that {'{quantity}'} is not the proceeds of fraudulent or violent activities.<br />
              2. I certify that, to the best of my knowledge, {'{to}'} is not supporting initiation of violence against
              others.<br />
              3. I have disclosed any contractual terms & conditions with respect to {'{quantity}'} to {'{to}'}.
              <br />
              <br />
              I understand that funds transfers are not reversible after the {'{transaction.delay}'} seconds or other
              delay as configured by {'{from}'}&apos;s permissions.
              <br />
              <br />
              If this action fails to be irreversibly confirmed after receiving goods or services from &apos;{
                '{to}'
              }&apos;, I agree to either return the goods or services or resend {'{quantity}'} in a timely manner.
            </p>
          </CardBody>
        </Card>
      </GridItem>
    </GridContainer>
  );
};

export default withStyles(regularFormsStyle)(TransferForm);
