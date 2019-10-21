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

  let totalParsl = 0;
  let parslStaked = 0;
  let parslRefund = 0;
  let refundTime = 0;

  const hasStaked = stakes.find(s => s.owner !== 'Refunding');
  const hasRefund = stakes.find(s => s.owner === 'Refunding');

  if (networkAccount) {
    const hasParsl = networkAccount.balances.find(b => b.code === 'parslseed123');

    if (hasParsl) {
      totalParsl = Number(hasParsl.amount);
    }
    if (hasStaked) {
      console.log(hasStaked);
      parslStaked = Number(hasStaked.quantity.split(' ')[0]);
    }
    if (hasRefund) {
      console.log(hasRefund);
      parslRefund = Number(hasRefund.quantity.split(' ')[0]);
      refundTime = hasRefund.updated_on + refundDelay;
    }
  }

  const refundDate = new Date(refundTime);
  const parslLiquid = totalParsl - parslStaked - parslRefund;

  const handleRefund = stake => {
    const transaction = [
      {
        account: 'parslseed123',
        name: 'refund',
        data: {
          owner: networkIdentity ? networkIdentity.name : '',
          sym: '4,SEED'
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
      <h4>
        <FormattedMessage {...messages.parslTablePoweredUpText} />
      </h4>
      <h3 style={{ marginTop: '-10px' }}>
        {parslStaked > 0 ?
          Number(parslStaked).toFixed(4) : intl.formatMessage(messages.parslTableNoParslText)}
      </h3>

      {parslLiquid > 0 ? (
        <React.Fragment>
          <h4>
            <FormattedMessage {...messages.parslTableLiquidText} />
          </h4>
          <h3 style={{ marginTop: '-10px' }}>
            {parslLiquid > 0 ?
              Number(parslLiquid).toFixed(4) : intl.formatMessage(messages.parslTableNoLiquidText)}
          </h3>
        </React.Fragment>
      ) : (
        ''
      )}

      {parslRefund > 0 ? (
        <React.Fragment>
          <h4>
            <FormattedMessage {...messages.parslTableRefundingHeader} />
          </h4>
          <h3 style={{ marginTop: '-10px' }}>{Number(parslRefund).toFixed(4)}
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
          </h3>
        </React.Fragment>
      ) : (
        ''
      )}
    </ToolBody>
  );
};

export default Parsl;
