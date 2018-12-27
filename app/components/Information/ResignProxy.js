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
        <FormattedHTMLMessage {...messages.resignProxyLineFour} />
      </p>
      <p>
        <FormattedHTMLMessage {...messages.resignProxyLineFive} />
      </p>
    </div>
  );
};

export default RegProxy;
