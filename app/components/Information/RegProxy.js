import React from 'react';

const RegProxy = () => {
  return (
    <div>
      <h5>Create Proxy</h5>
      <p>
        By becoming a proxy you can vote on behalf of others who set you as their proxy. This can be as simple as
        managing voting for your own accounts, or as complex as becoming a world wide proxy.
      </p>
      <p>
        If you do wish to use your proxy powers for the community, we suggest you participate in the Register Proxy Info
        project:
      </p>
      <h5>Register Proxy Info</h5>
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
      <p>
        This action will use your Proxy Account RAM allocation. Depending on how much detail you provide, this could be
        as large as 1kB
      </p>
    </div>
  );
};

export default RegProxy;
