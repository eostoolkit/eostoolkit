/**
 *
 * CreateProxyForm
 *
 */

import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
// import styled from 'styled-components';

// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Tooltip from '@material-ui/core/Tooltip';

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

import regularFormsStyle from 'assets/jss/regularFormsStyle';

const FormObject = props => {
  const { values, touched, errors, handleChange, handleBlur, handleSubmit, classes } = props;
  return (
    <form>
      <GridContainer>
        <GridItem xs={12} sm={12} md={8}>
          <CustomInput
            labelText="owner"
            id="owner"
            error={errors.owner}
            touched={touched.owner}
            formControlProps={{
              fullWidth: true,
            }}
            inputProps={{
              type: 'text',
              placeholder: 'Account that becomes proxy',
              value: values.owner,
              onChange: handleChange,
              onBlur: handleBlur,
            }}
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={4}>
          <Tooltip
            id="tooltip-right"
            title="Setting on: Become proxy. Setting off: No longer be a proxy."
            placement="right"
            classes={{ tooltip: classes.formTooltip }}>
            <FormControlLabel
              control={
                <Switch
                  id="isProxy"
                  checked={values.isProxy}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.isProxy ? 'true' : 'false'}
                  classes={{
                    switchBase: classes.switchBase,
                    checked: classes.switchChecked,
                    icon: classes.switchIcon,
                    iconChecked: classes.switchIconChecked,
                    bar: classes.switchBar,
                  }}
                />
              }
              classes={{
                label: classes.label,
              }}
              label="Proxy Setting"
            />
          </Tooltip>
        </GridItem>
        <GridItem xs={12} sm={12} md={4}>
          <Button onClick={handleSubmit} color="rose">
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

const validationSchema = Yup.object().shape({});

const CreateProxyForm = props => {
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
              Become Proxy <small>- You will vote on behalf of others</small>
            </h4>
          </CardHeader>
          <CardBody>
            <Formik
              initialValues={{
                owner: eosAccount,
                isProxy: false,
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
          <CardHeader color="rose" icon>
            <CardIcon color="rose">
              <AccountBalance />
            </CardIcon>
            <h4 className={classes.cardIconTitle}>Ricardian</h4>
          </CardHeader>
          <CardBody>
            <p>No contract for this action.</p>
          </CardBody>
        </Card>
      </GridItem>
    </GridContainer>
  );
};

export default withStyles(regularFormsStyle)(CreateProxyForm);
