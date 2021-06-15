import React from 'react';

// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import NetworksSelect from './NetworksSelect';

import tableStyle from 'assets/jss/tableStyle';

import messages from './messages';

function NetworksTable({ ...props }) {
  const { classes, selectNetwork, intl } = props;

  return (
    <div className={classes.tableResponsive}>
      <Table className={classes.table}>
        <TableHead className={classes.successRow}>
          <TableRow className={classes.tableRow}>
            <TableCell className={`${classes.tableHeadCell} ${classes.tableHeadFontSize}`}>
              {intl.formatMessage(messages.networkTableColumnName)}
            </TableCell>
            <TableCell className={`${classes.tableHeadCell} ${classes.tableHeadFontSize}`}>
              {intl.formatMessage(messages.networkTableColumnAPI)}
            </TableCell>
            <TableCell className={`${classes.tableHeadCell} ${classes.tableHeadFontSize}`}>
              {intl.formatMessage(messages.networkTableColumnHost)}
            </TableCell>
            <TableCell className={`${classes.tableHeadCell} ${classes.tableHeadFontSize}`}>
              {intl.formatMessage(messages.networkTableColumnSelect)}
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <NetworksSelect selectNetwork={selectNetwork} />
        </TableBody>
      </Table>
    </div>
  );
}

export default withStyles(tableStyle)(NetworksTable);
