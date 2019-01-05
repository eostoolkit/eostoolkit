import React from 'react';

import { FormattedMessage, FormattedHTMLMessage } from 'react-intl';
import messages from './messages';

// Poorman token info
const PoormanInfo = () => {
  return (
    <div>
      <h5>
        <FormattedMessage {...messages.poormanInfoHeader} />
      </h5>
      <p>
        <FormattedMessage {...messages.poormanInfoLineOne} />
      </p>
      <p>
        <FormattedMessage {...messages.poormanInfoLineTwo} />
      </p>
      <p>
        <FormattedMessage {...messages.poormanInfoLineThree} />
      </p>
      <p>
        <FormattedMessage {...messages.poormanInfoLineFour} />
      </p>
      <p>
        <FormattedMessage {...messages.poormanInfoLineFive} />
      </p>
      <p>
        <FormattedMessage {...messages.poormanInfoLineSix} />
      </p>
      <p>
        <FormattedMessage {...messages.poormanInfoLineSeven} />
      </p>
      <p>
        <FormattedMessage {...messages.poormanInfoLineEigth} />
      </p>
      <p>
        <FormattedMessage {...messages.poormanInfoLineNine} />
        <a href="https://github.com/generEOS/poorman.token" target="new">
          poorman.token Github
        </a>
      </p>
    </div>
  );
};

export default PoormanInfo;
