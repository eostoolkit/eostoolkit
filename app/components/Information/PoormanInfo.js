import React from 'react';
// Poorman token info
const PoormanInfo = () => {
  return (
    <div>
      <h5>The POORMANTOKEN is an EOS token that includes signups and burning to make airdrops cheaper</h5>
      <p>The intention is to allow EOS accounts to Airgrab the token (i.e. opt-in or signup)</p>
      <p>The September 1st airdrop has been completed.</p>
      <p>
        The new purpose for POOR is to reward people for STAKING and VOTING for 25+ MAINNET Block Producers. Each month we
        will drop additional POOR to everyone who meets the following criteria:
      </p>
      <p>1. Already have POOR (either from AIRGRAB or a previous DROP)</p>
      <p>2. Have voted for 25+ producers (either directly or through a PROXY)</p>
      <p>3. Have a STAKED balance</p>
      <p>Accounts that meet this criteria will receive POOR 1:1 to STAKED EOS only!</p>
      <p>What can you do with all this POOR? Details coming soon!</p>
      <p>
        To read more about this token contract check out the{' '}
        <a href="https://github.com/generEOS/poorman.token" target="new">
          poorman.token Github
        </a>
      </p>
    </div>
  );
};

export default PoormanInfo;
