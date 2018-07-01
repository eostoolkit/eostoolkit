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

function BalancesTable({ ...props }) {
  const { classes, account } = props;
  return (
    <div className={classes.tableResponsive}>
      <Table className={classes.table}>
        <TableHead className={classes.successRow}>
          <TableRow className={classes.tableRow}>
            <TableCell className={`${classes.tableHeadCell} ${classes.tableHeadFontSize}`} colSpan={2}>
              <FormattedMessage {...messages.tokenBalance} />
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {account.balances.length > 0 ? (
            account.balances.map(row => {
              return (
                <TableRow className={classes.tableRowHover} key={row.balance}>
                  <TableCell className={classes.tableCell}>{row.account}</TableCell>
                  <TableCell className={classes.tableCell}>{row.balance}</TableCell>
                </TableRow>
              );
            })
          ) : (
            <TableRow className={classes.tableRowHover}>
              <TableCell className={classes.tableCell} colSpan={2}>
                <FormattedMessage {...messages.noTokenBalance} />
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
}

export default withStyles(tableStyle)(BalancesTable);
