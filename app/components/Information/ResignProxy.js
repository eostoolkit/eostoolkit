import React from 'react';

import { FormattedMessage, FormattedHTMLMessage } from 'react-intl';
import messages from './messages';

const RegProxy = () => {
  return (
    <div>
      <h5>
        <FormattedMessage {...messages.resignProxyHeaderOne} />
      </h5>
      <p>
        <FormattedMessage {...messages.resignProxyLineOne} />
      </p>
      <p>
        <FormattedMessage {...messages.resignProxyLineTwo} />
      </p>
      <h5>
        <FormattedMessage {...messages.resignProxyHeaderTwo} />
      </h5>
      <p>
        <FormattedMessage {...messages.resignProxyLineThree} />
      </p>
      <p>
        <FormattedMessage {...messages.resignProxyLineFour} />
        <a href="https://www.alohaeos.com/vote/proxy" target="new">
          Aloha EOS Proxy Research Portal.
        </a>
      </p>
      <p>
        <FormattedMessage {...messages.resignProxyLineFive} />
        <a href="https://bloks.io/account/regproxyinfo" target="new">
          regproxyinfo
        </a>
        <FormattedMessage {...messages.resignProxyLineFive} />
        <a href="https://github.com/AlohaEOS/eos-proxyinfo" target="new">
          GitHub
        </a>
      </p>
    </div>
  );
};

export default RegProxy;
