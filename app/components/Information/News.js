import React from 'react';
import { NavLink } from 'react-router-dom';
import withStyles from '@material-ui/core/styles/withStyles';

import { FormattedMessage, FormattedHTMLMessage } from 'react-intl';
import messages from './messages';

const News = () => {
  return (
    <div>
      <h3>
        <FormattedMessage {...messages.multiChainHeader} />
      </h3> 
      <h4>
        <FormattedMessage {...messages.multiChain1} />
        <a href="/networks" target="_self">
          [Change Network]
        </a>
        <FormattedMessage {...messages.multiChain2} />
      </h4>
      <h6 color="grey">
        <FormattedMessage {...messages.multiChain3} />
        <a href="https://github.com/eostoolkit/eos-networks/blob/master/networks.json" target="new">
          here
        </a>
      </h6>
    </div>
  );
};

export default withStyles(withStyles)(News);
