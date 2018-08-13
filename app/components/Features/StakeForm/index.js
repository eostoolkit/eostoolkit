/**
 *
 * LinkAuthForm
 *
 */

import React from 'react';

import Tool from 'components/Tool/Tool';
import ToolSection from 'components/Tool/ToolSection';
import ToolBody from 'components/Tool/ToolBody';

import Delegate from './DelegateForm';
import Undelegate from './UndelegateForm';

const StakeForm = props => {
  return (
    <Tool>
      <ToolSection lg={8}>
        <Delegate {...props} />
        <Undelegate {...props} />
      </ToolSection>
      <ToolSection lg={4}>
        <ToolBody color="info" header="Information">
          <p>Tutorial coming soon</p>
        </ToolBody>
      </ToolSection>
    </Tool>
  );
};

export default StakeForm;
