/**
 *
 * SimplePermissionsForm
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
import PersonAdd from '@material-ui/icons/PersonAdd';
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
import MobileDetectedAlert from 'components/MobileDetectedAlert';

import regularFormsStyle from 'assets/jss/regularFormsStyle';

const FormObject = props => {
  const { values, touched, errors, handleChange, handleBlur, handleSubmit } = props;
  return (
    <form onSubmit={handleSubmit}>
      <GridContainer>
        <GridItem xs={12} sm={12} md={12}>
          <h5>This function can BREAK your account. Please be sure you understand what your doing.</h5>
          <CustomInput
            labelText="Change permission on"
            id="owner"
            error={errors.owner}
            touched={touched.owner}
            formControlProps={{
              fullWidth: true,
            }}
            inputProps={{
              type: 'text',
              placeholder: 'Account whose permissions will change',
              value: values.owner,
              onChange: handleChange,
              onBlur: handleBlur,
            }}
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={12}>
          <CustomInput
            labelText="Active Permision (Only complete if you want to change)"
            id="activeKey"
            error={errors.activeKey}
            touched={touched.activeKey}
            formControlProps={{
              fullWidth: true,
            }}
            inputProps={{
              type: 'text',
              placeholder: 'Public key or account name',
              value: values.activeKey,
              onChange: handleChange,
              onBlur: handleBlur,
            }}
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={12}>
          <CustomInput
            labelText="Owner Permision (Only complete if you want to change)"
            id="ownerKey"
            error={errors.ownerKey}
            touched={touched.ownerKey}
            formControlProps={{
              fullWidth: true,
            }}
            inputProps={{
              type: 'text',
              placeholder: 'Public key or account name',
              value: values.ownerKey,
              onChange: handleChange,
              onBlur: handleBlur,
            }}
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={4}>
          <Button type="submit" color="rose">
            Update
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
  owner: Yup.string().required('Owner name is required'),
  activeKey: Yup.string(),
  ownerKey: Yup.string(),
});

const SimplePermissionsForm = props => {
  const { classes, handleSubmit, eosAccount } = props;
  return (
    <GridContainer>
      <GridItem xs={12} sm={12} lg={8}>
        <Card>
          <CardHeader color="warning" icon>
            <CardIcon color="warning">
              <PersonAdd />
            </CardIcon>
            <h4 className={classes.cardIconTitle}>Change Permissions (Simple)</h4>
          </CardHeader>
          <CardBody>
            {isMobile ? (
              <MobileDetectedAlert />
            ) : (
              <Formik
                initialValues={{
                  owner: eosAccount,
                  activeKey: '',
                  ownerKey: '',
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
          <CardHeader color="danger" icon>
            <CardIcon color="danger">
              <HelpOutline />
            </CardIcon>
            <h4 className={classes.cardIconTitle}>Important</h4>
          </CardHeader>
          <CardBody>
            <h5>
              <strong>This action has serious consequences</strong>
            </h5>
            <h5>If you don{"'"}t control the permissions you assign - your account becomes IRRECOVERABLE</h5>
            <h5>
              If you assign an ACCOUNT instead of a KEY as a permission you risk breaking your account - be 100% SURE
            </h5>
            <p>You can change active or owner permission or both</p>
            <p>Leave blank any permission you DON{"'"}T want to change</p>
            <p>To change only active permission select youraccount@active for your Scatter identity</p>
            <p>To change any permission select youraccount@owner for your Scatter identity</p>
            <p>
              If you change your active permission you have to update your scatter identity to use this new key pair
            </p>
            <p>
              If you dont have the key pairs you assign to the active permission you will no longer be able send
              transactions
            </p>
          </CardBody>
        </Card>
      </GridItem>
    </GridContainer>
  );
};

export default withStyles(regularFormsStyle)(SimplePermissionsForm);
