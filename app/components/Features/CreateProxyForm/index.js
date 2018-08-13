/**
 *
 * CreateProxyForm
 *
 */

import React from 'react';

import Tool from 'components/Tool/Tool';
import ToolSection from 'components/Tool/ToolSection';
import ToolBody from 'components/Tool/ToolBody';

import RegProxyInfo from 'components/Information/RegProxy';

import CreateForm from './CreateForm';
import RegForm from './RegForm';

const CreateProxyForm = props => {
  return (
    <Tool>
      <ToolSection lg={8}>
        <CreateForm {...props} />
        <RegForm {...props} />
      </ToolSection>
      <ToolSection lg={4}>
        <ToolBody color="info" header="Information">
          <RegProxyInfo />
        </ToolBody>
      </ToolSection>
    </Tool>
  );
};

export default CreateProxyForm;
