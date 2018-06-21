/**
 *
 * ClaimRewardsForm
 *
 */

import React from 'react';
import { Formik } from 'formik';

// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles';

// @material-ui/icons
import { AccountBalance, AttachMoney } from '@material-ui/icons';

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
  const { touched, errors, handleChange, handleBlur, handleSubmit, eosAccount } = props;
  return (
    <form>
      <GridContainer>
        <GridItem xs={12} sm={12} md={6}>
          <CustomInput
            labelText="Owner"
            id="owner"
            error={errors.owner}
            touched={touched.owner}
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
        <GridItem xs={12} sm={12} md={4}>
          <Button onClick={handleSubmit} color="rose">
            Claim
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

const ClaimRewardsForm = props => {
  const { classes, handleSubmit, eosAccount } = props;
  return (
    <GridContainer>
      <GridItem xs={12} sm={12} lg={8}>
        <Card>
          <CardHeader color="warning" icon>
            <CardIcon color="warning">
              <AttachMoney />
            </CardIcon>
            <h4 className={classes.cardIconTitle}>Claim Rewards</h4>
          </CardHeader>
          <CardBody>
            <Formik
              initialValues={{
                owner: '',
              }}
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
              The {'{ claimrewards }'} action allows a block producer (active or standby) to claim the system rewards
              due them for producing blocks and receiving votes.
              <br />
              <br />
              As an authorized party I {'{ signer }'} wish to have the rewards earned by {'{ owner }'} deposited into
              the {'{ owner }'} account.
            </p>
          </CardBody>
        </Card>
      </GridItem>
    </GridContainer>
  );
};

export default withStyles(regularFormsStyle)(ClaimRewardsForm);
