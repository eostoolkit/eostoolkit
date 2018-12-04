import React from 'react';
import { NavLink } from 'react-router-dom';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

const Home = () => {
  return (
    <div>
      <h3>
        <FormattedMessage {...messages.grandpaLineOne} />
      </h3>
      <h5>
        <FormattedMessage {...messages.grandpaLineTwo} />
      </h5>
      <h5>
        <FormattedMessage {...messages.grandpaLineThree} />
      </h5>
      <h5>
        <FormattedMessage {...messages.grandpaLineFour} />
      </h5>
      <h5>
        <FormattedMessage {...messages.grandpaLineFive} />
      </h5>
      <h5>
        <FormattedMessage {...messages.grandpaLineSix} />
      </h5>
      <h3>
        <FormattedMessage {...messages.grandpaLineSeven} />
      </h3>
      <h5>
        <FormattedMessage {...messages.grandpaLineEight} />
      </h5>
      <h3>
        <FormattedMessage {...messages.grandpaLineNine} />
      </h3>
    </div>
  );
};

export default Home;
