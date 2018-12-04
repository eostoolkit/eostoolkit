import React from 'react';
import { NavLink } from 'react-router-dom';

import { FormattedMessage, FormattedHTMLMessage } from 'react-intl';
import messages from './messages';

const Home = () => {
  return (
    <div>
      <h3>
        <FormattedMessage {...messages.homeHeader} />
      </h3>
      <h4>
        <FormattedHTMLMessage {...messages.scatterInfo} />
      </h4>
      <h4>
        <FormattedHTMLMessage {...messages.helpdesk} />
      </h4>
      <h4>
        <FormattedHTMLMessage {...messages.telegram} />
      </h4>
      <h4>
        <FormattedMessage {...messages.governanceLinkPart1} /> <NavLink to="/governance">EOS Governance</NavLink>{' '}
        <FormattedMessage {...messages.governanceLinkPart2} />
      </h4>
    </div>
  );
};

export default Home;
