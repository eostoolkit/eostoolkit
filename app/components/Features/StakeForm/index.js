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

import { FormattedMessage } from 'react-intl';

import commonMessages from '../../messages';

const StakeForm = props => {
  const { intl } = props;
  return (
    <Tool>
      <ToolSection lg={8}>
        <Delegate {...props} />
        <Undelegate {...props} />
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

export default StakeForm;
