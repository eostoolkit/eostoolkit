/**
 *
 * BidNameForm
 *
 */

import React from 'react';

// @material-ui/icons
import AccountBalance from '@material-ui/icons/AccountBalance';
import Tool from 'components/Tool/Tool';
import ToolSection from 'components/Tool/ToolSection';
import ToolBody from 'components/Tool/ToolBody';

import GovernanceDoc from 'components/Information/Governance';

import { injectIntl } from 'react-intl';
import messages from './messages';

const GovernancePage = props => {
  const { intl } = props;
  return (
    <Tool>
      <ToolSection lg={12}>
        <ToolBody
          color="warning"
          icon={AccountBalance}
          header={intl.formatMessage(messages.governancePageHeader)}
          subheader={intl.formatMessage(messages.governancePageSubHeader)}>
          <GovernanceDoc />
        </ToolBody>
      </ToolSection>
    </Tool>
  );
};

export default (injectIntl(GovernancePage));
