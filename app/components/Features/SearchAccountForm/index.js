/**
 *
 * SearchAccountForm
 *
 */

import React from 'react';
import { Formik } from 'formik';
// import styled from 'styled-components';

// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles';

// @material-ui/icons
import Search from '@material-ui/icons/Search';

// core components
import GridContainer from 'components/Grid/GridContainer';
import GridItem from 'components/Grid/GridItem';
import Card from 'components/Card/Card';
import CardHeader from 'components/Card/CardHeader';
import CardIcon from 'components/Card/CardIcon';
import CardBody from 'components/Card/CardBody';

import regularFormsStyle from 'assets/jss/regularFormsStyle';
import Account from './account';
import PubicKey from './publicKey';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

const SearchAccountForm = props => {
  const {
    classes,
    handleAccountName,
    handlePublicKey,
    match: {
      params: { name },
    },
  } = props;
  return (
    <GridContainer>
      <GridItem xs={12} sm={12} lg={6}>
        <Card>
          <CardHeader color="warning" icon>
            <CardIcon color="warning">
              <Search />
            </CardIcon>
            <h4 className={classes.cardIconTitle}>
              <FormattedMessage {...messages.accountFormIndexSearchAccountHeader}/>
            </h4>
          </CardHeader>
          <CardBody>
            <Formik
              initialValues={{
                name: name || '',
              }}
              onSubmit={handleAccountName}
              render={formikProps => <Account {...formikProps} classes={classes} />}
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
            <h4 className={classes.cardIconTitle}>
              <FormattedMessage {...messages.accountFormIndexSearchAccountHeader}/>
            </h4>
          </CardHeader>
          <CardBody>
            <Formik
              initialValues={{
                publicKey: '',
              }}
              onSubmit={handlePublicKey}
              render={formikProps => <PubicKey {...formikProps} classes={classes} />}
            />
          </CardBody>
        </Card>
      </GridItem>
    </GridContainer>
  );
};

export default withStyles(regularFormsStyle)(SearchAccountForm);
