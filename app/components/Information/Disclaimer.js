// Standard disclaimer for executing EOS transactions
import React from 'react';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

const Disclaimer = () => (
  <p>
    <FormattedMessage {...messages.disclaimerText} />
  </p>
);

export default Disclaimer;
