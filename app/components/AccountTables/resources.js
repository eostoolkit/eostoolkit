import React from 'react';
import { FormattedMessage } from 'react-intl';
// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import tableStyle from 'assets/jss/tableStyle';
import messages from './messages';

function ResourcesTable({ ...props }) {
  const { classes, account } = props;
  return (
    <div className={classes.tableResponsive}>
      <Table className={classes.table}>
        <TableHead className={classes.infoRow}>
          <TableRow className={classes.tableRow}>
            <TableCell className={`${classes.tableHeadCell} ${classes.tableHeadFontSize}`} colSpan={2}>
              <FormattedMessage {...messages.resources} />
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow className={`${classes.tableStripedRow} ${classes.tableRowHover}`}>
            <TableCell className={classes.tableCell}>
              <FormattedMessage {...messages.ram} />
            </TableCell>
            <TableCell className={classes.tableCell}>
              {account.ram_usage} <FormattedMessage {...messages.bytes} /> <FormattedMessage {...messages.used} />
              <br />
              {account.ram_quota} <FormattedMessage {...messages.bytes} /> <FormattedMessage {...messages.maximum} />
            </TableCell>
          </TableRow>
          <TableRow className={classes.tableRowHover}>
            <TableCell className={classes.tableCell}>
              <FormattedMessage {...messages.net} />
            </TableCell>
            <TableCell className={classes.tableCell}>
              {account.total_resources.net_weight}
              <br />({Number((account.net_limit.used / account.net_limit.max) * 100).toFixed(2)} % used)
            </TableCell>
          </TableRow>
          <TableRow className={`${classes.tableStripedRow} ${classes.tableRowHover}`}>
            <TableCell className={classes.tableCell}>
              <FormattedMessage {...messages.cpu} />
            </TableCell>
            <TableCell className={classes.tableCell}>
              {account.total_resources.cpu_weight}
              <br />({Number((account.cpu_limit.used / account.cpu_limit.max) * 100).toFixed(2)} % used)
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
}

export default withStyles(tableStyle)(ResourcesTable);
