import React from 'react';
// import styled from 'styled-components';
 // @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles';
 // @material-ui/icons
import Error from '@material-ui/icons/Error';

 const MobileDetectedAlertStyle = {
   mobileAlert: {
     backgroundColor: '#dae7ff',
     padding: '15px',
     color: 'rgb(125, 125, 125)',
     borderRadius: '4px',
   },
 };

 const MobileAlert = props => {
  const { classes } = props;
  return (
    <div className={classes.mobileAlert}>
      <Error /> Please use desktop to access this section
    </div>
  );
};
 export default withStyles(MobileDetectedAlertStyle)(MobileAlert);
