/**
 *
 * UndelegateForm
 *
 */

import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
// import styled from 'styled-components';

// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles';

// @material-ui/icons
import Undo from '@material-ui/icons/Undo';
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
            labelText="Stake Holder"
            id="name"
            error={errors.name}
            touched={touched.name}
            formControlProps={{
              fullWidth: true,
            }}
            inputProps={{
              type: 'text',
              placeholder: 'Who currently holds the stake',
              value: values.name,
              onChange: handleChange,
              onBlur: handleBlur,
            }}
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={6}>
          <CustomInput
            labelText="Stake Owner"
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
            labelText="Net Unstake (in EOS)"
            id="net"
            error={errors.net}
            touched={touched.net}
            formControlProps={{
              fullWidth: true,
            }}
            inputProps={{
              type: 'text',
              placeholder: 'How much EOS to unstake',
              value: values.net,
              onChange: handleChange,
              onBlur: handleBlur,
            }}
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={6}>
          <CustomInput
            labelText="CPU Unstake (in EOS)"
            id="cpu"
            error={errors.cpu}
            touched={touched.cpu}
            formControlProps={{
              fullWidth: true,
            }}
            inputProps={{
              type: 'text',
              placeholder: 'How much EOS to unstake',
              value: values.cpu,
              onChange: handleChange,
              onBlur: handleBlur,
            }}
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={4}>
          <Button onClick={handleSubmit} color="rose">
            Undelegate
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
  net: Yup.number()
    .required('NET Stake is required')
    .positive('You must unstake a positive quantity'),
  cpu: Yup.number()
    .required('CPU Stake is required')
    .positive('You must unstake a positive quantity'),
});

const UndelegateForm = props => {
  const { classes, handleSubmit, eosAccount } = props;
  return (
    <GridContainer>
      <GridItem xs={12} sm={12} lg={8}>
        <Card>
          <CardHeader color="warning" icon>
            <CardIcon color="warning">
              <Undo />
            </CardIcon>
            <h4 className={classes.cardIconTitle}>
              Undelegate Bandwidth <small>- Unstake</small>
            </h4>
          </CardHeader>
          <CardBody>
            <h5>Unstaking takes three days. Unstaking lowers your vote weight immediately</h5>
            <Formik
              initialValues={{
                creator: '',
                name: '',
                net: '0',
                cpu: '0',
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
              The intent of the {'{ undelegatebw }'} action is to unstake tokens from CPU and/or bandwidth.
              <br />
              <br />
              As an authorized party I {'{ signer }'} wish to unstake {'{ unstake_cpu_quantity }'} from CPU and{' '}
              {'{ unstake_net_quantity }'} from bandwidth from the tokens owned by {'{ from }'} previously delegated for
              the use of delegatee {'{ to }'}.
              <br />
              <br />
              If I as signer am not the beneficial owner of these tokens I stipulate I have proof that I’ve been
              authorized to take this action by their beneficial owner(s).
            </p>
          </CardBody>
        </Card>
      </GridItem>
    </GridContainer>
  );
};

export default withStyles(regularFormsStyle)(UndelegateForm);
