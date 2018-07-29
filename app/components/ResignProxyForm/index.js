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
              Resign Proxy <small>- You no longer vote on behalf of others</small>
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
              Unregister Proxy Info<small>- Remove details about your proxy</small>
            </h4>
          </CardHeader>
          <CardBody>
            {isMobile ? (
              <MobileDetectedAlert />
            ) : (
              <Formik
                initialValues={{
                  proxy: eosAccount,
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
            <h5>Resign Proxy</h5>
            <p>
              By resigning as proxy you will no longer vote on behalf of others who set you as their proxy. Vote weight
              changes immediately. All accounts that had you set as a proxy will no longer have any votes.
            </p>
            <p>As a courtesy please attempt to notify these accounts.</p>
            <h5>Unregister Proxy Info</h5>
            <p>If you had previously registered your Proxy Info, please unregister to keep the proxy database clean.</p>
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
          </CardBody>
        </Card>
      </GridItem>
    </GridContainer>
  );
};

export default withStyles(regularFormsStyle)(CreateProxyForm);
