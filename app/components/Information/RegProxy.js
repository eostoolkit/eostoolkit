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
        <FormattedHTMLMessage {...messages.regProxyLineThree} />
      </p>
      <p>
        <FormattedHTMLMessage {...messages.regProxyLineFour} />
      </p>
      <p>
        <FormattedMessage {...messages.regProxyLineFive} />
      </p>
    </div>
  );
};

export default RegProxy;
