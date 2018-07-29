/**
 *
 * AirgrabForm
 *
 */

import React from 'react';

import CloudDownload from '@material-ui/icons/CloudDownload';
import Tool from 'components/Tool/Tool';
import ToolSection from 'components/Tool/ToolSection';
import ToolBody from 'components/Tool/ToolBody';

import PoormanInfo from 'components/Information/PoormanInfo'
import Disclaimer from 'components/Information/Disclaimer'

import AirgrabTable from './AirgrabTable';

const AirgrabForm = props => {
  const { handleSubmit } = props;
  return (
    <Tool>
      <ToolSection lg={8}>
        <ToolBody color="warning" icon={CloudDownload} header="Airgrab your Tokens!">
          <h6>Note: Airgrabbing tokens consumes your personal RAM.</h6>
          <h6>You cannot recover this RAM until the token has dropped.</h6>
          <Disclaimer/>
          <AirgrabTable handleSubmit={handleSubmit} />
          <p>
            Have an Airgrab you want here? Email us: <a href="mailto:contact@genereos.io">contact@genereos.io</a>
          </p>
        </ToolBody>
      </ToolSection>
      <ToolSection lg={4}>
        <ToolBody header="Poorman Token">
          <PoormanInfo />
        </ToolBody>
      </ToolSection>
    </Tool>
  );
};

export default AirgrabForm;
