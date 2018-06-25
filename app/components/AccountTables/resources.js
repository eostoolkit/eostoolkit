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
          <TableCell className={classes.tableHeadCell} colSpan={2}>
            Resources
          </TableCell>
        </TableHead>
        <TableBody>
          <TableRow className={`${classes.tableStripedRow} ${classes.tableRowHover}`}>
            <TableCell className={classes.tableCell}>RAM</TableCell>
            <TableCell className={classes.tableCell}>
              {account.ram_usage} kB used<br />
              {account.ram_quota} kB owned
            </TableCell>
          </TableRow>
          <TableRow className={classes.tableRowHover}>
            <TableCell className={classes.tableCell}>NET</TableCell>
            <TableCell className={classes.tableCell}>
              {account.total_resources.net_weight}
              <br />({Number((account.net_limit.used / account.net_limit.max) * 100).toFixed(2)} % used)
            </TableCell>
          </TableRow>
          <TableRow className={`${classes.tableStripedRow} ${classes.tableRowHover}`}>
            <TableCell className={classes.tableCell}>CPU</TableCell>
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
