import React from 'react';

import ToolBody from 'components/Tool/ToolBody';
import Button from 'components/CustomButtons/Button';

import AccountBalance from '@material-ui/icons/AccountBalance';

import { FormattedMessage } from 'react-intl';

import messages from './messages';

const Pixeos = props => {
  const { stakes, loading, intl, ...clientProps } = props;
  const { networkAccount, networkIdentity, writerEnabled, pushTransaction } = clientProps;

  const refundDelay = 1 * 24 * 3600; // 1 days for LIVE

  let pixeosLiquid = 0;
  let pixeosStaked = 0;
  let pixeosRefund = 0;
  let refundTime = 0;
  let totalPixeos = 0;

  const hasStaked = stakes.find(s => s.owner !== 'Refunding');
  const hasRefund = stakes.find(s => s.owner === 'Refunding');

  if (networkAccount) {
    const hasPixeos = networkAccount.balances.find(b => b.code === 'pixeos1token');

    if (hasPixeos) {
      totalPixeos = Number(hasPixeos.amount);
    }
    if (hasStaked) {
      pixeosStaked = Number(hasStaked.staked_pixeos.split(' ')[0]);

      pixeosRefund = Number(hasStaked.unstaking_pixeos.split(' ')[0]);
      refundTime = new Date(hasStaked.unstake_date);
      //console.log(refundTime);
    }
  }

  const refundDate = new Date(refundTime)
  refundDate.setSeconds( refundDate.getSeconds() + refundDelay );

  pixeosLiquid = totalPixeos - pixeosStaked;

  if (refundDate <= new Date()) {
    // pixeos unstaking is weird.
    // it stays listed under table 'stakes.unstaking_pixeos' even though the refunding date is passed.
    // it is implicitly regarded as 'liquid' if the date has passed, so need to overwrite here.
    pixeosLiquid += pixeosRefund;
    totalPixeos  += pixeosRefund;
    pixeosRefund = 0;
  }

  const handleRefund = stake => {
    const transaction = [
      {
        account: 'pixeos1stake',
        name: 'refund',
        data: {
          owner: networkIdentity ? networkIdentity.name : '',
          sym: '4,PIXEOS'
        },
      },
    ];
    pushTransaction(transaction, props.history);
  };

  return (
    <ToolBody
      color="warning"
      icon={AccountBalance}
      header={intl.formatMessage(messages.pixeosTableHeader)}
      subheader={intl.formatMessage(messages.pixeosTableSubHeader)}>
      <h3>Total Pixeos</h3>
      <h2 style={{ marginTop: '-10px' }}>{Number(totalPixeos).toFixed(4)}</h2>

      <h4>
        <FormattedMessage {...messages.pixeosTablePoweredUpText} />
      </h4>
      <h3 style={{ marginTop: '-10px' }}>
        {pixeosStaked > 0 ?
          Number(pixeosStaked).toFixed(4) : intl.formatMessage(messages.pixeosTableNoPixeosText)}
      </h3>

      {pixeosLiquid > 0 ? (
        <React.Fragment>
          <h4>
            <FormattedMessage {...messages.pixeosTableLiquidText} />
          </h4>
          <h3 style={{ marginTop: '-10px' }}>
            {pixeosLiquid > 0 ?
              Number(pixeosLiquid).toFixed(4) : intl.formatMessage(messages.pixeosTableNoPixeosText)}
          </h3>
        </React.Fragment>
      ) : (
        ''
      )}

      {pixeosRefund > 0 ? (
        <React.Fragment>
          <h4>
            <FormattedMessage {...messages.pixeosTableRefundingHeader} />
          </h4>
          <h3 style={{ marginTop: '-10px' }}>
            {Number(pixeosRefund).toFixed(4)}
          </h3>
          <h4>
            {refundDate > new Date() ? (
              <p style={{ marginTop: '-10px' }}>
                <FormattedMessage {...messages.pixeosTableAvailableOnText} /> {refundDate.toLocaleString()}
              </p>
            ):(<p/>)}
          </h4>
        </React.Fragment>
      ) : (
        ''
      )}
    </ToolBody>
  );
};

export default Pixeos;
