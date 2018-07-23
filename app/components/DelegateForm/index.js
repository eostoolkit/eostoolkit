/**
 *
 * DelegateForm
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
import Redo from '@material-ui/icons/Redo';
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
    <form onSubmit={handleSubmit}>
      <GridContainer>
        <GridItem xs={12} sm={12} md={6}>
          <CustomInput
            labelText="Recipient"
            id="name"
            error={errors.name}
            touched={touched.name}
            formControlProps={{
              fullWidth: true,
            }}
            inputProps={{
              type: 'text',
              placeholder: 'Who will receive the stake',
              value: values.name,
              onChange: handleChange,
              onBlur: handleBlur,
            }}
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={6}>
          <CustomInput
            labelText="Stake Owner"
            id="owner"
            error={errors.owner}
            touched={touched.owner}
            formControlProps={{
              fullWidth: true,
            }}
            inputProps={{
              type: 'text',
              placeholder: 'Account that controls the stake',
              value: values.owner,
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
              fullWidth: true,
            }}
            inputProps={{
              type: 'text',
              placeholder: 'How much EOS to stake',
              value: values.cpu,
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
              fullWidth: true,
            }}
            inputProps={{
              type: 'text',
              placeholder: 'How much EOS to stake',
              value: values.net,
              onChange: handleChange,
              onBlur: handleBlur,
            }}
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={6}>
          <Tooltip
            id="tooltip-right"
            title="Tranfer Off: owner retains staking control and voting rights. Transfer On: New account gains staking control and voting rights."
            placement="right"
            classes={{ tooltip: classes.formTooltip }}>
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
                    bar: classes.switchBar,
                  }}
                />
              }
              classes={{
                label: classes.label,
              }}
              label="Transfer"
            />
          </Tooltip>
        </GridItem>
        <GridItem xs={12} sm={12} md={6} />
        <GridItem xs={12} sm={12} md={4}>
          <Button type="submit" color="rose">
            Delegate
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
  name: Yup.string().required('Account name is required'),
  net: Yup.number()
    .required('NET Stake is required')
    .positive('You must stake a positive quantity'),
  cpu: Yup.number()
    .required('CPU Stake is required')
    .positive('You must stake a positive quantity'),
});

const DelegateForm = props => {
  const { classes, handleSubmit, eosAccount } = props;
  return (
    <GridContainer>
      <GridItem xs={12} sm={12} lg={8}>
        <Card>
          <CardHeader color="warning" icon>
            <CardIcon color="warning">
              <Redo />
            </CardIcon>
            <h4 className={classes.cardIconTitle}>
              Delegate Bandwidth <small>- Stake</small>
            </h4>
          </CardHeader>
          <CardBody>
            <Formik
              initialValues={{
                owner: eosAccount,
                name: '',
                net: '0',
                cpu: '0',
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
            <p>
              The intent of the {'{ delegatebw }'} action is to stake tokens for bandwidth and/or CPU and optionally
              transfer ownership.
              <br />
              <br />
              As an authorized party I {'{ signer }'} wish to stake {'{ stake_cpu_quantity }'} for CPU and{' '}
              {'{ stake_net_quantity }'} for bandwidth from the liquid tokens of {'{ from }'} for the use of delegatee{' '}
              {'{ to }'}.
              <br />
              <br />
              {'{if transfer }'}
              <br />
              It is {'{ transfer }'} that I wish these tokens to become immediately owned by the delegatee.
              <br />
              {'{/if}'}
              <br />
              <br />
              As signer I stipulate that, if I am not the beneficial owner of these tokens, I have proof that I’ve been
              authorized to take this action by their beneficial owner(s).
            </p>
          </CardBody>
        </Card>
      </GridItem>
    </GridContainer>
  );
};

export default withStyles(regularFormsStyle)(DelegateForm);
