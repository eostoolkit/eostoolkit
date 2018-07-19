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
import CloudDownload from '@material-ui/icons/CloudDownload';
import HelpOutline from '@material-ui/icons/HelpOutline';

// core components
import GridContainer from 'components/Grid/GridContainer';
import GridItem from 'components/Grid/GridItem';
import Card from 'components/Card/Card';
import CardHeader from 'components/Card/CardHeader';
import CardIcon from 'components/Card/CardIcon';
import CardBody from 'components/Card/CardBody';

import regularFormsStyle from 'assets/jss/regularFormsStyle';
import AirgrabTable from './tokens';

const AirgrabForm = props => {
  const { classes, handleSubmit } = props;
  return (
    <GridContainer>
      <GridItem xs={12} sm={12} lg={8}>
        <Card>
          <CardHeader color="warning" icon>
            <CardIcon color="warning">
              <CloudDownload />
            </CardIcon>
            <h4 className={classes.cardIconTitle}>Airgrab your Tokens!</h4>
          </CardHeader>
          <CardBody>
            <h6>Note: Airgrabbing tokens consumes your personal RAM.</h6>
            <h6>You cannot recover this RAM until the token has dropped.</h6>
            <p>
              By executing this action you are agreeing to the EOS constitution and this actions associated ricardian
              contract.
            </p>
            <AirgrabTable handleSubmit={handleSubmit} />
            <p>
              Have an Airgrab you want here? Email us: <a href="mailto:contact@genereos.io">contact@genereos.io</a>
            </p>
          </CardBody>
        </Card>
      </GridItem>
      <GridItem xs={12} sm={12} lg={4}>
        <Card>
          <CardHeader color="info" icon>
            <CardIcon color="info">
              <HelpOutline />
            </CardIcon>
            <h4 className={classes.cardIconTitle}>POORMAN TOKEN</h4>
          </CardHeader>
          <CardBody>
            <h5>The POORMANTOKEN is an EOS token that includes signups and burning to make airdrops cheaper</h5>
            <p>The intention is to allow EOS accounts to Airgrab the token (i.e. opt-in or signup)</p>
            <p>You can participate in this test by using this Airgrab form.</p>
            <p>The July 11 drop was successful! More will be announced later, keep registering so you can catch up!</p>
            <p>There may be future drops to test different airdrop and signup criteria</p>
            <p>
              To read more about this token contract check out the{' '}
              <a href="https://github.com/generEOS/poorman.token" target="new">
                poorman.token Github
              </a>
            </p>
          </CardBody>
        </Card>
      </GridItem>
    </GridContainer>
  );
};

export default withStyles(regularFormsStyle)(AirgrabForm);
