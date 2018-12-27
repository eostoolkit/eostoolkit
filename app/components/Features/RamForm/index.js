/**
 *
 * LinkAuthForm
 *
 */

import React from 'react';

import Tool from 'components/Tool/Tool';
import ToolSection from 'components/Tool/ToolSection';
import ToolBody from 'components/Tool/ToolBody';

import BuyRam from './BuyRamForm';
import SellRam from './SellRamForm';

import { FormattedMessage } from 'react-intl';

import commonMessages from '../../messages';

const RamForm = props => {
  const { intl } = props;
  return (
    <Tool>
      <ToolSection lg={8}>
        <BuyRam {...props} />
        <SellRam {...props} />
      </ToolSection>
      <ToolSection lg={4}>
        <ToolBody color="info" header={intl.formatMessage(commonMessages.informationHeaderMessage)}>
          <p>
            <FormattedMessage {...commonMessages.tutorialComingSoonMessage} />
          </p>
        </ToolBody>
      </ToolSection>
    </Tool>
  );
};

export default RamForm;
