/**
 *
 * DelegateForm
 *
 */

import React from 'react';
import { Formik } from 'formik';
import { FormattedMessage, injectIntl } from 'react-intl';
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
import messages from './messages';

const FormObject = props => {
  const { values, touched, errors, handleChange, handleBlur, handleSubmit, classes, intl } = props;
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
        <GridItem xs={12} sm={12} md={6}>
          <CustomInput
            labelText={intl.formatMessage(messages.netStake)}
            id="net"
            error={errors.net}
            touched={touched.net}
            formControlProps={{
              fullWidth: true,
            }}
            inputProps={{
              type: 'text',
              placeholder: intl.formatMessage(messages.netText),
              value: values.net,
              onChange: handleChange,
              onBlur: handleBlur,
            }}
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={6}>
          <CustomInput
            labelText={intl.formatMessage(messages.cpuStake)}
            id="cpu"
            error={errors.cpu}
            touched={touched.cpu}
            formControlProps={{
              fullWidth: true,
            }}
            inputProps={{
              type: 'text',
              placeholder: intl.formatMessage(messages.cpuText),
              value: values.cpu,
              onChange: handleChange,
              onBlur: handleBlur,
            }}
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={6}>
          <Tooltip
            id="tooltip-right"
            title={intl.formatMessage(messages.transferDesc)}
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
              label={intl.formatMessage(messages.transfer)}
            />
          </Tooltip>
        </GridItem>
        <GridItem xs={12} sm={12} md={6} />
        <GridItem xs={12} sm={12} md={4}>
          <Button onClick={handleSubmit} color="rose">
            <FormattedMessage {...messages.delegate} />
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

const DelegateForm = props => {
  const { classes, handleSubmit, eosAccount, intl } = props;
  const validationSchema = Yup.object().shape({
    owner: Yup.string().required(intl.formatMessage(messages.validateRequired)),
    name: Yup.string().required(intl.formatMessage(messages.validateRequired)),
    net: Yup.number()
      .typeError(intl.formatMessage(messages.validateNumber))
      .required(intl.formatMessage(messages.validateRequired))
      .positive(intl.formatMessage(messages.validatePositive)),
    cpu: Yup.number()
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
              <Redo />
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
                net: '0',
                cpu: '0',
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

export default withStyles(regularFormsStyle)(injectIntl(DelegateForm));
