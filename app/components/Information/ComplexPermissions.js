import React from 'react';

import { FormattedMessage, FormattedHTMLMessage } from 'react-intl';
import messages from './messages';

const permTree = `owner: { keys,accounts,delays... }\n\t
  active: { keys,accounts,delays... }\n\t\t
    delegate: { keys,accounts,delays... }`;

const ComplexPermissions = () => {
  return (
    <div>
      <h5>
        <FormattedHTMLMessage {...messages.complexPermissionsHeader} />
      </h5>
      <p>
        <FormattedHTMLMessage {...messages.complexPermissionsLineOne} />
      </p>
      <p>
        <FormattedHTMLMessage {...messages.complexPermissionsLineTow} />
      </p>
      <pre>{permTree}</pre>
      <p>
        <FormattedHTMLMessage {...messages.complexPermissionsLineThree} />
      </p>
      <h5>
        <FormattedMessage {...messages.complexPermissionsHeaderTwo} />
      </h5>
      <p>
        <FormattedHTMLMessage {...messages.complexPermissionsLineFour} />
      </p>
      <p>
        <FormattedHTMLMessage {...messages.complexPermissionsLineFive} />
      </p>
      <p>
        <FormattedHTMLMessage {...messages.complexPermissionsLineSix} />
      </p>
      <p>
        <FormattedHTMLMessage {...messages.complexPermissionsLineSeven} />
      </p>
      <p>
        <FormattedHTMLMessage {...messages.complexPermissionsLineEight} />
      </p>
      <p>
        <FormattedMessage {...messages.complexPermissionsLineNine} />
      </p>
      <h5>
        <FormattedMessage {...messages.complexPermissionsHeaderThree} />
      </h5>
      <p>
        <FormattedHTMLMessage {...messages.complexPermissionsLineTen} />
      </p>
    </div>
  );
};

export default ComplexPermissions;
