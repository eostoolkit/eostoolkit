/**
 *
 * LinkAuthForm
 *
 */

import React from 'react';

import Tool from 'components/Tool/Tool';
import ToolSection from 'components/Tool/ToolSection';
import ToolBody from 'components/Tool/ToolBody';

import LinkAuthInfo from 'components/Information/LinkAuth';

import LinkForm from './LinkForm';
import UnlinkForm from './UnlinkForm';

import commonMessages from '../../messages';

const LinkAuthForm = props => {
  const { intl } = props;
  return (
    <Tool>
      <ToolSection lg={8}>
        <LinkForm {...props} />
        <UnlinkForm {...props} />
      </ToolSection>
      <ToolSection lg={4}>
        <ToolBody color="info" header={intl.formatMessage(commonMessages.informationHeaderMessage)}>
          <LinkAuthInfo />
        </ToolBody>
      </ToolSection>
    </Tool>
  );
};

export default LinkAuthForm;
