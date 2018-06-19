/**
*
* TransferForm
*
*/

import React from 'react';
import { compose } from 'redux';
// import styled from 'styled-components';

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import Switch from '@material-ui/core/Switch';

// @material-ui/icons
import Person from "@material-ui/icons/Person";

// core components

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

let Account = props => {
  const { classes, account } = props
  return (

      <GridItem xs={12} sm={12} lg={6} key={account.account_name}>
        <Card>
          <CardHeader color="rose" icon>
            <CardIcon color="rose">
              <Person />
            </CardIcon>
            <h4 className={classes.cardIconTitle}>{account.account_name}</h4>
          </CardHeader>
          <CardBody>
            <pre>{JSON.stringify(account,null,2)}</pre>
          </CardBody>
        </Card>
      </GridItem>
  )
}


export default withStyles(regularFormsStyle)(Account)
