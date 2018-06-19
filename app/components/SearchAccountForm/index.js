/**
*
* SearchAccountForm
*
*/

import React from 'react';
import { compose } from 'redux';
import { Formik } from 'formik';
import * as Yup from 'yup';
// import styled from 'styled-components';

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import Switch from '@material-ui/core/Switch';
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Tooltip from '@material-ui/core/Tooltip';

// @material-ui/icons
import Search from "@material-ui/icons/Search";
import AccountBalance from "@material-ui/icons/AccountBalance";

// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import CustomInput from "components/CustomInput/CustomInput.jsx";
import Button from "components/CustomButtons/Button.jsx";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardText from "components/Card/CardText.jsx";
import CardIcon from "components/Card/CardIcon.jsx";
import CardBody from "components/Card/CardBody.jsx";
import Quote from "components/Typography/Quote.jsx";

import { FormattedMessage } from 'react-intl';
import messages from './messages';

import regularFormsStyle from "assets/jss/regularFormsStyle";
import switchStyle from "assets/jss/customCheckboxRadioSwitch.jsx";
import Account from './account.js'
import PubicKey from './publicKey.js'

let SearchAccountForm = props => {
  const { classes, handleAccountName, handlePublicKey } = props
  return (
    <GridContainer>
      <GridItem xs={12} sm={12} lg={6}>
        <Card>
          <CardHeader color="warning" icon>
            <CardIcon color="warning">
              <Search />
            </CardIcon>
            <h4 className={classes.cardIconTitle}>Search Account</h4>
          </CardHeader>
          <CardBody>
            <Formik
                initialValues={{
                  name:'',
                }}
                onSubmit={handleAccountName}
                render={formikProps =>
                   <Account {...formikProps} classes={classes}/>
                }
            />
          </CardBody>
        </Card>
      </GridItem>
      <GridItem xs={12} sm={12} lg={6}>
        <Card>
          <CardHeader color="warning" icon>
            <CardIcon color="warning">
              <Search />
            </CardIcon>
            <h4 className={classes.cardIconTitle}>Search Public Key</h4>
          </CardHeader>
          <CardBody>
            <Formik
                initialValues={{
                  publicKey:'',
                }}
                onSubmit={handlePublicKey}
                render={formikProps =>
                   <PubicKey {...formikProps} classes={classes}/>
                }
            />
          </CardBody>
        </Card>
      </GridItem>
    </GridContainer>
  )
}


export default withStyles(regularFormsStyle)(SearchAccountForm)
