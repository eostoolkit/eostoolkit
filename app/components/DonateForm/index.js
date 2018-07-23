/**
 *
 * TransferForm
 *
 */

import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
// import styled from 'styled-components';

// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles';

// @material-ui/icons
import Favorite from '@material-ui/icons/Favorite';
import CardGiftcard from '@material-ui/icons/CardGiftcard';

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
    <form onSubmit={handleSubmit}>
      <GridContainer>
        <GridItem xs={12} sm={12} md={12}>
          <h5>Dear EOSToolkit supporters,</h5>
          <p>
            The <strong>EOSToolkit</strong> was made out of love prior to the launch of the EOS mainnet thanks to long
            hours late into the night and a staunch belief in making EOS accessible to everyone.
            <br />
            <br />
            Thanks to your support and votes <strong>Team GenerEOS</strong> now receives block rewards and this helps
            fund further development of the eostoolkit and other EOS projects.
            <br />
            <br />
            However, the goal of GenerEOS is to give back to the community.
            <br />
            <br />
            By donating you will be supporting development of the <strong>EOSToolkit</strong> directly, while allowing
            GenerEOS to give even more back to those who need it most.
            <br />
            <br />
            We hope you love the <strong>EOSToolkit</strong> as much as I{"'"}ve loved making it.
            <br />
            <br />
            <strong>&hearts;,</strong>
            <br />
            Nathan Rempel, Team GenerEOS
          </p>
        </GridItem>
        <GridItem xs={12} sm={12} md={6}>
          <CustomInput
            labelText="Quantity (in EOS)"
            id="quantity"
            error={errors.quantity}
            touched={touched.quantity}
            formControlProps={{
              fullWidth: true,
            }}
            inputProps={{
              type: 'text',
              placeholder: 'How much EOS to donate',
              value: values.quantity,
              onChange: handleChange,
              onBlur: handleBlur,
            }}
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={6}>
          <CustomInput
            labelText="Memo"
            id="memo"
            error={errors.memo}
            touched={touched.memo}
            formControlProps={{
              fullWidth: true,
            }}
            inputProps={{
              type: 'text',
              placeholder: 'A note to send us',
              value: values.memo,
              onChange: handleChange,
              onBlur: handleBlur,
            }}
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={4}>
          <Button type="submit" color="rose">
            Donate
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
  memo: Yup.string(),
  quantity: Yup.number()
    .required('Quantity is required')
    .positive('You must send a positive quantity'),
});

const TransferForm = props => {
  const { classes, handleSubmit } = props;
  return (
    <GridContainer>
      <GridItem xs={12} sm={12} lg={6}>
        <Card>
          <CardHeader color="warning" icon>
            <CardIcon color="warning">
              <CardGiftcard />
            </CardIcon>
            <h4 className={classes.cardIconTitle}>Donate</h4>
          </CardHeader>
          <CardBody>
            <Formik
              initialValues={{
                quantity: '1',
                memo: '',
              }}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
              render={formikProps => <FormObject {...formikProps} classes={classes} />}
            />
          </CardBody>
        </Card>
      </GridItem>
      <GridItem xs={12} sm={12} lg={6}>
        <Card>
          <CardHeader color="rose" icon>
            <CardIcon color="rose">
              <Favorite />
            </CardIcon>
            <h4 className={classes.cardIconTitle}>Help Support Us</h4>
          </CardHeader>
          <CardBody>
            <h5>Dear GenerEOS supporters,</h5>
            <p>
              Block One recently announced that that they will be voting for Block Producers that share the core values
              necessary to maximize the integrity and potential of the EOS public blockchain network.
              <br />
              <br />
              They have provided an email for BP&apos;s and token holders to campaign for the Block Producers they
              believe in.
              <br />
              <br />
              We would love if you could rally behind us showing your support by sending a passionate email to Block One
              explaining why they should vote for GenerEOS.
              <br />
              <br />
              Send your email to - <a href="mailto:bp@eos.io?Subject=I%20Support%20GenerEOS">bp@eos.io</a>
              <br />
              <br />
              This support would mean the world to us and help us keep creating great tools and contributions for the
              community.
              <br />
              <br />
              <strong>&hearts;,</strong>
              <br />
              Team GenerEOS
            </p>
          </CardBody>
        </Card>
      </GridItem>
    </GridContainer>
  );
};

export default withStyles(regularFormsStyle)(TransferForm);
