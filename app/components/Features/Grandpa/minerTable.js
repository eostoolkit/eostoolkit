import React from 'react';
import ReactTable from 'react-table';

import Tool from 'components/Tool/Tool';
import ToolSection from 'components/Tool/ToolSection';
import ToolBody from 'components/Tool/ToolBody';
import GridContainer from 'components/Grid/GridContainer';
import GridItem from 'components/Grid/GridItem';
import Button from 'components/CustomButtons/Button';

// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import tableStyle from 'assets/jss/tableStyle';

import Undo from '@material-ui/icons/Undo';
import AccountBalance from '@material-ui/icons/AccountBalance';

import CircularProgress from '@material-ui/core/CircularProgress';

const MinerTable = props => {
  const { miner, loading, classes, ...clientProps } = props;
  const round = miner ? miner.round : null;

  return (
    <ToolBody
      color="warning"
      icon={AccountBalance}
      header="GrandpaCoins" subheader=" - Let's make these old coins move FAST">
        <p>Transfer the highest VOLUME of coins to win the Jackpot!</p>
        <p>Will you win by speed or by being a whale?</p>
        <p>The winning coin gets the Team Dividend divided amongst all holders</p>
        <div className={classes.tableResponsive}>
          <Table className={classes.table}>
            <TableHead className={classes.successRow}>
              <TableRow className={classes.tableRow}>
                <TableCell className={`${classes.tableHeadCell} ${classes.tableHeadFontSize}`} colSpan={2}>
                   Round Info - Ends Nov 31 (1:00 UTC)
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow className={classes.tableRowHover}>
                <TableCell className={classes.tableCell}><h3>Jackpot</h3></TableCell>
                <TableCell className={classes.tableCell}><h3>{`${Number(round ? round.rewards.jackpot/10000 : 0).toFixed(4)} EOS`}</h3></TableCell>
              </TableRow>
              <TableRow className={`${classes.tableStripedRow} ${classes.tableRowHover}`}>
                <TableCell className={classes.tableCell}>Chief Miner</TableCell>
                <TableCell className={classes.tableCell}><h4>{round ? round.current_miner : 'Loading'}</h4></TableCell>
              </TableRow>
              <TableRow className={classes.tableRowHover}>
                <TableCell className={classes.tableCell}>Usurp Fee</TableCell>
                <TableCell className={classes.tableCell}><h4>{round ? `${(Number(round.current_fee.split(' ')[0])*1.25).toFixed(4)} EOS` : 'Loading'}</h4></TableCell>
              </TableRow>
              <TableRow className={`${classes.tableStripedRow} ${classes.tableRowHover}`}>
                <TableCell className={classes.tableCell}>Miner changed on</TableCell>
                <TableCell className={classes.tableCell}>{round ? `${new Date(round.updated_on/1000).toLocaleString()}` : 'Loading'}</TableCell>
              </TableRow>
              <TableRow className={`${classes.tableRowHover}`}>
                <TableCell className={classes.tableCell}>Team Dividend</TableCell>
                <TableCell className={classes.tableCell}>{`${Number(round ? round.rewards.team_div/10000 : 0).toFixed(4)} EOS`}</TableCell>
              </TableRow>
              <TableRow className={`${classes.tableStripedRow} ${classes.tableRowHover}`}>
                <TableCell className={classes.tableCell}>Carry Forward</TableCell>
                <TableCell className={classes.tableCell}>{`${Number(round ? round.rewards.carry_forward/10000 : 0).toFixed(4)} EOS`}</TableCell>
              </TableRow>
              <TableRow className={`${classes.tableRowHover}`}>
                <TableCell className={classes.tableCell}>Developer Fund</TableCell>
                <TableCell className={classes.tableCell}>{`${Number(round ? round.rewards.dev_fund/10000 : 0).toFixed(4)} EOS`}</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>

    </ToolBody>
  );
};

export default withStyles(tableStyle)(MinerTable);
