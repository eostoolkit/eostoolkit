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
import UnstakeForm from './unstakeForm';
import StakeTable from './stakeTable';
import ClaimForm from './claimForm';

const HireVibes = props => {
  return (
    <Tool>
      <ToolSection xs={12} lg={6}>
        <StakeTable {...props} />
        <ClaimForm {...props} />
      </ToolSection>
      <ToolSection xs={12} lg={6}>
        <StakeForm {...props} />
        <UnstakeForm {...props} />
      </ToolSection>
    </Tool>
  );
};

export default HireVibes;
