import React from 'react';

import { FormattedMessage, FormattedHTMLMessage } from 'react-intl';
import messages from './messages';

const Donate = () => {
  return (
    <div>
      <h5>
        <FormattedHTMLMessage {...messages.donateHeader} />
      </h5>
      <p>
        <FormattedHTMLMessage {...messages.donateLineOne} />
      </p>
      <p>
        <FormattedHTMLMessage {...messages.donateLineTwo} />
      </p>
      <p>
        <FormattedHTMLMessage {...messages.donateLineThree} />
      </p>
      <p>
        <FormattedHTMLMessage {...messages.donateLineFour} />
      </p>
      <p>
        <FormattedHTMLMessage {...messages.donateLineFive} />
      </p>
    </div>
  );
};

export default Donate;
