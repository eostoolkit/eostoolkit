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

import commonMessages from '../../messages';

const CreateProxyForm = props => {
  const { intl } = props;
  return (
    <Tool>
      <ToolSection lg={8}>
        <CreateForm {...props} />
        <RegForm {...props} />
      </ToolSection>
      <ToolSection lg={4}>
        <ToolBody color="info" header={intl.formatMessage(commonMessages.informationHeaderMessage)}>
          <RegProxyInfo />
        </ToolBody>
      </ToolSection>
    </Tool>
  );
};

export default CreateProxyForm;
