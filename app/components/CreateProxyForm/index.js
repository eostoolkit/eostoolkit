/**
 *
 * CreateProxyForm
 *
 */

import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { isMobile } from 'react-device-detect';
// import styled from 'styled-components';

// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles';

// @material-ui/icons
import SupervisorAccount from '@material-ui/icons/SupervisorAccount';
import Help from '@material-ui/icons/Help';

// core components
import GridContainer from 'components/Grid/GridContainer';
import GridItem from 'components/Grid/GridItem';
import Card from 'components/Card/Card';
import CardHeader from 'components/Card/CardHeader';
import CardIcon from 'components/Card/CardIcon';
import CardBody from 'components/Card/CardBody';
import MobileDetectedAlert from 'components/MobileDetectedAlert';

import regularFormsStyle from 'assets/jss/regularFormsStyle';
import ProxyForm from './proxyForm';
import InfoForm from './infoForm';

const validationCreate = Yup.object().shape({
  owner: Yup.string().required('Proxy name is required'),
});
const validationInfo = Yup.object().shape({
  proxy: Yup.string().required('Proxy account is required'),
  name: Yup.string()
    .required('Name is required')
    .max(64),
  slogan: Yup.string().max(64),
  philosophy: Yup.string().max(1024),
  background: Yup.string().max(1024),
  website: Yup.string()
    .url()
    .max(256),
  logo_256: Yup.string()
    .url()
    .max(256),
  telegram: Yup.string().max(64),
  steemit: Yup.string().max(64),
  twitter: Yup.string().max(64),
  wechat: Yup.string().max(64),
});

const CreateProxyForm = props => {
  const { classes, handleCreate, handleInfo, eosAccount } = props;
  return (
    <GridContainer>
      <GridItem xs={12} sm={12} lg={8}>
        <Card>
          <CardHeader color="warning" icon>
            <CardIcon color="warning">
              <SupervisorAccount />
            </CardIcon>
            <h4 className={classes.cardIconTitle}>
              Create Proxy <small>- You will vote on behalf of others</small>
            </h4>
          </CardHeader>
          <CardBody>
            {isMobile ? (
              <MobileDetectedAlert />
            ) : (
              <Formik
                initialValues={{
                  owner: eosAccount,
                }}
                validationSchema={validationCreate}
                onSubmit={handleCreate}
                render={formikProps => <ProxyForm {...formikProps} classes={classes} />}
              />
            )}
          </CardBody>
        </Card>
        <Card>
          <CardHeader color="warning" icon>
            <CardIcon color="warning">
              <SupervisorAccount />
            </CardIcon>
            <h4 className={classes.cardIconTitle}>
              Register Proxy Info<small>- Provide details about your proxy to the world</small>
            </h4>
          </CardHeader>
          <CardBody>
            {isMobile ? (
              <MobileDetectedAlert />
            ) : (
              <Formik
                initialValues={{
                  proxy: eosAccount,
                  name: '',
                  slogan: '',
                  philosophy: '',
                  background: '',
                  website: '',
                  logo_256: '',
                  telegram: '',
                  steemit: '',
                  twitter: '',
                  wechat: '',
                }}
                validationSchema={validationInfo}
                onSubmit={handleInfo}
                render={formikProps => <InfoForm {...formikProps} classes={classes} />}
              />
            )}
          </CardBody>
        </Card>
      </GridItem>
      <GridItem xs={12} sm={12} lg={4}>
        <Card>
          <CardHeader color="info" icon>
            <CardIcon color="info">
              <Help />
            </CardIcon>
            <h4 className={classes.cardIconTitle}>Information</h4>
          </CardHeader>
          <CardBody>
            <h5>Create Proxy</h5>
            <p>
              By becoming a proxy you can vote on behalf of others who set you as their proxy. This can be as simple as
              managing voting for your own accounts, or as complex as becoming a world wide proxy.
            </p>
            <p>
              If you do wish to use your proxy powers for the community, we suggest you participate in the Register
              Proxy Info project:
            </p>
            <h5>Register Proxy Info</h5>
            <p>
              This is an on-chain EOS contract (or dApp) that allows EOS proxy accounts to register additional
              information about themselves, such as name and website. This information is published on the EOS
              blockchain and freely available to be republished. An example website that uses this information is the{' '}
              <a href="https://www.alohaeos.com/vote/proxy" target="new">
                Aloha EOS Proxy Research Portal
              </a>.
            </p>
            <p>
              The contract is published on the{' '}
              <a href="https://bloks.io/account/regproxyinfo" target="new">
                regproxyinfo
              </a>{' '}
              account on the EOS mainnet. More information about this project can be found on{' '}
              <a href="https://github.com/AlohaEOS/eos-proxyinfo" target="new">
                GitHub
              </a>
            </p>
            <p>
              This action will use your Proxy Account RAM allocation. Depending on how much detail you provide, this
              could be as large as 1kB
            </p>
          </CardBody>
        </Card>
      </GridItem>
    </GridContainer>
  );
};

export default withStyles(regularFormsStyle)(CreateProxyForm);
