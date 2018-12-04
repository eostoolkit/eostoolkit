import React from 'react';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

const ChangePermissions = () => {
  return (
    <div>
      <h5>
        <strong>
          <FormattedMessage {...messages.changePermissionsHeader} />
        </strong>
      </h5>
      <h5>
        <FormattedMessage {...messages.changePermissionsHeaderTow} />
      </h5>
      <h5>
        <FormattedMessage {...messages.changePermissionsHeaderThree} />
      </h5>
      <p>
        <FormattedMessage {...messages.changePermissionsLineOne} />
      </p>
      <p>
        <FormattedMessage {...messages.changePermissionsLineTwo} />
      </p>
      <p>
        <FormattedMessage {...messages.changePermissionsLineThree} />
      </p>
      <p>
        <FormattedMessage {...messages.changePermissionsLineFour} />
      </p>
      <p>
        <FormattedMessage {...messages.changePermissionsLineFive} />
      </p>
      <p>
        <FormattedMessage {...messages.changePermissionsLineSix} />
      </p>
    </div>
  );
};

export default ChangePermissions;
