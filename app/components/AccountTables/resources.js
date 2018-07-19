import React from 'react';

// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import tableStyle from 'assets/jss/tableStyle';

function ResourcesTable({ ...props }) {
  const { classes, account } = props;
  return (
    <div className={classes.tableResponsive}>
      <Table className={classes.table}>
        <TableHead className={classes.infoRow}>
          <TableRow className={classes.tableRow}>
            <TableCell className={`${classes.tableHeadCell} ${classes.tableHeadFontSize}`} colSpan={2}>
              Resources
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow className={`${classes.tableRowHover}`}>
            <TableCell className={classes.tableCell}>EOS</TableCell>
            <TableCell className={classes.tableCell}>{account.core_liquid_balance ? account.core_liquid_balance : '0.0000 EOS'}</TableCell>
          </TableRow>
          <TableRow className={`${classes.tableStripedRow} ${classes.tableRowHover}`}>
            <TableCell className={classes.tableCell}>RAM</TableCell>
            <TableCell className={classes.tableCell}>
              {account.ram_usage} bytes used<br />
              {account.ram_quota} bytes owned
            </TableCell>
          </TableRow>
          <TableRow className={`${classes.tableRowHover}`}>
            <TableCell className={classes.tableCell}>CPU</TableCell>
            <TableCell className={classes.tableCell}>
              {account.total_resources.cpu_weight}
              <br />({Number((account.cpu_limit.used / account.cpu_limit.max) * 100).toFixed(2)} % used)
            </TableCell>
          </TableRow>
          <TableRow className={`${classes.tableStripedRow} ${classes.tableRowHover}`}>
            <TableCell className={classes.tableCell}>NET</TableCell>
            <TableCell className={classes.tableCell}>
              {account.total_resources.net_weight}
              <br />({Number((account.net_limit.used / account.net_limit.max) * 100).toFixed(2)} % used)
            </TableCell>
          </TableRow>
          <TableRow className={`${classes.tableRowHover}`}>
            <TableCell className={classes.tableCell}>REFUND</TableCell>
            <TableCell className={classes.tableCell}>
              CPU: {account.refund_request ? account.refund_request.cpu_amount : '0.0000 EOS'}
              <br />NET: {account.refund_request ? account.refund_request.net_amount : '0.0000 EOS'}
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
}

export default withStyles(tableStyle)(ResourcesTable);
