import React from 'react';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

const BlockOneLetter = () => {
  return (
    <div>
      <h5>
        <FormattedMessage {...messages.blockOneLetterHeader} />
      </h5>
      <p>
        <FormattedMessage {...messages.blockOneLetterText1} />
      </p>
      <p>
        <FormattedMessage {...messages.blockOneLetterText2} />
      </p>
      <p>
        <FormattedMessage {...messages.blockOneLetterText3} />
      </p>
      <p>
        <FormattedMessage {...messages.blockOneLetterText4} />{' '}
        <a href="mailto:bp@eos.io?Subject=I%20Support%20GenerEOS">bp@eos.io</a>
      </p>
      <p>
        <FormattedMessage {...messages.blockOneLetterText5} />
      </p>
      <p>
        <strong>&hearts;,</strong>
        <br />
        Team GenerEOS
      </p>
    </div>
  );
};

export default BlockOneLetter;
