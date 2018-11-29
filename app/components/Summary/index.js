/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';

// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import { makeSelectActiveNetwork, makeSelectAccount } from 'containers/NetworkClient/selectors';

import AccountCircle from '@material-ui/icons/AccountCircle';
import Announcement from '@material-ui/icons/Announcement';
import Warning from "components/Typography/Warning.jsx";
// core components
import GridContainer from 'components/Grid/GridContainer';
import GridItem from 'components/Grid/GridItem';
import Card from 'components/Card/Card';
import CardIcon from 'components/Card/CardIcon';
import CardBody from 'components/Card/CardBody';
import CardHeader from 'components/Card/CardHeader';

import ResourceTable from './resources';
import userProfileStyles from './comingSoon';

import { injectIntl, FormattedMessage } from 'react-intl';
import messages from './messages';

function Summary(props) {
  const { classes, account, network, intl } = props;
    return (
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={12}>
            <Card>
              <CardHeader icon>
                <CardIcon color="success">
                  <AccountCircle />
                </CardIcon>
                <h5 className={classes.cardIconTitle}>
                  {account ? (
                    `${account.account_name} [${network.network.name} via ${network.endpoint.name}]`
                  ) : (intl.formatMessage(messages.attachAccount))}

                </h5>
              </CardHeader>
              <CardBody>

                <ResourceTable account={account} />
                <Warning>
                  <h6><Announcement/> <FormattedMessage { ...messages.tokenDetailInfoText } /></h6>
                </Warning>
              </CardBody>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    );
}

const mapStateToProps = createStructuredSelector({
  account: makeSelectAccount(),
  network: makeSelectActiveNetwork(),
});

function mapDispatchToProps() {
  return {};
}

export default compose(
  withStyles(userProfileStyles),
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(injectIntl(Summary));
