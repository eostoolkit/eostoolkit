/**
*
* CreateAccountForm
*
*/

import React from 'react';
import { compose } from 'redux';
import { Formik } from 'formik';
import * as Yup from 'yup';
// import styled from 'styled-components';

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import Switch from '@material-ui/core/Switch';
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Tooltip from '@material-ui/core/Tooltip';

// @material-ui/icons
import PersonAdd from "@material-ui/icons/PersonAdd";
import AccountBalance from "@material-ui/icons/AccountBalance";

// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import CustomInput from "components/CustomInput/CustomInput.jsx";
import Button from "components/CustomButtons/Button.jsx";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardText from "components/Card/CardText.jsx";
import CardIcon from "components/Card/CardIcon.jsx";
import CardBody from "components/Card/CardBody.jsx";
import Quote from "components/Typography/Quote.jsx";

import { FormattedMessage } from 'react-intl';
import messages from './messages';

import regularFormsStyle from "assets/jss/regularFormsStyle";
import switchStyle from "assets/jss/customCheckboxRadioSwitch.jsx";

const FormObject = props => {
  const {
    values,
    touched,
    errors,
    isSubmitting,
    handleChange,
    handleBlur,
    handleSubmit,
    handleReset,
    dirty,
    eosAccount,
    classes,
  } = props;
  return (
    <form>
      <GridContainer>
        <GridItem xs={12} sm={12} md={6}>
          <CustomInput
            labelText="New Account Name"
            id="name"
            error={errors.name}
            touched={touched.name}
            formControlProps={{
              fullWidth: true
            }}
            inputProps={{
              type: "text",
              placeholder:"12 characters, a-z, 1-5",
              value: values.name,
              onChange: handleChange,
              onBlur: handleBlur,
            }}
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={6}>
          <CustomInput
            labelText="Creator"
            id="creator"
            error={errors.creator}
            touched={touched.creator}
            formControlProps={{
              fullWidth: true
            }}
            inputProps={{
              type: "text",
              placeholder:"Scatter account",
              value: eosAccount,
              onChange: handleChange,
              onBlur: handleBlur,
              disabled: true
            }}
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={6}>
          <CustomInput
            labelText="Owner Public Key"
            id="ownerKey"
            error={errors.ownerKey}
            touched={touched.ownerKey}
            formControlProps={{
              fullWidth: true
            }}
            inputProps={{
              type: "text",
              placeholder:"Enter public key",
              value: values.ownerKey,
              onChange: handleChange,
              onBlur: handleBlur,
            }}
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={6}>
          <CustomInput
            labelText="Active Public Key"
            id="activeKey"
            error={errors.activeKey}
            touched={touched.activeKey}
            formControlProps={{
              fullWidth: true
            }}
            inputProps={{
              type: "text",
              placeholder:"Enter public key",
              value: values.activeKey,
              onChange: handleChange,
              onBlur: handleBlur,
            }}
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={6}>
          <CustomInput
            labelText="Net Stake (in EOS)"
            id="net"
            error={errors.net}
            touched={touched.net}
            formControlProps={{
              fullWidth: true
            }}
            inputProps={{
              type: "text",
              placeholder:"Required to use network",
              value: values.net,
              onChange: handleChange,
              onBlur: handleBlur,
            }}
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={6}>
          <CustomInput
            labelText="CPU Stake (in EOS)"
            id="cpu"
            error={errors.cpu}
            touched={touched.cpu}
            formControlProps={{
              fullWidth: true
            }}
            inputProps={{
              type: "text",
              placeholder:"Required to process transactions",
              value: values.cpu,
              onChange: handleChange,
              onBlur: handleBlur,
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
              fullWidth: true
            }}
            inputProps={{
              type: "text",
              placeholder:"Required to store account",
              value: values.ram,
              onChange: handleChange,
              onBlur: handleBlur,
            }}
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={6}>
          <Tooltip
            id="tooltip-right"
            title="Tranfer Off: Creator retains staking control and voting rights. Transfer On: New account gains staking control and voting rights."
            placement="right"
            classes={{ tooltip: classes.formTooltip }}
          >
            <FormControlLabel
              control={
                <Switch
                  id="transfer"
                  checked={values.transfer}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.transfer ? 'true' : 'false'}
                  classes={{
                    switchBase: classes.switchBase,
                    checked: classes.switchChecked,
                    icon: classes.switchIcon,
                    iconChecked: classes.switchIconChecked,
                    bar: classes.switchBar
                  }}
                />
              }
              classes={{
                label: classes.label
              }}
              label="Transfer"
            />
          </Tooltip>
        </GridItem>

        <GridItem xs={12} sm={12} md={4}>
          <Button onClick={handleSubmit} color="rose">Create</Button>
        </GridItem>
        <GridItem xs={12} sm={12} md={8}>
          <p>By executing this action you are agreeing to the EOS constitution and this actions associated ricardian contract.</p>
        </GridItem>
      </GridContainer>
    </form>
  );
};

const validationSchema = Yup.object().shape({
  name: Yup.string()
  .required('Account name is required')
  .matches(/([a-z1-5]){12,}/, { excludeEmptyString: true, message: 'Invalid account name'}),
  ownerKey: Yup.string()
  .required('Owner key is required'),
  activeKey: Yup.string()
  .required('Active key is required'),
  net: Yup.number()
  .required('NET Stake is required')
  .positive('You must stake a positive quantity'),
  cpu: Yup.number()
  .required('CPU Stake is required')
  .positive('You must stake a positive quantity'),
  ram: Yup.number()
  .required('RAM purchase is required')
  .positive('RAM must be a positive quantity')
  .integer('RAM cannot be fractional'),
})

let CreateAccountForm = props => {
  const { classes, handleSubmit, eosAccount } = props
  return (
    <GridContainer>
      <GridItem xs={12} sm={12} lg={8}>
        <Card>
          <CardHeader color="warning" icon>
            <CardIcon color="warning">
              <PersonAdd />
            </CardIcon>
            <h4 className={classes.cardIconTitle}>Create Account</h4>
          </CardHeader>
          <CardBody>
            <Formik
                initialValues={{
                  creator:'',
                  name:'',
                  ownerKey:'',
                  activeKey:'',
                  net:'0.1',
                  cpu:'0.1',
                  ram:'8192'
                }}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
                eosAccount = {eosAccount}
                render={formikProps =>
                   <FormObject {...formikProps} eosAccount={eosAccount} classes={classes}/>
                }
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
            The <i>newaccount</i> action creates a new account.
            <br/><br/>
            As an authorized party I <i>signer</i> wish to
            exercise the authority of <i>creator</i> to create
            a new account on this system named <i>name</i> such
            that the new account's owner public key shall
            be <i>owner key</i> and the active public key shall
            be <i>active key</i>.
          </p>


          </CardBody>
        </Card>
      </GridItem>
    </GridContainer>
  )
}


export default withStyles(regularFormsStyle)(CreateAccountForm)
