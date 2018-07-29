/**
 *
 * SetProxyForm
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
import SupervisorAccount from '@material-ui/icons/SupervisorAccount';
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
            labelText="Proxy Account Name"
            id="name"
            error={errors.name}
            touched={touched.name}
            formControlProps={{
              fullWidth: true,
            }}
            inputProps={{
              type: 'text',
              placeholder: '12 characters, a-z, 1-5',
              value: values.name,
              onChange: handleChange,
              onBlur: handleBlur,
            }}
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={6}>
          <CustomInput
            labelText="Proxied Account Name"
            id="owner"
            error={errors.owner}
            touched={touched.owner}
            formControlProps={{
              fullWidth: true,
            }}
            inputProps={{
              type: 'text',
              placeholder: 'Account that will be proxied',
              value: values.owner,
              onChange: handleChange,
              onBlur: handleBlur,
            }}
          />
        </GridItem>

        <GridItem xs={12} sm={12} md={4}>
          <Button type="submit" color="rose">
            Create
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
  owner: Yup.string().required('Proxied name is required'),
  name: Yup.string().required('Account name is required'),
});

const SetProxyForm = props => {
  const { classes, handleSubmit, eosAccount } = props;
  return (
    <GridContainer>
      <GridItem xs={12} sm={12} lg={8}>
        <Card>
          <CardHeader color="warning" icon>
            <CardIcon color="warning">
              <SupervisorAccount />
            </CardIcon>
            <h4 className={classes.cardIconTitle}>
              Set Proxy <small>- They will vote on your behalf</small>
            </h4>
          </CardHeader>
          <CardBody>
            {isMobile ? (
              <MobileDetectedAlert />
            ) : (
              <Formik
                initialValues={{
                  owner: eosAccount,
                  name: '',
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
              The intent of the {'{ voteproducer }'} action is to cast a valid vote for up to 30 BP candidates.
              <br />
              <br />
              As an authorized party I {'{ signer }'} wish to vote on behalf of {'{ voter }'} in favor of the block
              producer candidates {'{ producers }'} with a voting weight equal to all tokens currently owned by{' '}
              {'{ voter }'} and staked for CPU or bandwidth.
              <br />
              <br />
              If I am not the beneficial owner of these shares I stipulate I have proof that I’ve been authorized to
              vote these shares by their beneficial owner(s).
              <br />
              <br />
              I stipulate I have not and will not accept anything of value in exchange for these votes, on penalty of
              confiscation of these tokens, and other penalties.
              <br />
              <br />
              I acknowledge that using any system of automatic voting, re-voting, or vote refreshing, or allowing such a
              system to be used on my behalf or on behalf of another, is forbidden and doing so violates this contract.
            </p>
          </CardBody>
        </Card>
      </GridItem>
    </GridContainer>
  );
};

export default withStyles(regularFormsStyle)(SetProxyForm);
