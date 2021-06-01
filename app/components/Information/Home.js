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
        <FormattedMessage {...messages.scatterInfo1} />
        <a href="https://github.com/greymass/anchor/releases" target="new">
          Anchor Wallet
        </a>
        <FormattedMessage {...messages.scatterInfo2} />
      </h4>
      <h4>
        <FormattedHTMLMessage {...messages.helpdesk1} />
        <a href="https://eoshelpdesk.zendesk.com" target="new">
          EOS Helpdesk
        </a>
        <FormattedHTMLMessage {...messages.helpdesk2} />
      </h4>
      <h4>
        <FormattedHTMLMessage {...messages.telegram1} />
        <a href="https://t.me/generEOS" target="new">
          Telegram
        </a>
        <FormattedHTMLMessage {...messages.telegram2} />
      </h4>
      <h4>
        <FormattedMessage {...messages.governanceLinkPart1} /> <NavLink to="/governance">EOS Governance</NavLink>{' '}
        <FormattedMessage {...messages.governanceLinkPart2} />
      </h4>
    </div>
  );
};

export default Home;
