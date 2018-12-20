import React from 'react';

import Card from 'components/Card/Card';
import CardAvatar from 'components/Card/CardAvatar';
import CardBody from 'components/Card/CardBody';

// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

import tableStyle from 'assets/jss/tableStyle';

import bitcoin from 'assets/img/bitcoin-old.png';
import dogecoin from 'assets/img/dogecoin-old.png';
import ethereum from 'assets/img/ethereum-old.png';

import { FormattedMessage } from 'react-intl';

import messages from './messages';

const MinerTable = props => {
  const { token, symbol, loading, classes, intl, ...clientProps } = props;
  const velocity = token ? token.velocity : null;
  const quantity = token ? token.quantity : null;
  const avatars = { ETH: ethereum, BTC: bitcoin, DOGE: dogecoin };

  // balance
  // velocity
  // quantity
  // supply
  // last_transfer

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
                <TableCell className={classes.tableCell}>
                  <FormattedMessage {...messages.grandpaTableMyBalance} />
                </TableCell>
                <TableCell className={classes.tableCell}>
                  {token ? token.account.balance : intl.formatMessage(messages.grandpaLoadingText)}
                </TableCell>
              </TableRow>
              <TableRow className={classes.tableRowHover}>
                <TableCell className={classes.tableCell}>
                  <FormattedMessage {...messages.grandpaTableCoinSupply} />
                </TableCell>
                <TableCell className={classes.tableCell}>
                  {token ? token.supply : intl.formatMessage(messages.grandpaLoadingText)}
                </TableCell>
              </TableRow>
              <TableRow className={`${classes.tableStripedRow} ${classes.tableRowHover}`}>
                <TableCell className={classes.tableCell}>
                  <FormattedMessage {...messages.grandpaTableMyVolume} />
                </TableCell>
                <TableCell className={classes.tableCell}>
                  {token
                    ? token.account.quantity
                      ? token.account.quantity
                      : `0.0000 ${symbol}`
                    : intl.formatMessage(messages.grandpaLoadingText)}
                </TableCell>
              </TableRow>
              <TableRow className={`${classes.tableRowHover}`}>
                <TableCell className={classes.tableCell}>
                  <FormattedMessage {...messages.grandpaTableHighestVolume} />
                </TableCell>
                <TableCell className={classes.tableCell}>
                  {quantity
                    ? `${quantity.owner} (${quantity.value / 10000} ${symbol})`
                    : intl.formatMessage(messages.grandpaLoadingText)}
                </TableCell>
              </TableRow>
              <TableRow className={`${classes.tableStripedRow} ${classes.tableRowHover}`}>
                <TableCell className={classes.tableCell}>
                  <FormattedMessage {...messages.grandpaTableMyVelocity} />
                </TableCell>
                <TableCell className={classes.tableCell}>
                  {token
                    ? `${token.account.velocity ? token.account.velocity : 0} tx`
                    : intl.formatMessage(messages.grandpaLoadingText)}
                </TableCell>
              </TableRow>
              <TableRow className={`${classes.tableRowHover}`}>
                <TableCell className={classes.tableCell}>
                  <FormattedMessage {...messages.grandpaTableHighestVelocity} />
                </TableCell>
                <TableCell className={classes.tableCell}>
                  {velocity
                    ? `${velocity.owner} (${velocity.value} tx)`
                    : intl.formatMessage(messages.grandpaLoadingText)}
                </TableCell>
              </TableRow>
              <TableRow className={`${classes.tableStripedRow} ${classes.tableRowHover}`}>
                <TableCell className={classes.tableCell}>
                  <FormattedMessage {...messages.grandpaTableMyReferrer} />
                </TableCell>
                <TableCell className={classes.tableCell}>
                  {token
                    ? token.account.referrer
                      ? token.account.referrer
                      : 'None'
                    : intl.formatMessage(messages.grandpaLoadingText)}
                </TableCell>
              </TableRow>
              <TableRow className={`${classes.tableRowHover}`}>
                <TableCell className={classes.tableCell}>
                  <FormattedMessage {...messages.grandpaTableLastTransferBy} />
                </TableCell>
                <TableCell className={classes.tableCell}>
                  {token ? token.last_transfer : intl.formatMessage(messages.grandpaLoadingText)}
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </CardBody>
    </Card>
  );
};

export default withStyles(tableStyle)(MinerTable);
