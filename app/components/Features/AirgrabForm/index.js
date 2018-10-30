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

const makeTransaction = (values, networkIdentity) => {
  let data = null;
  if(values.method === 'signup' && values.symbol !== 'SEED') {
    data = {
      owner: networkIdentity ? networkIdentity.name : '',
      quantity: `0.0000 ${values.symbol}`,
    };
  }
  if(values.method === 'signup' && values.symbol === 'SEED') {
    data = {
      owner: networkIdentity ? networkIdentity.name : '',
      sym: `4,${values.symbol}`,
    };
  }
  if(values.method === 'open') {
    data = {
      owner: networkIdentity ? networkIdentity.name : '',
      symbol: `0.0000 ${values.symbol}`,
      ram_payer: networkIdentity ? networkIdentity.name : '',
    };
  }
  if(values.method === 'claim') {
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
    sym: values.data.sym,
  }
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
  const { pushTransaction, networkIdentity, networkAccount } = props;
  const handleSubmit = values => {
    const transaction = makeTransaction(values, networkIdentity);
    pushTransaction(transaction,props.history);
  };
  const handleClaims = values => {
    const transaction = makeClaim(values, networkIdentity);
    pushTransaction(transaction,props.history);
  };
  return (
    <Tool>
      <ToolSection lg={8}>
        <ToolBody color="warning" icon={CloudDownload} header="Airgrab your Tokens!">
          <h6>Note: Airgrabbing tokens consumes your personal RAM.</h6>
          <h6>You cannot recover this RAM until the token has dropped.</h6>
          <Disclaimer />
          <AirgrabTable handleSubmit={handleSubmit} account={networkAccount} />
          <p>
            Have an Airgrab you want here? Email us: <a href="mailto:contact@genereos.io">contact@genereos.io</a>
          </p>
        </ToolBody>
        <ToolBody color="warning" icon={CloudDownload} header="Claim your Tokens!">
          <h6>Note: You can only claim a token you have already received.</h6>
          <h6>Claim will succeed even if you already claimed. Next release will say you have already claimed if you have.</h6>
          <Disclaimer />
          <ClaimsTable handleSubmit={handleClaims} account={networkAccount} claims={props.claims}/>
        </ToolBody>
      </ToolSection>
      <ToolSection lg={4}>
        <ToolBody header="Poorman Token">
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
