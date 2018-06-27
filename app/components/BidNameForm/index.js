/**
 *
 * BidNameForm
 *
 */

import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
// import styled from 'styled-components';

// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles';

// @material-ui/icons
import Gavel from '@material-ui/icons/Gavel';
import AccountBalance from '@material-ui/icons/AccountBalance';
import HelpOutline from '@material-ui/icons/HelpOutline';
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
  const { values, touched, errors, handleChange, handleBlur, handleSubmit } = props;
  return (
    <form>
      <GridContainer>
        <GridItem xs={12} sm={12} md={6}>
          <CustomInput
            labelText="Premium Name"
            id="name"
            error={errors.name}
            touched={touched.name}
            formControlProps={{
              fullWidth: true,
            }}
            inputProps={{
              type: 'text',
              placeholder: 'Name to bid for',
              value: values.name,
              onChange: handleChange,
              onBlur: handleBlur,
            }}
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={6}>
          <CustomInput
            labelText="Bidder"
            id="owner"
            error={errors.owner}
            touched={touched.owner}
            formControlProps={{
              fullWidth: true,
            }}
            inputProps={{
              type: 'text',
              placeholder: 'Account that bids for the name',
              value: values.owner,
              onChange: handleChange,
              onBlur: handleBlur,
            }}
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={6}>
          <CustomInput
            labelText="Bid (in EOS)"
            id="bid"
            error={errors.bid}
            touched={touched.bid}
            formControlProps={{
              fullWidth: true,
            }}
            inputProps={{
              type: 'text',
              placeholder: 'Must be 10% greater than last bid',
              value: values.bid,
              onChange: handleChange,
              onBlur: handleBlur,
            }}
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={6}>
          <p>The bid must be 10% greater than the previous bid.</p>
        </GridItem>
        <GridItem xs={12} sm={12} md={6}>
          <Button onClick={handleSubmit} color="rose">
            Submit Bid
          </Button>
          <a href="https://eospark.com/MainNet/bidaccount" target="new">
            <Button color="info">Get Bid Prices</Button>
          </a>
        </GridItem>
        <GridItem xs={12} sm={12} md={6}>
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
  owner: Yup.string().required('Bidder name is required'),
  name: Yup.string().required('Premium name is required'),
  bid: Yup.number()
    .required('Bid quantity is required')
    .positive('Bid must be a positive quantity'),
});

const BidNameForm = props => {
  const { classes, handleSubmit, eosAccount } = props;
  return (
    <GridContainer>
      <GridItem xs={12} sm={12} lg={8}>
        <Card>
          <CardHeader color="warning" icon>
            <CardIcon color="warning">
              <Gavel />
            </CardIcon>
            <h4 className={classes.cardIconTitle}>Bid for Premium Name</h4>
          </CardHeader>
          <CardBody>
            <Formik
              initialValues={{
                owner: eosAccount,
                name: '',
                bid: '',
              }}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
              render={formikProps => <FormObject {...formikProps} classes={classes} />}
            />
          </CardBody>
        </Card>
      </GridItem>
      <GridItem xs={12} sm={12} lg={4}>
        <Card>
          <CardHeader color="info" icon>
            <CardIcon color="info">
              <HelpOutline />
            </CardIcon>
            <h4 className={classes.cardIconTitle}>Auction Details</h4>
          </CardHeader>
          <CardBody>
            <h5>
              The first name should be awarded on:<br /> Wednesday, July 4, 2018 2:44:52 PM UTC
            </h5>
            <p>Only one Premium Name is awarded per day.</p>
            <p>The name with the highest bid is the one awarded.</p>
            <p>Each bid must be 10% greater than the last bid.</p>
            <p>Your bid is only returned if you are out-bid.</p>
            <p>Bidding for names consumes your account&apos;s RAM.</p>
          </CardBody>
        </Card>
        <Card>
          <CardHeader color="rose" icon>
            <CardIcon color="rose">
              <AccountBalance />
            </CardIcon>
            <h4 className={classes.cardIconTitle}>Ricardian</h4>
          </CardHeader>
          <CardBody>
            <p>
              The {'{ bidname }'} action places a bid on a premium account name, in the knowledge that the high bid will
              purchase the name.
              <br />
              <br />
              As an authorized party I {'{ signer }'} wish to bid on behalf of {'{ bidder }'} the amount of {'{ bid }'}{' '}
              toward purchase of the account name {'{ newname }'}.
            </p>
          </CardBody>
        </Card>
      </GridItem>
    </GridContainer>
  );
};

export default withStyles(regularFormsStyle)(BidNameForm);
