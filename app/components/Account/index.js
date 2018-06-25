/**
 *
 * TransferForm
 *
 */

import React from 'react';

// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles';

// @material-ui/icons
import Person from '@material-ui/icons/Person';

// core components

import GridItem from 'components/Grid/GridItem';
import Card from 'components/Card/Card';
import CardHeader from 'components/Card/CardHeader';
import CardIcon from 'components/Card/CardIcon';
import CardBody from 'components/Card/CardBody';

import regularFormsStyle from 'assets/jss/regularFormsStyle';

const Account = props => {
  const { classes, account } = props;
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
          <pre>{JSON.stringify(account, null, 2)}</pre>
        </CardBody>
      </Card>
    </GridItem>
  );
};

export default withStyles(regularFormsStyle)(Account);
