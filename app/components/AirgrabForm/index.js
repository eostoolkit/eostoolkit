/**
 *
 * AirgrabForm
 *
 */

import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
// import styled from 'styled-components';

// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles';

// @material-ui/icons
import CloudDownload from '@material-ui/icons/CloudDownload';
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
        <GridItem xs={12} sm={12} md={12}>
          <CustomInput
            labelText="Airgrabber"
            id="owner"
            error={errors.owner}
            touched={touched.owner}
            formControlProps={{
              fullWidth: true,
            }}
            inputProps={{
              type: 'text',
              placeholder: 'Account that is signing up for the aidrop',
              value: values.owner,
              onChange: handleChange,
              onBlur: handleBlur,
            }}
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={4}>
          <Button onClick={handleSubmit} color="rose">
            Airgrab!
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
  owner: Yup.string().required('Account name is required'),
});

const AirgrabForm = props => {
  const { classes, handleSubmit, eosAccount } = props;
  return (
    <GridContainer>
      <GridItem xs={12} sm={12} lg={8}>
        <Card>
          <CardHeader color="warning" icon>
            <CardIcon color="warning">
              <CloudDownload />
            </CardIcon>
            <h4 className={classes.cardIconTitle}>Airgrab your Poorman Tokens!</h4>
          </CardHeader>
          <CardBody>
            <Formik
              initialValues={{
                owner: eosAccount,
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
            <h4 className={classes.cardIconTitle}>POORMAN TOKEN AIRGRAB</h4>
          </CardHeader>
          <CardBody>
            <h5>The POORMANTOKEN is an EOS token that includes signups and burning to make airdrops cheaper</h5>
            <p>The intention is to allow EOS accounts to Airgrab the token (i.e. opt-in or signup)</p>
            <p>You can participate in this test by using this Airgrab form.</p>
            <p>POOR tokens will be dropped on a 1:1 POOR:EOS basis on Wednesday, July 11</p>
            <p>There may be future drops to test different airdrop and signup criteria</p>
            <p>
              To read more about this token contract check out the{' '}
              <a href="https://github.com/generEOS/poorman.token" target="new">
                poorman.token Github
              </a>
            </p>
          </CardBody>
        </Card>
      </GridItem>
    </GridContainer>
  );
};

export default withStyles(regularFormsStyle)(AirgrabForm);
