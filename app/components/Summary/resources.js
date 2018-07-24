import React from 'react';

// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

import tableStyle from 'assets/jss/tableStyle';

function ResourcesTable({ ...props }) {
  const { classes, account } = props;
  return (
    <div className={classes.tableResponsive}>
      <Table className={classes.table}>
        <TableBody>
          <TableRow className={`${classes.tableRowHover}`}>
            <TableCell className={classes.tableCell}>
              <h6>EOS</h6>
            </TableCell>
            <TableCell className={classes.tableCell}>
              {account.core_liquid_balance ? account.core_liquid_balance : '0.0000 EOS'}
            </TableCell>
            <TableCell className={classes.tableCell}>
              <h6>RAM</h6>
            </TableCell>
            <TableCell className={classes.tableCell}>
              {account.ram_usage} bytes used<br />
              {account.ram_quota} bytes owned
            </TableCell>
            <TableCell className={classes.tableCell}>
              <h6>CPU</h6>
            </TableCell>
            <TableCell className={classes.tableCell}>
              {account.total_resources.cpu_weight}
              <br />({Number((account.cpu_limit.used / account.cpu_limit.max) * 100).toFixed(2)} % used)
            </TableCell>
            <TableCell className={classes.tableCell}>
              <h6>NET</h6>
            </TableCell>
            <TableCell className={classes.tableCell}>
              {account.total_resources.net_weight}
              <br />({Number((account.net_limit.used / account.net_limit.max) * 100).toFixed(2)} % used)
            </TableCell>
            <TableCell className={classes.tableCell}>
              <h6>REFUNDING</h6>
            </TableCell>
            <TableCell className={classes.tableCell}>
              {account && account.refund_request ? (
                <span>CPU: {account.refund_request.cpu_amount}
                <br />NET: {account.refund_request.net_amount}</span>
              ) : (
                <span>None</span>
              )}
            </TableCell>
          </TableRow>
          <TableRow className={`${classes.tableStripedRow} ${classes.tableRowHover}`}>
            <TableCell className={classes.tableCell}>
              <h6>Tokens</h6>
            </TableCell>
            <TableCell className={classes.tableCell} colSpan={9}>
              <h6>{account.balances.map(bal => bal.balance).join(', ')}</h6>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
}

export default withStyles(tableStyle)(ResourcesTable);
