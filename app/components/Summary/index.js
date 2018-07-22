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
import { makeSelectEosAccountData } from 'containers/Scatter/selectors';
import { makeSelectActiveNetwork } from 'containers/Remote/selectors';

// core components
import GridContainer from 'components/Grid/GridContainer';
import GridItem from 'components/Grid/GridItem';
import Card from 'components/Card/Card';
import CardBody from 'components/Card/CardBody';
import CardHeader from 'components/Card/CardHeader';

import ResourceTable from './resources';
import userProfileStyles from './comingSoon';

function Summary(props) {
  const { classes, eosAccountData, network } = props;
  if (eosAccountData) {
    return (
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={12}>
            <Card>
              <CardHeader icon>
                <h5 className={classes.cardIconTitle}>{eosAccountData.account_name}</h5>
              </CardHeader>
              <CardBody>
                <h6>
                  Connected to: [{network.network.name}] -- Chain ID: [{network.network.chainId}]
                </h6>
                <ResourceTable account={eosAccountData} />
              </CardBody>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    );
  }
  return '';
}

const mapStateToProps = createStructuredSelector({
  eosAccountData: makeSelectEosAccountData(),
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
)(Summary);
