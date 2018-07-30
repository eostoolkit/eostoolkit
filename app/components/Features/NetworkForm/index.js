/**
 *
 * AirgrabForm
 *
 */

import React from 'react';
// import styled from 'styled-components';

// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles';

// @material-ui/icons
import Settings from '@material-ui/icons/Settings';

// core components
import GridContainer from 'components/Grid/GridContainer';
import GridItem from 'components/Grid/GridItem';
import Card from 'components/Card/Card';
import CardHeader from 'components/Card/CardHeader';
import CardIcon from 'components/Card/CardIcon';
import CardBody from 'components/Card/CardBody';

import regularFormsStyle from 'assets/jss/regularFormsStyle';
import NetworkTable from './networks';

const NetworkForm = props => {
  const { classes, networks, active, selectNetwork } = props;
  const tableProps = { networks, active, selectNetwork };
  return (
    <GridContainer>
      <GridItem xs={12} sm={12} lg={12}>
        <Card>
          <CardHeader color="warning" icon>
            <CardIcon color="warning">
              <Settings />
            </CardIcon>
            <h4 className={classes.cardIconTitle}>Select a network</h4>
          </CardHeader>
          <CardBody>
            <h6>
              Get your testnet or endpoint added to this list by submitting a pull request to{' '}
              <a href="https://github.com/eostoolkit/eos-networks" target="new">
                GitHub
              </a>
            </h6>
            <h6>You may have to manually add this network to Scatter due to a Scatter bug</h6>
            <NetworkTable {...tableProps} />
          </CardBody>
        </Card>
      </GridItem>
    </GridContainer>
  );
};

export default withStyles(regularFormsStyle)(NetworkForm);
