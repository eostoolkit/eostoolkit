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

import { FormattedMessage } from 'react-intl';

import messages from './messages';

function MineTable({ ...props }) {
  const { classes, handleSubmit, account, tokens, stats, referrer, intl } = props;
  return (
    <ToolBody
      color="success"
      icon={Restore}
      header={intl.formatMessage(messages.grandpaMinerTableHeader)}
      subheader={intl.formatMessage(messages.grandpaMinerTableSubHeader)}>
      {referrer ? (
        <h5>
          <FormattedMessage {...messages.grandpaMinerTableYouAreReferredText} /> {"'"}
          {referrer}
          {"'"}
        </h5>
      ) : (
        ''
      )}
      <p>
        <FormattedMessage {...messages.grandpaMinerTableMinerInfo1} />
      </p>
      <p>
        <FormattedMessage {...messages.grandpaMinerTableMinerInfo2} />
      </p>
      <div className={classes.tableResponsive}>
        <Table className={classes.table}>
          <TableHead className={classes.successRow}>
            <TableRow className={classes.tableRow}>
              <TableCell className={`${classes.tableHeadCell} ${classes.tableHeadFontSize}`}>
                {intl.formatMessage(messages.grandpaMinerTableSymbol)}
              </TableCell>
              <TableCell className={`${classes.tableHeadCell} ${classes.tableHeadFontSize}`}>
                {intl.formatMessage(messages.grandpaMinerTableLastMined)}
              </TableCell>
              <TableCell className={`${classes.tableHeadCell} ${classes.tableHeadFontSize}`}>
                {intl.formatMessage(messages.grandpaMinerTableCurrentlyMining)}
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {tokens.length > 0 ? (
              tokens.map(row => {
                const thisStat = stats ? stats.find(s => s.token === row) : null;
                const thisMined = thisStat ? thisStat.account.lastMined : null;
                return (
                  <TableRow className={classes.tableRowHover} key={row}>
                    <TableCell className={classes.tableCell}>{row}</TableCell>
                    <TableCell className={classes.tableCell}>
                      {thisMined || intl.formatMessage(messages.grandpaMinerTableNeverMined)}
                    </TableCell>
                    <TableCell className={classes.tableCell}>
                      <Button onClick={() => handleSubmit(row)} color="rose">
                        <FormattedMessage {...messages.grandpaMinerTableMinerIt} />
                      </Button>
                    </TableCell>
                  </TableRow>
                );
              })
            ) : (
              <TableRow className={classes.tableRowHover}>
                <TableCell className={classes.tableCell} colSpan={3}>
                  <FormattedMessage {...messages.grandpaLoadingText} />
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
