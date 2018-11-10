import React from 'react';

import Tool from 'components/Tool/Tool';
import ToolSection from 'components/Tool/ToolSection';
import ToolBody from 'components/Tool/ToolBody';
import GridContainer from 'components/Grid/GridContainer';
import GridItem from 'components/Grid/GridItem';
import Button from 'components/CustomButtons/Button';

import Undo from '@material-ui/icons/Undo';
import AccountBalance from '@material-ui/icons/AccountBalance';

const Karma = props => {
  const { stakes, loading, ...clientProps } = props;
  const { networkAccount, networkIdentity, writerEnabled, pushTransaction } = clientProps;

  const claimDelay   = 7*24*3600*1000; // 7 days for LIVE, 30 minutes for TEST
  const refundDelay  = 3*24*3600*1000; // 3 days for LIVE, 15 minutes for TEST

  let karmaLiquid = 0;
  let karmaStaked = 0;
  let karmaRefund = 0;
  let claimTime = 0;
  let refundTime = 0;

  let hasStaked = stakes.find(s=>s.owner !== 'Refunding');
  let hasRefund = stakes.find(s=>s.owner === 'Refunding');

  if(networkAccount) {
    let hasKarma = networkAccount.balances.find(b=>b.account === 'therealkarma');

    if(hasKarma) {
      karmaLiquid = Number(hasKarma.balance.split(' ')[0]);
    }
    if(hasStaked) {
      karmaStaked = Number(hasStaked.weight.split(' ')[0]);
      claimTime = (hasStaked.last_claim_time/1000)+claimDelay;
    }
    if(hasRefund) {
      karmaRefund = Number(hasRefund.weight.split(' ')[0]);
      refundTime = (hasRefund.last_claim_time/1000)+refundDelay;
    }
  }

  let claimDate = new Date(claimTime);
  let refundDate = new Date(refundTime);
  const totalKarma = karmaLiquid + karmaStaked + karmaRefund;

  const handleClaim = (stake) => {
    const transaction = [
      {
        account: 'therealkarma',
        name: 'claim',
        data: {
          owner: stake.owner,
        },
      },
    ];
    pushTransaction(transaction,props.history);
  };

  const handleRefund = (stake) => {
    const transaction = [
      {
        account: 'therealkarma',
        name: 'refund',
        data: {
          owner: networkIdentity ? networkIdentity.name : '',
        },
      },
    ];
    pushTransaction(transaction,props.history);
  };

  return (
    <ToolBody
      color="warning"
      icon={AccountBalance}
      header="Your KARMA" subheader=" - Good KARMA grows!">
      <h3>Total KARMA</h3>
      <h2 style={{marginTop:'-10px'}}>{Number(totalKarma).toFixed(4)}</h2>
      <h4 style={{marginTop:'-10px'}}>Powered Up</h4>
      <h3 style={{marginTop:'-10px'}}>
        {karmaStaked > 0 ? Number(karmaStaked).toFixed(4) : 'None - Power Up to Earn More!'}
      </h3>
      {karmaStaked > 0 ? (
        claimDate < new Date() ? (
          <Button onClick={() => {handleClaim(hasStaked)}} color="success">Claim</Button>
        ) : (
          <p>Claim your rewards on {claimDate.toLocaleString()}</p>
        )
      ):('')}


      {karmaRefund > 0 ? (
        <React.Fragment>
          <h4>Refunding</h4>
          {refundDate < new Date() ? (
            <Button onClick={() => {handleRefund(hasRefund)}} color="success">Refund</Button>
          ) : (
            <p style={{marginTop:'-10px'}}>Available on {new Date(refundTime).toLocaleString()}</p>
          )}
          <h3 style={{marginTop:'-10px'}}>{Number(karmaRefund).toFixed(4)}</h3>
        </React.Fragment>
      ): ('')}


    </ToolBody>
  );
};

export default Karma;
