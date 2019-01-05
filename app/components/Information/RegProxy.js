import React from 'react';

import { FormattedMessage, FormattedHTMLMessage } from 'react-intl';
import messages from './messages';

const RegProxy = () => {
  return (
    <div>
      <h5>
        <FormattedMessage {...messages.regProxyHeaderOne} />
      </h5>
      <p>
        <FormattedMessage {...messages.regProxyLineOne} />
      </p>
      <p>
        <FormattedMessage {...messages.regProxyLineTwo} />
      </p>
      <h5>
        <FormattedMessage {...messages.regProxyHeaderTwo} />
      </h5>
      <p>
        <FormattedMessage {...messages.regProxyLineThree} />
        <a href="https://www.alohaeos.com/vote/proxy" target="new">
          {' '}
          Aloha EOS Proxy Research Portal.
        </a>
      </p>
      <p>
        <FormattedMessage {...messages.regProxyLineFour1} />
        <a href="https://bloks.io/account/regproxyinfo" target="new">
          regproxyinfo
        </a>
        <FormattedMessage {...messages.regProxyLineFour2} />
        <a href="https://github.com/AlohaEOS/eos-proxyinfo" target="new">
          GitHub
        </a>
      </p>
      <p>
        <FormattedMessage {...messages.regProxyLineFive} />
      </p>
    </div>
  );
};

export default RegProxy;
