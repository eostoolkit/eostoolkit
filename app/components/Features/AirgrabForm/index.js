/**
 *
 * AirgrabForm
 *
 */

import React from 'react';

import CloudDownload from '@material-ui/icons/CloudDownload';
import Tool from 'components/Tool/Tool';
import ToolSection from 'components/Tool/ToolSection';
import ToolBody from 'components/Tool/ToolBody';

import PoormanInfo from 'components/Information/PoormanInfo';
import Disclaimer from 'components/Information/Disclaimer';

import AirgrabTable from './AirgrabTable';

const makeTransaction = (values, networkIdentity) => {
  const data =
    values.method === 'signup'
      ? {
        owner: networkIdentity.actor,
        quantity: `0.0000 ${values.symbol}`,
      }
      : {
        claimer: networkIdentity.actor,
      };
  const transaction = [
    {
      account: values.account,
      name: values.method,
      data,
    },
  ];
  return transaction;
};

const AirgrabForm = props => {
  const { pushTransaction, networkIdentity } = props;
  const handleSubmit = values => {
    const transaction = makeTransaction(values, networkIdentity);
    pushTransaction(transaction);
  };
  return (
    <Tool>
      <ToolSection lg={8}>
        <ToolBody color="warning" icon={CloudDownload} header="Airgrab your Tokens!">
          <h6>Note: Airgrabbing tokens consumes your personal RAM.</h6>
          <h6>You cannot recover this RAM until the token has dropped.</h6>
          <Disclaimer />
          <AirgrabTable handleSubmit={handleSubmit} />
          <p>
            Have an Airgrab you want here? Email us: <a href="mailto:contact@genereos.io">contact@genereos.io</a>
          </p>
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

export default AirgrabForm;
