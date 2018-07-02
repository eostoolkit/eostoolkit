/**
 *
 * CreateAccountForm
 *
 */

import React from 'react';
import { FormattedMessage, injectIntl } from 'react-intl';
import { Formik } from 'formik';
import * as Yup from 'yup';
// import styled from 'styled-components';

// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Tooltip from '@material-ui/core/Tooltip';

// @material-ui/icons
import PersonAdd from '@material-ui/icons/PersonAdd';
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
            labelText={intl.formatMessage(messages.accountName)}
            id="name"
            error={errors.name}
            touched={touched.name}
            formControlProps={{
              fullWidth: true,
            }}
            inputProps={{
              type: 'text',
              placeholder: intl.formatMessage(messages.accountText),
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
        <GridItem xs={12} sm={12} md={6}>
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
          <CustomInput
            labelText={intl.formatMessage(messages.ramBuyBytes)}
            id="ram"
            error={errors.ram}
            touched={touched.ram}
            formControlProps={{
              fullWidth: true,
            }}
            inputProps={{
              type: 'text',
              placeholder: intl.formatMessage(messages.ramBuyText),
              value: values.ram,
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

        <GridItem xs={12} sm={12} md={4}>
          <Button onClick={handleSubmit} color="rose">
            <FormattedMessage {...messages.create} />
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

const CreateAccountForm = props => {
  const { classes, handleSubmit, eosAccount, intl } = props;
  const validationSchema = Yup.object().shape({
    owner: Yup.string().required(intl.formatMessage(messages.validateRequired)),
    name: Yup.string()
      .required(intl.formatMessage(messages.validateRequired))
      .matches(/([a-z1-5]){12,}/, {
        excludeEmptyString: true,
        message: intl.formatMessage(messages.validateInvalid),
      }),
    ownerKey: Yup.string().required(intl.formatMessage(messages.validateRequired)),
    activeKey: Yup.string().required(intl.formatMessage(messages.validateRequired)),
    net: Yup.number()
      .typeError(intl.formatMessage(messages.validateNumber))
      .required(intl.formatMessage(messages.validateRequired))
      .positive(intl.formatMessage(messages.validatePositive)),
    cpu: Yup.number()
      .typeError(intl.formatMessage(messages.validateNumber))
      .required(intl.formatMessage(messages.validateRequired))
      .positive(intl.formatMessage(messages.validatePositive)),
    ram: Yup.number()
      .typeError(intl.formatMessage(messages.validateNumber))
      .required(intl.formatMessage(messages.validateRequired))
      .positive(intl.formatMessage(messages.validatePositive))
      .integer(intl.formatMessage(messages.validateInteger)),
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
                name: '',
                ownerKey: '',
                activeKey: '',
                net: '0.1',
                cpu: '0.1',
                ram: '8192',
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
              The <i>newaccount</i> action creates a new account.
              <br />
              <br />
              As an authorized party I <i>signer</i> wish to exercise the authority of <i>owner</i> to create a new
              account on this system named <i>name</i> such that the new account&apos;s owner public key shall be{' '}
              <i>owner key</i> and the active public key shall be <i>active key</i>.
            </p>
          </CardBody>
        </Card>
      </GridItem>
    </GridContainer>
  );
};
// (withStyles(regularFormsStyle)(

export default withStyles(regularFormsStyle)(injectIntl(CreateAccountForm));
