/**
 *
 * TransferForm
 *
 */

import React from 'react';
import { compose, withState, withHandlers } from 'recompose';
// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles';

// @material-ui/icons
import Person from '@material-ui/icons/Person';

// core components

import GridContainer from 'components/Grid/GridContainer';
import GridItem from 'components/Grid/GridItem';
import Card from 'components/Card/Card';
import CardHeader from 'components/Card/CardHeader';
import CardIcon from 'components/Card/CardIcon';
import CardBody from 'components/Card/CardBody';

import regularFormsStyle from 'assets/jss/regularFormsStyle';

import ResourceTable from 'components/AccountTables/resources';
import BalancesTable from 'components/AccountTables/balances';

import { FormattedMessage } from 'react-intl';
import messages from './messages';
import generalMessages from '../messages';

const Account = props => {
  const { classes, account, showJson, toggleVisibility } = props;
  if (!account) {
    return (
      <GridItem xs={12} sm={12} lg={6}>
        <Card>
          <CardHeader color="rose" icon>
            <CardIcon color="rose">
              <Person />
            </CardIcon>
            <h4 className={classes.cardIconTitle}>
              <FormattedMessage {...generalMessages.invalidNotFoundText} />
            </h4>
          </CardHeader>
          <CardBody>
            <h5>
              <FormattedMessage {...messages.reviewSearchTermText} />
            </h5>
          </CardBody>
        </Card>
      </GridItem>
    );
  }
  return (
    <GridItem xs={12} sm={12} lg={6}>
      <Card>
        <CardHeader color="rose" icon>
          <CardIcon color="rose">
            <Person />
          </CardIcon>
          <h4 className={classes.cardIconTitle}>{account.account_name}</h4>
        </CardHeader>
        <CardBody>
          <GridContainer>
            <GridItem xs={12} md={12} lg={6}>
              <BalancesTable account={account} />
            </GridItem>
            <GridItem xs={12} md={12} lg={6}>
              <ResourceTable account={account} />
            </GridItem>
          </GridContainer>
          <a href="#" onClick={toggleVisibility}>
            {!showJson ? 'Show JSON' : 'Hide JSON'}
          </a>
          {showJson ? <pre>{JSON.stringify(account, null, 2)}</pre> : <pre />}
        </CardBody>
      </Card>
    </GridItem>
  );
};

export default compose(
  withState('showJson', 'toggleJson', false),
  withHandlers({
    toggleVisibility: ({ showJson, toggleJson }) => {
      return () => {
        return toggleJson(!showJson);
      };
    },
  }),
  withStyles(regularFormsStyle)
)(Account);
