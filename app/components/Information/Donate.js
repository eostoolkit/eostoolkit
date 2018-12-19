import React from 'react';

import { FormattedMessage, FormattedHTMLMessage } from 'react-intl';
import messages from './messages';

const Donate = () => {
  return (
    <div>
      <h5>
        <FormattedMessage {...messages.donateHeader} />
      </h5>
      <p>
        <FormattedHTMLMessage {...messages.donateLineOne} />
      </p>
      <p>
        <FormattedHTMLMessage {...messages.donateLineTwo} />
      </p>
      <p>
        <FormattedMessage {...messages.donateLineThree} />
      </p>
      <p>
        <FormattedHTMLMessage {...messages.donateLineFour} />
      </p>
      <p>
        <FormattedHTMLMessage {...messages.donateLineFive} />
      </p>
      <p>
        <strong>&hearts;,</strong>
        <br />
        Nathan Rempel, Team GenerEOS
      </p>
    </div>
  );
};

export default Donate;
