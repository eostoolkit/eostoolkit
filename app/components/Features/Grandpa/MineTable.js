import React from 'react';

// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles';
import ToolBody from 'components/Tool/ToolBody';
import Button from 'components/CustomButtons/Button';
import Restore from '@material-ui/icons/Restore';
import tableStyle from 'assets/jss/tableStyle';

import { FormattedMessage } from 'react-intl';

import messages from './messages';

function MineTable({ ...props }) {
  const { classes, handleSubmit, account, tokens, stats, referrer, intl } = props;
  return (
    <ToolBody
      color="success"
      icon={Restore}
      header={intl.formatMessage(messages.grandpaMineTableHeader)}
      subheader={intl.formatMessage(messages.grandpaMineTableSubHeader)}>
      <div>
        <p>
          <FormattedMessage {...messages.grandpaMineTableInfotextOne} />
        </p>
        <p>
          <FormattedMessage {...messages.grandpaMineTableInfotextTwo} />
        </p>
        <Button onClick={() => handleSubmit()} color="rose">
          <FormattedMessage {...messages.grandpaMineTableButton} />
        </Button>
      </div>
    </ToolBody>
  );
}

export default withStyles(tableStyle)(MineTable);
