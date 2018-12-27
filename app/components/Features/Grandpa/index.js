/**
 *
 * LinkAuthForm
 *
 */

import React from 'react';

import Tool from 'components/Tool/Tool';
import ToolSection from 'components/Tool/ToolSection';
import ToolBody from 'components/Tool/ToolBody';

import MineTable from './MineTable';
import Info from '@material-ui/icons/Info';
import GrandpaInfo from 'components/Information/Grandpa';

import messages from './messages';

const makeClaim = (values, networkIdentity) => {
  const transaction = [
    {
      account: 'grandpacoins',
      name: 'quit',
      data: {
        owner: networkIdentity ? networkIdentity.name : '',
      },
    },
  ];
  return transaction;
};

const Grandpa = props => {
  const { pushTransaction, networkIdentity, networkAccount, miner, intl } = props;

  const handleClaims = values => {
    const transaction = makeClaim(values, networkIdentity);
    pushTransaction(transaction, props.history);
  };

  return (
    <Tool>
      <ToolSection lg={6}>
        <ToolBody color="info" icon={Info} header={intl.formatMessage(messages.grandpaIndexHeader)}>
          <GrandpaInfo />
        </ToolBody>
      </ToolSection>
      <ToolSection lg={6}>
        <MineTable handleSubmit={handleClaims} intl={intl} />
      </ToolSection>
    </Tool>
  );
};

export default Grandpa;
