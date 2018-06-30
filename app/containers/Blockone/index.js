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
import { FormattedMessage } from 'react-intl';

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

import messages from './messages';
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
                <FormattedMessage {...messages.header} />
              </h4>
            </CardHeader>
            <CardBody>
              <h3>
                <FormattedMessage {...messages.intro} />
              </h3>
              <h5>
                <FormattedMessage {...messages.line1} />
              </h5>

              <h5>
                <FormattedMessage {...messages.line2} />
              </h5>

              <h5>
                <FormattedMessage {...messages.line3} />
              </h5>

              <h5>
                <FormattedMessage {...messages.line4} />
                <a href="mailto:bp@eos.io?Subject=I%20Support%20GenerEOS">bp@eos.io</a>
              </h5>

              <h5>
                <FormattedMessage {...messages.line5} />
              </h5>

              <h5>
                <strong>&hearts;,</strong>
                <br />
                Team GenerEOS
              </h5>
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>
    </div>
  );
}

export default withStyles(userProfileStyles)(Blockone);
