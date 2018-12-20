import React from 'react';
import ToolBody from 'components/Tool/ToolBody';

// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import tableStyle from 'assets/jss/tableStyle';

import AccountBalance from '@material-ui/icons/AccountBalance';

import { FormattedMessage } from 'react-intl';

import messages from './messages';

const MinerTable = props => {
  const { miner, loading, classes, intl, ...clientProps } = props;
  const round = miner ? miner.round : null;

  return (
    <ToolBody
      color="warning"
      icon={AccountBalance}
      header={intl.formatMessage(messages.grandpaIndexHeader)}
      subheader={intl.formatMessage(messages.grandpaMinerTable2SubHeader)}>
      <p>
        <FormattedMessage {...messages.grandpaMinerTable2InfoText1} />
      </p>
      <p>
        <FormattedMessage {...messages.grandpaMinerTable2InfoText2} />
      </p>
      <p>
        <FormattedMessage {...messages.grandpaMinerTable2InfoText3} />
      </p>
      <div className={classes.tableResponsive}>
        <Table className={classes.table}>
          <TableHead className={classes.successRow}>
            <TableRow className={classes.tableRow}>
              <TableCell className={`${classes.tableHeadCell} ${classes.tableHeadFontSize}`} colSpan={2}>
                <FormattedMessage {...messages.grandpaMinerTable2RoundInfoEnd} />
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow className={classes.tableRowHover}>
              <TableCell className={classes.tableCell}>
                <h3>
                  <FormattedMessage {...messages.grandpaMinerTable2CellJackpot} />
                </h3>
              </TableCell>
              <TableCell className={classes.tableCell}>
                <h3>{`${Number(round ? round.rewards.jackpot / 10000 : 0).toFixed(4)} EOS`}</h3>
              </TableCell>
            </TableRow>
            <TableRow className={`${classes.tableStripedRow} ${classes.tableRowHover}`}>
              <TableCell className={classes.tableCell}>
                <FormattedMessage {...messages.grandpaMinerTable2CellChiefMiner} />
              </TableCell>
              <TableCell className={classes.tableCell}>
                <h4>{round ? round.current_miner : intl.formatMessage(messages.grandpaLoadingText)}</h4>
              </TableCell>
            </TableRow>
            <TableRow className={classes.tableRowHover}>
              <TableCell className={classes.tableCell}>
                <FormattedMessage {...messages.grandpaMinerTable2CellUsurpFee} />
              </TableCell>
              <TableCell className={classes.tableCell}>
                <h4>
                  {round
                    ? `${(Number(round.current_fee.split(' ')[0]) * 1.25).toFixed(4)} EOS`
                    : intl.formatMessage(messages.grandpaLoadingText)}
                </h4>
              </TableCell>
            </TableRow>
            <TableRow className={`${classes.tableStripedRow} ${classes.tableRowHover}`}>
              <TableCell className={classes.tableCell}>
                <FormattedMessage {...messages.grandpaMinerTable2CellMinerChanged} />
              </TableCell>
              <TableCell className={classes.tableCell}>
                {round
                  ? `${new Date(round.updated_on / 1000).toLocaleString()}`
                  : intl.formatMessage(messages.grandpaLoadingText)}
              </TableCell>
            </TableRow>
            <TableRow className={`${classes.tableRowHover}`}>
              <TableCell className={classes.tableCell}>
                <FormattedMessage {...messages.grandpaMinerTable2CellTeamDivided} />
              </TableCell>
              <TableCell className={classes.tableCell}>{`${Number(round ? round.rewards.team_div / 10000 : 0).toFixed(
                4
              )} EOS`}</TableCell>
            </TableRow>
            <TableRow className={`${classes.tableStripedRow} ${classes.tableRowHover}`}>
              <TableCell className={classes.tableCell}>
                <FormattedMessage {...messages.grandpaMinerTable2CellCarryForward} />
              </TableCell>
              <TableCell className={classes.tableCell}>{`${Number(
                round ? round.rewards.carry_forward / 10000 : 0
              ).toFixed(4)} EOS`}</TableCell>
            </TableRow>
            <TableRow className={`${classes.tableRowHover}`}>
              <TableCell className={classes.tableCell}>
                <FormattedMessage {...messages.grandpaMinerTable2CellDeveloperFund} />
              </TableCell>
              <TableCell className={classes.tableCell}>{`${Number(round ? round.rewards.dev_fund / 10000 : 0).toFixed(
                4
              )} EOS`}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </ToolBody>
  );
};

export default withStyles(tableStyle)(MinerTable);
