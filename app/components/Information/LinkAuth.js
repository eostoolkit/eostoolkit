import React from 'react';

import { FormattedMessage, FormattedHTMLMessage } from 'react-intl';
import messages from './messages';

const LinkAuth = () => {
  return (
    <div>
      <h5>
        <FormattedMessage {...messages.linkAuthHeaderOne} />
      </h5>
      <p>
        <FormattedMessage {...messages.linkAuthLineOne} />
      </p>
      <p>
        <FormattedMessage {...messages.linkAuthLineTwo} />
      </p>
      <p>
        <FormattedHTMLMessage {...messages.linkAuthLineThree} />
      </p>
      <p>
        <FormattedHTMLMessage {...messages.linkAuthLineFour} />
      </p>
      <p>
        <FormattedMessage {...messages.linkAuthLineFive} />
      </p>
      <h5>
        <FormattedMessage {...messages.linkAuthHeaderTwo} />
      </h5>
      <p>
        <FormattedMessage {...messages.linkAuthLineSix} />
      </p>
    </div>
  );
};

export default LinkAuth;
