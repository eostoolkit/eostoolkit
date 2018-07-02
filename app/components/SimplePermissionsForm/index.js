/**
 *
 * SimplePermissionsForm
 *
 */

import React from 'react';
import { Formik } from 'formik';
import { FormattedMessage, injectIntl } from 'react-intl';
import * as Yup from 'yup';
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

import regularFormsStyle from 'assets/jss/regularFormsStyle';
import messages from './messages';

const FormObject = props => {
  const { values, touched, errors, handleChange, handleBlur, handleSubmit, intl } = props;
  return (
    <form>
      <GridContainer>
        <GridItem xs={12} sm={12} md={12}>
          <CustomInput
            labelText={intl.formatMessage(messages.ownerName)}
            id="owner"
            error={errors.owner}
            touched={touched.owner}
            formControlProps={{
              fullWidth: true,
            }}
            inputProps={{
              type: 'text',
              placeholder: intl.formatMessage(messages.ownerText),
              value: values.owner,
              onChange: handleChange,
              onBlur: handleBlur,
            }}
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={12}>
          <CustomInput
            labelText={intl.formatMessage(messages.activePermission)}
            id="activeKey"
            error={errors.activeKey}
            touched={touched.activeKey}
            formControlProps={{
              fullWidth: true,
            }}
            inputProps={{
              type: 'text',
              placeholder: intl.formatMessage(messages.permissionText),
              value: values.activeKey,
              onChange: handleChange,
              onBlur: handleBlur,
            }}
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={12}>
          <CustomInput
            labelText={intl.formatMessage(messages.ownerPermission)}
            id="ownerKey"
            error={errors.ownerKey}
            touched={touched.ownerKey}
            formControlProps={{
              fullWidth: true,
            }}
            inputProps={{
              type: 'text',
              placeholder: intl.formatMessage(messages.permissionText),
              value: values.ownerKey,
              onChange: handleChange,
              onBlur: handleBlur,
            }}
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={4}>
          <Button onClick={handleSubmit} color="rose">
            <FormattedMessage {...messages.update} />
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

const SimplePermissionsForm = props => {
  const { classes, handleSubmit, eosAccount, intl } = props;
  const validationSchema = Yup.object().shape({
    owner: Yup.string().required(intl.formatMessage(messages.validateRequired)),
    activeKey: Yup.string(),
    ownerKey: Yup.string(),
  });
  return (
    <GridContainer>
      <GridItem xs={12} sm={12} lg={8}>
        <Card>
          <CardHeader color="warning" icon>
            <CardIcon color="warning">
              <PersonAdd />
            </CardIcon>
            <h4 className={classes.cardIconTitle}>
              <FormattedMessage {...messages.header} />
            </h4>
          </CardHeader>
          <CardBody>
            <Formik
              initialValues={{
                owner: eosAccount,
                activeKey: '',
                ownerKey: '',
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
          <CardHeader color="danger" icon>
            <CardIcon color="danger">
              <HelpOutline />
            </CardIcon>
            <h4 className={classes.cardIconTitle}>
              <FormattedMessage {...messages.warningHeader} />
            </h4>
          </CardHeader>
          <CardBody>
            <h5>
              <FormattedMessage {...messages.warning1} />
            </h5>
            <h5>
              <FormattedMessage {...messages.warning9} />
            </h5>
            <p>
              <FormattedMessage {...messages.warning2} />
            </p>
            <p>
              <FormattedMessage {...messages.warning3} />
            </p>
            <p>
              <FormattedMessage {...messages.warning4} />
            </p>
            <p>
              <FormattedMessage {...messages.warning5} />
            </p>
            <p>
              <FormattedMessage {...messages.warning6} />
            </p>
            <p>
              <FormattedMessage {...messages.warning7} />
            </p>
            <p>
              <FormattedMessage {...messages.warning8} />
            </p>
          </CardBody>
        </Card>
      </GridItem>
    </GridContainer>
  );
};

export default withStyles(regularFormsStyle)(injectIntl(SimplePermissionsForm));
