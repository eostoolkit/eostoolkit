/**
 *
 * AirgrabForm
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { makeSelectClaims } from 'containers/NetworkClient/selectors';

import CloudDownload from '@material-ui/icons/CloudDownload';
import Tool from 'components/Tool/Tool';
import ToolSection from 'components/Tool/ToolSection';
import ToolBody from 'components/Tool/ToolBody';

import PoormanInfo from 'components/Information/PoormanInfo';
import Disclaimer from 'components/Information/Disclaimer';

import AirgrabTable from './AirgrabTable';
import ClaimsTable from './ClaimsTable';

import { FormattedMessage } from 'react-intl';

import messages from './messages';

const makeTransaction = (values, networkIdentity) => {
  let data = null;
  if (values.method === 'signup' && values.symbol !== 'SEED') {
    data = {
      owner: networkIdentity ? networkIdentity.name : '',
      quantity: `0.0000 ${values.symbol}`,
    };
  }
  if (values.method === 'airgrab2' && values.symbol === 'SOV') {
    data = {
      owner: networkIdentity ? networkIdentity.name : '',
      value: `5000.0000 ${values.symbol}`,
    };
  }
  if (values.method === 'signup' && values.symbol === 'SEED') {
    data = {
      owner: networkIdentity ? networkIdentity.name : '',
      sym: `4,${values.symbol}`,
    };
  }
  if (values.method === 'open') {
    data = {
      owner: networkIdentity ? networkIdentity.name : '',
      symbol: values.symbol === 'BRM' ? `3,${values.symbol}` : `4,${values.symbol}`,
      ram_payer: networkIdentity ? networkIdentity.name : '',
    };
  }
  if (values.method === 'claim') {
    data = {
      claimer: networkIdentity ? networkIdentity.name : '',
    };
  }
  const transaction = [
    {
      account: values.account,
      name: values.method,
      data,
    },
  ];
  return transaction;
};

const makeClaim = (values, networkIdentity) => {
  const data = {
    owner: networkIdentity ? networkIdentity.name : '',
  };
  const type = values.data.hasOwnProperty('sym') ? 'sym' : 'symbol';
  data[type] = values.data[type];
  const transaction = [
    {
      account: values.account,
      name: values.action,
      data,
    },
  ];
  return transaction;
};

const AirgrabForm = props => {
  const { pushTransaction, networkIdentity, networkAccount, intl } = props;
  const handleSubmit = values => {
    const transaction = makeTransaction(values, networkIdentity);
    pushTransaction(transaction, props.history);
  };
  const handleClaims = values => {
    const transaction = makeClaim(values, networkIdentity);
    pushTransaction(transaction, props.history);
  };
  return (
    <Tool>
      <ToolSection lg={8}>
        <ToolBody color="warning" icon={CloudDownload} header={intl.formatMessage(messages.airgrabHeader)}>
          <h6>
            <FormattedMessage {...messages.airgrabNoteHeader} />
          </h6>
          <h6>
            <FormattedMessage {...messages.airgrabNoteHeader2} />
          </h6>
          <Disclaimer />
          <AirgrabTable handleSubmit={handleSubmit} account={networkAccount} intl={intl} />
          <p>
            <FormattedMessage {...messages.airgrabGenerEOSMail} />{' '}
            <a href="mailto:contact@genereos.io">contact@genereos.io</a>
          </p>
        </ToolBody>
        <ToolBody color="warning" icon={CloudDownload} header={intl.formatMessage(messages.claimTokenHeader)}>
          <h6>
            <FormattedMessage {...messages.claimNoteHeader} />
          </h6>
          <h6>
            <FormattedMessage {...messages.claimNoteHeader2} />
          </h6>
          <Disclaimer />
          <ClaimsTable handleSubmit={handleClaims} account={networkAccount} claims={props.claims} intl={intl} />
        </ToolBody>
      </ToolSection>
      <ToolSection lg={4}>
        <ToolBody header={intl.formatMessage(messages.poormanTokenHeader)}>
          <PoormanInfo />
        </ToolBody>
      </ToolSection>
    </Tool>
  );
};

const mapStateToProps = createStructuredSelector({
  claims: makeSelectClaims(),
});

export default connect(
  mapStateToProps,
  null
)(AirgrabForm);
