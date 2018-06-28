/**
 *
 * ForumPostForm
 *
 */

import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
// import styled from 'styled-components';

// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles';

// @material-ui/icons
import PersonAdd from '@material-ui/icons/PersonAdd';
import HelpOutline from '@material-ui/icons/HelpOutline';

// core components
import GridContainer from 'components/Grid/GridContainer';
import GridItem from 'components/Grid/GridItem';
import CustomInput from 'components/CustomInput/CustomInput';
import Button from 'components/CustomButtons/Button';
import Card from 'components/Card/Card';
import CardHeader from 'components/Card/CardHeader';
import CardIcon from 'components/Card/CardIcon';
import CardBody from 'components/Card/CardBody';

import regularFormsStyle from 'assets/jss/regularFormsStyle';

const FormObject = props => {
  const { values, touched, errors, handleChange, handleBlur, handleSubmit } = props;
  return (
    <form>
      <GridContainer>
        <GridItem xs={12} sm={12} md={6}>
          <CustomInput
            labelText="Submitter"
            id="owner"
            error={errors.owner}
            touched={touched.owner}
            formControlProps={{
              fullWidth: true,
            }}
            inputProps={{
              type: 'text',
              placeholder: 'Account that submits the forum post',
              value: values.owner,
              onChange: handleChange,
              onBlur: handleBlur,
            }}
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={6}>
          <CustomInput
            labelText="Title"
            id="title"
            error={errors.title}
            touched={touched.title}
            formControlProps={{
              fullWidth: true,
            }}
            inputProps={{
              type: 'text',
              placeholder: 'Enter title for forum post',
              value: values.title,
              onChange: handleChange,
              onBlur: handleBlur,
            }}
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={12}>
          <CustomInput
            labelText="Content"
            id="content"
            error={errors.content}
            touched={touched.content}
            formControlProps={{
              fullWidth: true,
            }}
            inputProps={{
              type: 'text',
              placeholder: 'Enter forum post content',
              value: values.content,
              onChange: handleChange,
              onBlur: handleBlur,
            }}
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={4}>
          <Button onClick={handleSubmit} color="rose">
            Create
          </Button>
        </GridItem>
        <GridItem xs={12} sm={12} md={8}>
          <p>
            By executing this action you are agreeing to the EOS constitution and this actions associated ricardian
            contract.
          </p>
        </GridItem>
      </GridContainer>
    </form>
  );
};

const validationSchema = Yup.object().shape({
  owner: Yup.string().required('Submitter name is required'),
  title: Yup.string().required('Title is required'),
  content: Yup.string().required('Content is required'),
});

const ForumPostForm = props => {
  const { classes, handleSubmit, eosAccount } = props;
  return (
    <GridContainer>
      <GridItem xs={12} sm={12} lg={8}>
        <Card>
          <CardHeader color="warning" icon>
            <CardIcon color="warning">
              <PersonAdd />
            </CardIcon>
            <h4 className={classes.cardIconTitle}>Post to EOSIO Forum</h4>
          </CardHeader>
          <CardBody>
            <Formik
              initialValues={{
                owner: eosAccount,
                title: '',
                content: '',
              }}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
              render={formikProps => <FormObject {...formikProps} classes={classes} />}
            />
          </CardBody>
        </Card>
      </GridItem>
      <GridItem xs={12} sm={12} lg={4}>
        <Card>
          <CardHeader color="info" icon>
            <CardIcon color="info">
              <HelpOutline />
            </CardIcon>
            <h4 className={classes.cardIconTitle}>EOSIO FORUM TESTING</h4>
          </CardHeader>
          <CardBody>
            <h5>The EOSIO Forum Test is a prototype by EOS Canada</h5>
            <p>The intention is to provide a flexible framework for on-chain governance voting and communication.</p>
            <p>You can participate in this test by creating arbitrary forum posts to this smart contract.</p>
            <p>
              In the future this smart contract may be used to run a RAM-zero on-chain forum, proposition, and voting
              mechanism.
            </p>
            <p>
              To read more about this initiative check out the{' '}
              <a href="https://github.com/eoscanada/eosio.forum" target="new">
                eosio.forum Github
              </a>
            </p>
          </CardBody>
        </Card>
      </GridItem>
    </GridContainer>
  );
};

export default withStyles(regularFormsStyle)(ForumPostForm);
