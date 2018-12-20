/**
 *
 * LinkAuthForm
 *
 */

import React from 'react';

import Tool from 'components/Tool/Tool';
import ToolSection from 'components/Tool/ToolSection';
import ToolBody from 'components/Tool/ToolBody';

import MinerTable from './minerTable';
import TokenTable from './tokenTable';
import MineTable from './MineTable';
import Usurp from './UsurpForm';
import Transfer from './TransferForm';
import Info from '@material-ui/icons/Info';
import GrandpaInfo from 'components/Information/Grandpa';

import { FormattedMessage } from 'react-intl';

import messages from './messages';

const makeClaim = (values, networkIdentity, referrer) => {
  const data = {
    owner: networkIdentity ? networkIdentity.name : '',
    sym: `4,${values}`,
    referrer,
  };
  const transaction = [
    {
      account: 'grandpacoins',
      name: 'mine',
      data,
    },
  ];
  return transaction;
};

const Grandpa = props => {
  const { pushTransaction, networkIdentity, networkAccount, miner, intl } = props;
  const referrer = props.location.search ? props.location.search.split('=')[1] : '';

  const handleClaims = values => {
    const transaction = makeClaim(values, networkIdentity, referrer);
    pushTransaction(transaction, props.history);
  };

  const refLink = `https://eostoolkit.io/grandpacoins?r=${networkIdentity ? networkIdentity.name : 'youracctname'}`;

  return (
    <Tool>
      <ToolSection lg={12}>
        <ToolBody
          color="info"
          icon={Info}
          header={intl.formatMessage(messages.grandpaIndexHeader)}
          subheader={intl.formatMessage(messages.grandpaIndexSubHeader)}>
          <GrandpaInfo />
          <h5>
            <FormattedMessage {...messages.grandpaIndexReferralLinkText} />
            <a href={refLink} target="new">
              {refLink}
            </a>
          </h5>
        </ToolBody>
      </ToolSection>
      <ToolSection lg={6}>
        <MineTable
          tokens={['BTC', 'ETH', 'DOGE']}
          stats={miner ? miner.stats : null}
          handleSubmit={handleClaims}
          referrer={referrer}
          intl={intl}
        />
        <MinerTable intl={intl} {...props} />
        <Usurp {...props} />
        <Transfer {...props} />
      </ToolSection>
      <ToolSection lg={6}>
        <TokenTable token={miner ? miner.stats.find(s => s.token === 'BTC') : null} symbol={'BTC'} intl={intl} />
        <TokenTable token={miner ? miner.stats.find(s => s.token === 'ETH') : null} symbol={'ETH'} intl={intl} />
        <TokenTable token={miner ? miner.stats.find(s => s.token === 'DOGE') : null} symbol={'DOGE'} intl={intl} />
      </ToolSection>
    </Tool>
  );
};

export default Grandpa;
