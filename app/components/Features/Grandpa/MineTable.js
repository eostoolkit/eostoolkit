import React from 'react';

// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles';
import ToolBody from 'components/Tool/ToolBody';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Button from 'components/CustomButtons/Button';
import Restore from '@material-ui/icons/Restore';
import tableStyle from 'assets/jss/tableStyle';

function MineTable({ ...props }) {
  const { classes, handleSubmit, account, tokens, stats, referrer } = props;
  return (
    <ToolBody
      color="success"
      icon={Restore}
      header="Mining" subheader=" - You can mine every 12 hours">
      {referrer ? (<h5>You are being referred by {"'"}{referrer}{"'"}</h5>) : ('')}
      <p>First time miners earn 100 coins. Repeat mining earns 5 coins.</p>
      <p>Referrers get a bonus 5% - The Chief Miner gets a bonus 10%</p>
    <div className={classes.tableResponsive}>
      <Table className={classes.table}>
        <TableHead className={classes.successRow}>
          <TableRow className={classes.tableRow}>
            <TableCell className={`${classes.tableHeadCell} ${classes.tableHeadFontSize}`}>Symbol</TableCell>
            <TableCell className={`${classes.tableHeadCell} ${classes.tableHeadFontSize}`}>Last Mined</TableCell>
            <TableCell className={`${classes.tableHeadCell} ${classes.tableHeadFontSize}`}>Mining</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tokens.length > 0 ? (
            tokens.map(row => {
              const thisStat = stats ? stats.find(s=>s.token === row) : null;
              const thisMined = thisStat ? thisStat.account.lastMined : null;
              return (
                <TableRow className={classes.tableRowHover} key={row}>
                  <TableCell className={classes.tableCell}>{row}</TableCell>
                  <TableCell className={classes.tableCell}>{thisMined ? thisMined : 'Never'}</TableCell>
                  <TableCell className={classes.tableCell}>
                      <Button onClick={() => handleSubmit(row)} color="rose">
                        Mine it!
                      </Button>
                  </TableCell>
                </TableRow>
              );
            })
          ) : (
            <TableRow className={classes.tableRowHover}>
              <TableCell className={classes.tableCell} colSpan={3}>
                Loading
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
    </ToolBody>
  );
}

export default withStyles(tableStyle)(MineTable);
