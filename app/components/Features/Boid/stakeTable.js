import React from 'react';

import ToolBody from 'components/Tool/ToolBody';
import Button from 'components/CustomButtons/Button';

import AccountBalance from '@material-ui/icons/AccountBalance';

import { FormattedMessage } from 'react-intl';

import messages from './messages';

const Boid = props => {
  const { stakes, loading, intl, ...clientProps } = props;
  const { networkAccount, networkIdentity, writerEnabled, pushTransaction } = clientProps;

  const refundDelay = 7 * 24 * 3600; // 7 days for LIVE, 15 minutes for TEST

  let boidLiquid = 0;
  let boidStaked = 0;
  let boidRefund = 0;
  let refundTime = 0;

  const hasStaked = stakes.find(s => s.owner !== 'Refunding');
  const hasRefund = stakes.find(s => s.owner === 'Refunding');

  if (networkAccount) {
    const hasBoid = networkAccount.balances.find(b => b.code === 'boidcomtoken');

    if (hasBoid) {
      boidLiquid = Number(hasBoid.amount);
    }
    if (hasStaked) {
      boidStaked = 0;
      if (hasStaked.owner === hasStaked.stake_account)
      {
        boidStaked = Number(hasStaked.staked.split(' ')[0]);
      }
    }
    if (hasRefund) {
      console.log(hasRefund);
      boidRefund = Number(hasRefund.quantity.split(' ')[0]);
      refundTime = hasRefund.updated_on + refundDelay;
    }
  }

  const refundDate = new Date(refundTime);
  const totalBoid = boidLiquid;

  const handleRefund = stake => {
    const transaction = [
      {
        account: 'boidcomtoken',
        name: 'refund',
        data: {
          owner: networkIdentity ? networkIdentity.name : '',
          sym: '4,BOID'
        },
      },
    ];
    pushTransaction(transaction, props.history);
  };

  return (
    <ToolBody
      color="warning"
      icon={AccountBalance}
      header={intl.formatMessage(messages.boidTableHeader)}
      subheader={intl.formatMessage(messages.boidTableSubHeader)}>
      <h3>Total BOID</h3>
      <h2 style={{ marginTop: '-10px' }}>{Number(totalBoid).toFixed(4)}</h2>
      <h4 style={{ marginTop: '-10px' }}>
        <FormattedMessage {...messages.boidTablePoweredUpText} />
      </h4>
      <h3 style={{ marginTop: '-10px' }}>
        {boidStaked > 0 ?
          Number(boidStaked).toFixed(4) : intl.formatMessage(messages.boidTableNoBoidText)}
      </h3>

      {boidRefund > 0 ? (
        <React.Fragment>
          <h4>
            <FormattedMessage {...messages.boidTableRefundingHeader} />
          </h4>
          {refundDate < new Date() ? (
            <Button
              onClick={() => {
                handleRefund(hasRefund);
              }}
              color="success">
              Refund
            </Button>
          ) : (
            <p style={{ marginTop: '-10px' }}>
              <FormattedMessage {...messages.boidTableAvailableOnText} /> {new Date(refundTime).toLocaleString()}
            </p>
          )}
          <h3 style={{ marginTop: '-10px' }}>{Number(boidRefund).toFixed(4)}</h3>
        </React.Fragment>
      ) : (
        ''
      )}
      <div>
        <ul>
        <li>Staking BOIDs increases your profitability when you generate Boid Power using the Boid app.</li>
        <li>Staked tokens are locked in your wallet until they are unstaked.</li>
        <li>You can manually stake and unstake instantly during a season break period.</li>
        <li>During a Boid Season, you can’t stake or unstake tokens.</li>
        <li>The minimum amount of BOIDs you can stake is 100k</li>
        </ul>
      </div>
    </ToolBody>
  );
};

export default Boid;
