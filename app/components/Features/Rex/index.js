/*
 * Author: Andre Litty
 * Project: eostoolkit
 * Date: 20.05.19
 * Version: 1.0
 */

import React from 'react';

import { FormattedMessage } from 'react-intl';

import Tool from 'components/Tool/Tool';
import ToolSection from 'components/Tool/ToolSection';
import ToolBody from 'components/Tool/ToolBody';

import Sell from './SellRex';
import BuyFromResources from './BuyRexResources';
import BuyFromToken from './BuyRexToken';

import commonMessages from '../../messages';

const RexForm = props => {
  const { intl } = props;
  return (
    <Tool>
      <ToolSection lg={8}>
        <BuyFromResources {...props} />
        <BuyFromToken {...props} />
        <Sell {...props} />
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

export default RexForm;
