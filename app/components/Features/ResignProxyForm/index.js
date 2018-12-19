/**
 *
 * ResignProxyForm
 *
 */

import React from 'react';

import Tool from 'components/Tool/Tool';
import ToolSection from 'components/Tool/ToolSection';
import ToolBody from 'components/Tool/ToolBody';

import ResignProxyInfo from 'components/Information/ResignProxy';

import ResignForm from './ResignForm';
import UnregForm from './UnregForm';

import commonMessages from '../../messages';

const ResignProxyForm = props => {
  const { intl } = props;
  return (
    <Tool>
      <ToolSection lg={8}>
        <ResignForm {...props} />
        <UnregForm {...props} />
      </ToolSection>
      <ToolSection lg={4}>
        <ToolBody color="info" header={intl.formatMessage(commonMessages.informationHeaderMessage)}>
          <ResignProxyInfo />
        </ToolBody>
      </ToolSection>
    </Tool>
  );
};

export default ResignProxyForm;
