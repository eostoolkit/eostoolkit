import React from 'react';

import ToolBody from 'components/Tool/ToolBody';
import Button from 'components/CustomButtons/Button';

import AccountBalance from '@material-ui/icons/AccountBalance';

import { FormattedMessage } from 'react-intl';

import messages from './messages';

const Karma = props => {
  const { stakes, loading, intl, ...clientProps } = props;
  const { networkAccount, networkIdentity, writerEnabled, pushTransaction } = clientProps;

  const claimDelay = 7 * 24 * 3600 * 1000; // 7 days for LIVE, 30 minutes for TEST
  const refundDelay = 3 * 24 * 3600 * 1000; // 3 days for LIVE, 15 minutes for TEST

  let karmaLiquid = 0;
  let karmaStaked = 0;
  let karmaRefund = 0;
  let claimTime = 0;
  let refundTime = 0;

  const hasStaked = stakes.find(s => s.owner !== 'Refunding');
  const hasRefund = stakes.find(s => s.owner === 'Refunding');

  if (networkAccount) {
    const hasKarma = networkAccount.balances.find(b => b.code === 'therealkarma');

    if (hasKarma) {
      karmaLiquid = Number(hasKarma.amount);
    }
    if (hasStaked) {
      karmaStaked = Number(hasStaked.weight.split(' ')[0]);
      claimTime = hasStaked.last_claim_time / 1000 + claimDelay;
    }
    if (hasRefund) {
      karmaRefund = Number(hasRefund.weight.split(' ')[0]);
      refundTime = hasRefund.last_claim_time / 1000 + refundDelay;
    }
  }

  const claimDate = new Date(claimTime);
  const refundDate = new Date(refundTime);
  const totalKarma = karmaLiquid + karmaStaked + karmaRefund;

  const handleClaim = stake => {
    const transaction = [
      {
        account: 'therealkarma',
        name: 'claim',
        data: {
          owner: stake.owner,
        },
      },
    ];
    pushTransaction(transaction, props.history);
  };

  const handleRefund = stake => {
    const transaction = [
      {
        account: 'therealkarma',
        name: 'refund',
        data: {
          owner: networkIdentity ? networkIdentity.name : '',
        },
      },
    ];
    pushTransaction(transaction, props.history);
  };

  return (
    <ToolBody
      color="warning"
      icon={AccountBalance}
      header={intl.formatMessage(messages.karmaTableHeader)}
      subheader={intl.formatMessage(messages.karmaTableSubHeader)}>
      <h3>Total KARMA</h3>
      <h2 style={{ marginTop: '-10px' }}>{Number(totalKarma).toFixed(4)}</h2>
      
      <h4>
        <FormattedMessage {...messages.karmaTablePoweredUpText} />
      </h4>
      <h3 style={{ marginTop: '-10px' }}>
        {karmaStaked > 0 ? Number(karmaStaked).toFixed(4) : intl.formatMessage(messages.karmaTableNoKarmaText)}
        {karmaStaked > 0 ? (
          <Button
            onClick={() => {
              handleClaim(hasStaked);
            }}
            color="success">
            Claim
          </Button>
        ) : (
          ''
        )}
      </h3>

      {karmaLiquid > 0 ? (
        <React.Fragment>
          <h4>
            <FormattedMessage {...messages.karmaTableLiquidText} />
          </h4>
          <h3 style={{ marginTop: '-10px' }}>
            {karmaLiquid > 0 ?
              Number(karmaLiquid).toFixed(4) : intl.formatMessage(messages.karmaTableNoLiquidText)}
          </h3>
        </React.Fragment>
      ) : (
        ''
      )}

      {karmaRefund > 0 ? (
        <React.Fragment>
          <h4>
            <FormattedMessage {...messages.karmaTableRefundingHeader} />
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
              <FormattedMessage {...messages.karmaTableAvailableOnText} /> {new Date(refundTime).toLocaleString()}
            </p>
          )}
          <h3 style={{ marginTop: '-10px' }}>{Number(karmaRefund).toFixed(4)}</h3>
        </React.Fragment>
      ) : (
        ''
      )}
    </ToolBody>
  );
};

export default Karma;
