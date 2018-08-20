/**
 *
 * LinkAuthForm
 *
 */

import React from 'react';

import Tool from 'components/Tool/Tool';
import ToolSection from 'components/Tool/ToolSection';
import ToolBody from 'components/Tool/ToolBody';

import StakeForm from './stakeForm';
import StakeTable from './stakeTable';

const HorusPay = props => {
  return (
    <Tool>
      <ToolSection lg={12}>
        <StakeForm {...props} />
        <StakeTable {...props} />
      </ToolSection>
    </Tool>
  );
};

export default HorusPay;
