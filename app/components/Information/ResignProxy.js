import React from 'react';

const RegProxy = () => {
  return (
    <div>
      <h5>Resign Proxy</h5>
      <p>
        By resigning as proxy you will no longer vote on behalf of others who set you as their proxy. Vote weight
        changes immediately. All accounts that had you set as a proxy will no longer have any votes.
      </p>
      <p>As a courtesy please attempt to notify these accounts.</p>
      <h5>Unregister Proxy Info</h5>
      <p>If you had previously registered your Proxy Info, please unregister to keep the proxy database clean.</p>
      <p>
        This is an on-chain EOS contract (or dApp) that allows EOS proxy accounts to register additional information
        about themselves, such as name and website. This information is published on the EOS blockchain and freely
        available to be republished. An example website that uses this information is the{' '}
        <a href="https://www.alohaeos.com/vote/proxy" target="new">
          Aloha EOS Proxy Research Portal
        </a>.
      </p>
      <p>
        The contract is published on the{' '}
        <a href="https://bloks.io/account/regproxyinfo" target="new">
          regproxyinfo
        </a>{' '}
        account on the EOS mainnet. More information about this project can be found on{' '}
        <a href="https://github.com/AlohaEOS/eos-proxyinfo" target="new">
          GitHub
        </a>
      </p>
    </div>
  );
};

export default RegProxy;
