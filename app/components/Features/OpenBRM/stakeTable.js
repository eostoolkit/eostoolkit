import React from 'react';

import ToolBody from 'components/Tool/ToolBody';
import Button from 'components/CustomButtons/Button';

import AccountBalance from '@material-ui/icons/AccountBalance';

import { FormattedMessage } from 'react-intl';

import messages from './messages';

const OpenBRM = props => {
  const { stakes, refunds, loading, intl, ...clientProps } = props;
  // console.log(props);
  // const { networkAccount, networkIdentity, writerEnabled, pushTransaction } = clientProps;
   const { networkAccount, networkIdentity, pushTransaction } = clientProps;

  const refundDelay = 10 * 24 * 3600; // 10 days for LIVE, 15 minutes for TEST

  let brmLiquid = 0;
  // const brmStaked = 0;
  let brmStaked = 0;
  let brmRefund = 0;
  let refundTime = 0;

  const hasStaked = stakes.find(s => s.stake_account === networkIdentity.name);
  const hasRefund = refunds.find(s => s.stake_account === networkIdentity.name);
  // const hasRefund = 0;

  if (networkAccount) {
    const hasBRM = networkAccount.balances.find(b => b.code === 'openbrmeos11');

    if (hasBRM) {
      brmLiquid = Number(hasBRM.amount);
    }
    if (hasStaked) {
      console.log(hasStaked);
      brmStaked = Number(hasStaked.staked.split(' ')[0]);
    }
    if (hasRefund) {
      //console.log(hasRefund);
      brmRefund = Number(hasRefund.locked_balance.split(' ')[0]);
      refundTime = refundDelay;
    }
  }

  const refundDate = new Date(refundTime);
  const totalBRM = brmLiquid;

  const handleRefund = stake => {
    const transaction = [
      {
        account: 'openbrmeos11',
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
      header={intl.formatMessage(messages.openBRMTableHeader)}
      subheader={intl.formatMessage(messages.openBRMTableSubHeader)}>
      <h3>Total BRM</h3>
      <h2 style={{ marginTop: '-10px' }}>{Number(totalBRM).toFixed(3)}</h2>
      <h4 style={{ marginTop: '-10px' }}>
        <FormattedMessage {...messages.openBRMTablePoweredUpText} />
      </h4>
      <h3 style={{ marginTop: '-10px' }}>
        {brmStaked > 0 ? Number(brmStaked).toFixed(3) : intl.formatMessage(messages.openBRMTableNoParslText)}
      </h3>

      {brmRefund > 0 ? (
        <React.Fragment>
          <h4>
            <FormattedMessage {...messages.openBRMTableRefundingHeader} />
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
              <FormattedMessage {...messages.openBRMTableAvailableOnText} /> {new Date(refundTime).toLocaleString()}
            </p>
          )}
          <h3 style={{ marginTop: '-10px' }}>{Number(brmRefund).toFixed(3)}</h3>
        </React.Fragment>
      ) : (
        ''
      )}
    </ToolBody>
  );
};

export default OpenBRM;
