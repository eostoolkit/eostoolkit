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

const RamForm = props => {
  return (
    <Tool>
      <ToolSection lg={8}>
        <BuyRam {...props} />
        <SellRam {...props} />
      </ToolSection>
      <ToolSection lg={4}>
        <ToolBody color="info" header="Information">
          <p>Tutorial coming soon</p>
        </ToolBody>
      </ToolSection>
    </Tool>
  );
};

export default RamForm;
