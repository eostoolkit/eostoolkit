import React from 'react';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

const Home = () => {
  return (
    <div>
      <h5>
        <FormattedMessage {...messages.poorInfoLineOne} />
      </h5>
      <h5>
        <FormattedMessage {...messages.poorInfoLineTwo} />
      </h5>
      <p>
        <FormattedMessage {...messages.poorInfoLineThree} />
      </p>
      <p>
        <FormattedMessage {...messages.poormanInfoLineFour} />
      </p>
    </div>
  );
};

export default Home;
