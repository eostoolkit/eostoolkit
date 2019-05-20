import React from 'react';

import ToolBody from 'components/Tool/ToolBody';
import Button from 'components/CustomButtons/Button';

import AccountBalance from '@material-ui/icons/AccountBalance';

import { FormattedMessage } from 'react-intl';

import messages from './messages';

const HireVibes = props => {
  const { stakes, loading, intl, ...clientProps } = props;
  const { networkAccount, networkIdentity, writerEnabled, pushTransaction } = clientProps;

  const refundDelay = 7 * 24 * 3600; // 7 days for LIVE, 15 minutes for TEST

  let hireVibesLiquid = 0;
  let hireVibesStaked = 0;
  let hireVibesRefund = 0;
  let refundTime = 0;

  const hasStaked = stakes.find(s => s.owner !== 'Refunding');
  const hasRefund = stakes.find(s => s.owner === 'Refunding');

  if (networkAccount) {
    const hasHireVibes = networkAccount.balances.find(b => b.code === 'hirevibeshvt');

    if (hasHireVibes) {
      hireVibesLiquid = Number(hasHireVibes.amount);
    }
    if (hasStaked) {
      console.log(hasStaked);
      hireVibesStaked = Number(hasStaked.quantity.split(' ')[0]);
    }
    if (hasRefund) {
      console.log(hasRefund);
      hireVibesRefund = Number(hasRefund.quantity.split(' ')[0]);
      refundTime = hasRefund.updated_on + refundDelay;
    }
  }

  const refundDate = new Date(refundTime);
  const totalHireVibes = hireVibesLiquid;

  const handleRefund = stake => {
    const transaction = [
      {
        account: 'hvtstakingio',
        name: 'refund',
        data: {
          owner: networkIdentity ? networkIdentity.name : '',
          sym: '4,HVT'
        },
      },
    ];
    pushTransaction(transaction, props.history);
  };

  return (
    <ToolBody
      color="warning"
      icon={AccountBalance}
      header={intl.formatMessage(messages.hireVibesTableHeader)}
      subheader={intl.formatMessage(messages.hireVibesTableSubHeader)}>
      <h3>Liquid HireVibes HVT</h3>
      <h2 style={{ marginTop: '-10px' }}>{Number(totalHireVibes).toFixed(4)}</h2>
      <h4 style={{ marginTop: '-10px' }}>
        <FormattedMessage {...messages.hireVibesTablePoweredUpText} />
      </h4>
      <h3 style={{ marginTop: '-10px' }}>
        {hireVibesStaked > 0 ?
          Number(hireVibesStaked).toFixed(4) : intl.formatMessage(messages.hireVibesTableNoHireVibesText)}
      </h3>

      {hireVibesRefund > 0 ? (
        <React.Fragment>
          <h4>
            <FormattedMessage {...messages.hireVibesTableRefundingHeader} />
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
              <FormattedMessage {...messages.hireVibesTableAvailableOnText} /> {new Date(refundTime).toLocaleString()}
            </p>
          )}
          <h3 style={{ marginTop: '-10px' }}>{Number(hireVibesRefund).toFixed(4)}</h3>
        </React.Fragment>
      ) : (
        ''
      )}
    </ToolBody>
  );
};

export default HireVibes;
