/**
 *
 * TransferForm
 *
 */

import React from 'react';
import { FormattedMessage, injectIntl } from 'react-intl';
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
import messages from './messages';

const FormObject = props => {
  const { values, touched, errors, handleChange, handleBlur, handleSubmit, intl } = props;
  return (
    <form>
      <GridContainer>
        <GridItem xs={12} sm={12} md={6}>
          <CustomInput
            labelText={intl.formatMessage(messages.recepient)}
            id="name"
            error={errors.name}
            touched={touched.name}
            formControlProps={{
              fullWidth: true,
            }}
            inputProps={{
              type: 'text',
              placeholder: intl.formatMessage(messages.recepientText),
              value: values.name,
              onChange: handleChange,
              onBlur: handleBlur,
            }}
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={6}>
          <CustomInput
            labelText={intl.formatMessage(messages.sender)}
            id="owner"
            error={errors.owner}
            touched={touched.owner}
            formControlProps={{
              fullWidth: true,
            }}
            inputProps={{
              type: 'text',
              placeholder: intl.formatMessage(messages.senderText),
              value: values.owner,
              onChange: handleChange,
              onBlur: handleBlur,
            }}
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={6}>
          <CustomInput
            labelText={intl.formatMessage(messages.quantity)}
            id="quantity"
            error={errors.quantity}
            touched={touched.quantity}
            formControlProps={{
              fullWidth: true,
            }}
            inputProps={{
              type: 'text',
              placeholder: intl.formatMessage(messages.quantityText),
              value: values.quantity,
              onChange: handleChange,
              onBlur: handleBlur,
            }}
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={6}>
          <CustomInput
            labelText={intl.formatMessage(messages.memo)}
            id="memo"
            error={errors.memo}
            touched={touched.memo}
            formControlProps={{
              fullWidth: true,
            }}
            inputProps={{
              type: 'text',
              placeholder: intl.formatMessage(messages.memoText),
              value: values.memo,
              onChange: handleChange,
              onBlur: handleBlur,
            }}
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={4}>
          <Button onClick={handleSubmit} color="rose">
            <FormattedMessage {...messages.send} />
          </Button>
        </GridItem>
        <GridItem xs={12} sm={12} md={8}>
          <p>
            <FormattedMessage {...messages.disclaimer} />
          </p>
        </GridItem>
      </GridContainer>
    </form>
  );
};

const TransferForm = props => {
  const { classes, handleSubmit, eosAccount, intl } = props;
  const validationSchema = Yup.object().shape({
    owner: Yup.string().required(intl.formatMessage(messages.validateRequired)),
    name: Yup.string().required(intl.formatMessage(messages.validateRequired)),
    memo: Yup.string(),
    quantity: Yup.number()
      .typeError(intl.formatMessage(messages.validateNumber))
      .required(intl.formatMessage(messages.validateRequired))
      .positive(intl.formatMessage(messages.validatePositive)),
  });
  return (
    <GridContainer>
      <GridItem xs={12} sm={12} lg={8}>
        <Card>
          <CardHeader color="warning" icon>
            <CardIcon color="warning">
              <Payment />
            </CardIcon>
            <h4 className={classes.cardIconTitle}>
              <FormattedMessage {...messages.header} />
            </h4>
          </CardHeader>
          <CardBody>
            <Formik
              initialValues={{
                owner: eosAccount,
                name: '',
                quantity: '0',
                memo: '',
              }}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
              render={formikProps => <FormObject {...formikProps} classes={classes} intl={intl} />}
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

export default withStyles(regularFormsStyle)(injectIntl(TransferForm));
