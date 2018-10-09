import React from 'react';
import ReactTable from 'react-table';

import Tool from 'components/Tool/Tool';
import ToolSection from 'components/Tool/ToolSection';
import ToolBody from 'components/Tool/ToolBody';
import GridContainer from 'components/Grid/GridContainer';
import GridItem from 'components/Grid/GridItem';
import Button from 'components/CustomButtons/Button';
import Card from "components/Card/Card";
import CardAvatar from "components/Card/CardAvatar";
import CardBody from 'components/Card/CardBody';
import CardHeader from 'components/Card/CardHeader';

// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import tableStyle from 'assets/jss/tableStyle';

import bitcoin from 'assets/img/bitcoin-old.png';
import dogecoin from 'assets/img/dogecoin-old.png';
import ethereum from 'assets/img/ethereum-old.png';

const MinerTable = props => {
  const { token, symbol, loading, classes, ...clientProps } = props;
  const velocity = token ? token.velocity : null;
  const quantity = token ? token.quantity : null;
  const avatars = {'ETH': ethereum,'BTC': bitcoin,'DOGE': dogecoin};

  //balance
  //velocity
  //quantity
  //supply
  //last_transfer

  return (
    <Card profile>
        <CardAvatar profile>
            <img src={avatars[symbol]} alt="..." />
        </CardAvatar>
        <CardBody profile>
        <div className={classes.tableResponsive}>
          <Table className={classes.table}>
            <TableBody>
              <TableRow className={`${classes.tableStripedRow} ${classes.tableRowHover}`}>
                <TableCell className={classes.tableCell}>My Balance</TableCell>
                <TableCell className={classes.tableCell}>{token ? token.account.balance : 'Loading'}</TableCell>
              </TableRow>
              <TableRow className={classes.tableRowHover}>
                <TableCell className={classes.tableCell}>Coin Supply</TableCell>
                <TableCell className={classes.tableCell}>{token ? token.supply : 'Loading'}</TableCell>
              </TableRow>
              <TableRow className={`${classes.tableStripedRow} ${classes.tableRowHover}`}>
                <TableCell className={classes.tableCell}>My Quantity</TableCell>
                <TableCell className={classes.tableCell}>{token ? (token.account.quantity ? token.account.quantity : `0.0000 ${symbol}`) : 'Loading'}</TableCell>
              </TableRow>
              <TableRow className={`${classes.tableRowHover}`}>
                <TableCell className={classes.tableCell}>Highest Quantity</TableCell>
                <TableCell className={classes.tableCell}>{quantity ? `${quantity.owner} (${quantity.value/10000} ${symbol})` : 'Loading'}</TableCell>
              </TableRow>
              <TableRow className={`${classes.tableStripedRow} ${classes.tableRowHover}`}>
                <TableCell className={classes.tableCell}>My Velocity</TableCell>
                <TableCell className={classes.tableCell}>{token ? `${token.account.velocity ? token.account.velocity : 0} tx` : 'Loading'}</TableCell>
              </TableRow>
              <TableRow className={`${classes.tableRowHover}`}>
                <TableCell className={classes.tableCell}>Highest Velocity</TableCell>
                <TableCell className={classes.tableCell}>{velocity ? `${velocity.owner} (${velocity.value} tx)` : 'Loading'}</TableCell>
              </TableRow>
              <TableRow className={`${classes.tableStripedRow} ${classes.tableRowHover}`}>
                <TableCell className={classes.tableCell}>My Referrer</TableCell>
                <TableCell className={classes.tableCell}>{token ? (token.account.referrer ? token.account.referrer : 'None') : 'Loading'}</TableCell>
              </TableRow>
              <TableRow className={`${classes.tableRowHover}`}>
                <TableCell className={classes.tableCell}>Last Transfer By</TableCell>
                <TableCell className={classes.tableCell}>{token ? token.last_transfer : 'Loading'}</TableCell>
              </TableRow>

            </TableBody>
          </Table>
        </div>


                </CardBody>
              </Card>
  );
};

export default withStyles(tableStyle)(MinerTable);
