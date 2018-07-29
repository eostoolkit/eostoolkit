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
import Error from '@material-ui/icons/Error';

// core components
import MobileDetectedAlertStyle from './styles/MobileDetectedAlertStyle';

const AirgrabForm = props => {
  const { classes } = props;
  return (
    <div className={classes.mobileAlert}>
      <Error /> Please use desktop to access this section
    </div>
  );
};

export default withStyles(MobileDetectedAlertStyle)(AirgrabForm);
