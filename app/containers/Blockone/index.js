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

// @material-ui/icons
import Favorite from '@material-ui/icons/Favorite';

// core components
import GridContainer from 'components/Grid/GridContainer';
import GridItem from 'components/Grid/GridItem';
import Card from 'components/Card/Card';
import CardBody from 'components/Card/CardBody';
import CardHeader from 'components/Card/CardHeader';
import CardIcon from 'components/Card/CardIcon';

import userProfileStyles from './comingSoon';

function Blockone(props) {
  const { classes } = props;
  return (
    <div>
      <GridContainer>
        <GridItem xs={12} sm={12} md={12}>
          <Card>
            <CardHeader color="rose" icon>
              <CardIcon color="rose">
                <Favorite />
              </CardIcon>
              <h4 className={classes.cardIconTitle}>
                Help Support Us
              </h4>
            </CardHeader>
            <CardBody>
<h3>Dear GenerEOS and eostoolkit.io supporters,</h3>
            <h5>Block One recently announced that that they will be voting for Block Producers that share the core values necessary to maximize the integrity and potential of the EOS public blockchain network.</h5>

<h5>They have provided an email for BP&apos;s and token holders to campaign for the Block Producers they believe in.</h5>

<h5>We would love if you could rally behind us showing your support by sending a passionate email to Block One explaining why they should vote for GenerEOS.</h5>

<h5>Send your email to - <a href="mailto:bp@eos.io?Subject=I%20Support%20GenerEOS">bp@eos.io</a></h5>

<h5>This support would mean the world to us and help us keep creating great tools and contributions for the community.</h5>

<h5><strong>&hearts;,</strong><br/>
Team GenerEOS</h5>

            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>
    </div>
  );
}

export default withStyles(userProfileStyles)(Blockone);
