import React from 'react';

import ToolBody from 'components/Tool/ToolBody';
import Button from 'components/CustomButtons/Button';

import AccountBalance from '@material-ui/icons/AccountBalance';

import { FormattedMessage } from 'react-intl';

import messages from './messages';

const Parsl = props => {
  const { stakes, loading, intl, ...clientProps } = props;
  const { networkAccount, networkIdentity, writerEnabled, pushTransaction } = clientProps;

  const refundDelay = 7 * 24 * 3600; // 7 days for LIVE, 15 minutes for TEST

  let parslLiquid = 0;
  let parslStaked = 0;
  let parslRefund = 0;
  let refundTime = 0;

  const hasStaked = stakes.find(s => s.owner !== 'Refunding');
  const hasRefund = stakes.find(s => s.owner === 'Refunding');

  if (networkAccount) {
    const hasParsl = networkAccount.balances.find(b => b.code === 'parslseed123');

    if (hasParsl) {
      parslLiquid = Number(hasParsl.amount);
    }
    if (hasStaked) {
      parslStaked = Number(hasStaked.weight.split(' ')[0]);
    }
    if (hasRefund) {
      parslRefund = Number(hasRefund.weight.split(' ')[0]);
      refundTime = hasRefund.updated_on + refundDelay;
    }
  }

  const refundDate = new Date(refundTime);
  const totalParsl = parslLiquid;

  const handleRefund = stake => {
    const transaction = [
      {
        account: 'parslseed123',
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
      header={intl.formatMessage(messages.parslTableHeader)}
      subheader={intl.formatMessage(messages.parslTableSubHeader)}>
      <h3>Total Parsl SEED</h3>
      <h2 style={{ marginTop: '-10px' }}>{Number(totalParsl).toFixed(4)}</h2>
      <h4 style={{ marginTop: '-10px' }}>
        <FormattedMessage {...messages.parslTablePoweredUpText} />
      </h4>
      <h3 style={{ marginTop: '-10px' }}>
        {parslStaked > 0 ?
          Number(parslStaked).toFixed(4) : intl.formatMessage(messages.parslTableNoParslText)}
      </h3>

      {parslRefund > 0 ? (
        <React.Fragment>
          <h4>
            <FormattedMessage {...messages.parslTableRefundingHeader} />
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
              <FormattedMessage {...messages.parslTableAvailableOnText} /> {new Date(refundTime).toLocaleString()}
            </p>
          )}
          <h3 style={{ marginTop: '-10px' }}>{Number(parslRefund).toFixed(4)}</h3>
        </React.Fragment>
      ) : (
        ''
      )}
    </ToolBody>
  );
};

export default Parsl;
