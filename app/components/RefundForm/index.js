/**
 *
 * RefundForm
 *
 */
import React from 'react';
import { Formik } from 'formik';
import { FormattedMessage, injectIntl } from 'react-intl';
// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles';

// @material-ui/icons
import Cached from '@material-ui/icons/Cached';
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
  const { touched, errors, handleChange, handleBlur, handleSubmit, values, intl } = props;
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
        <GridItem xs={12} sm={12} md={4}>
          <Button onClick={handleSubmit} color="rose">
            <FormattedMessage {...messages.refund} />
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

const RefundForm = props => {
  const { classes, handleSubmit, eosAccount, intl } = props;
  return (
    <GridContainer>
      <GridItem xs={12} sm={12} lg={8}>
        <Card>
          <CardHeader color="warning" icon>
            <CardIcon color="warning">
              <Cached />
            </CardIcon>
            <h4 className={classes.cardIconTitle}>
              <FormattedMessage {...messages.header} />
            </h4>
          </CardHeader>
          <CardBody>
            <Formik
              initialValues={{
                owner: eosAccount,
              }}
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
              The intent of the {'{ refund }'} action is to return previously unstaked tokens to an account after
              <br />
              the unstaking period has elapsed.
              <br />
              <br />
              As an authorized party I {'{ signer }'} wish to have the unstaked tokens of {'{ owner }'} returned.
            </p>
          </CardBody>
        </Card>
      </GridItem>
    </GridContainer>
  );
};

export default withStyles(regularFormsStyle)(injectIntl(RefundForm));
