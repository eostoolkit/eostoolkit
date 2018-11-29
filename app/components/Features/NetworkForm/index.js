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

import { FormattedMessage, FormattedHTMLMessage } from 'react-intl';
import messages from './messages';

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
            <h4 className={classes.cardIconTitle}><FormattedMessage { ...messages.selectNetwork } /></h4>
          </CardHeader>
          <CardBody>
            <h6>
              <FormattedHTMLMessage { ...messages.addNetworkToGit } />
            </h6>
            <NetworkTable {...tableProps} />
          </CardBody>
        </Card>
      </GridItem>
    </GridContainer>
  );
};

export default withStyles(regularFormsStyle)(NetworkForm);
