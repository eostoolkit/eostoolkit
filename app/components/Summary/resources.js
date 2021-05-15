import React from 'react';

// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

import tableStyle from 'assets/jss/tableStyle';

import { FormattedMessage } from 'react-intl';
import messages from './messages';
import styled from 'styled-components';

const TokensWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  column-gap: 8px;
`;

function ResourcesTable({ ...props }) {
  const { classes, account, rex } = props;

  return (
    <div className={classes.tableResponsive}>
      <Table className={classes.table}>
        {account ? (
          <TableBody>
            <TableRow className={`${classes.tableRowHover}`}>
              <TableCell className={classes.tableCell}>
                <h6>EOS</h6>
              </TableCell>
              <TableCell className={classes.tableCell}>
                {account.core_liquid_balance ? account.core_liquid_balance : 'None'}
              </TableCell>
              <TableCell className={classes.tableCell}>
                <h6>RAM</h6>
              </TableCell>
              <TableCell className={classes.tableCell}>
                {account.ram_usage} bytes used
                <br />
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
                <h6>
                  <FormattedMessage {...messages.refundingText} />
                </h6>
              </TableCell>
              <TableCell className={classes.tableCell}>
                {account && account.refund_request ? (
                  <span>
                    CPU: {account.refund_request.cpu_amount}
                    <br />
                    NET: {account.refund_request.net_amount}
                  </span>
                ) : (
                  <span>
                    <FormattedMessage {...messages.noneText} />
                  </span>
                )}
              </TableCell>
            </TableRow>
            <TableRow className={`${classes.tableStripedRow} ${classes.tableRowHover}`}>
              <TableCell className={classes.tableCell}>
                <h6>
                  <FormattedMessage {...messages.tokensText} />
                </h6>
              </TableCell>
              <TableCell className={classes.tableCell} colSpan={9}>
                <TokensWrapper>
                  {account.balances.map(balance => (
                    <h6 key={balance}>{balance}</h6>
                  ))}
                </TokensWrapper>
              </TableCell>
            </TableRow>
            {rex ? (
              <TableRow className={`${classes.tableStripedRow} ${classes.tableRowHover}`}>
                <TableCell className={classes.tableCell}>
                  <h6>
                    <FormattedMessage {...messages.rexText} />
                  </h6>
                </TableCell>
                <TableCell className={classes.tableCell} colSpan={2}>
                  <h6>{rex.rex_balance}</h6>
                </TableCell>
                <TableCell className={classes.tableCell} colSpan={5}>
                  {rex.rex_maturities.length > 0 ? (
                    <h6>
                      <FormattedMessage {...messages.maturingText} />
                      {rex.rex_maturities
                        .map((mature, index) => `: ${index + 1}: ${mature.key.slice(0, 10)} ${mature.value} REX`)
                        .join(', ')}
                    </h6>
                  ) : (
                    <h6>-</h6>
                  )}
                </TableCell>
                <TableCell className={classes.tableCell} colSpan={2}>
                  <h6>
                    <FormattedMessage {...messages.voteStakeText} />
                    {`: ${rex.vote_stake}`}
                  </h6>
                </TableCell>
              </TableRow>
            ) : (
              <TableRow className={`${classes.tableStripedRow} ${classes.tableRowHover}`}>
                <TableCell className={classes.tableCell}>
                  <h6>
                    <FormattedMessage {...messages.rexText} />
                  </h6>
                </TableCell>
                <TableCell className={classes.tableCell}>
                  <h6>-</h6>
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        ) : (
          <TableBody>
            <TableRow className={`${classes.tableRowHover}`}>
              <TableCell className={classes.tableCell}>
                <h6>
                  <FormattedMessage {...messages.loadAccountText} />
                </h6>
              </TableCell>
            </TableRow>
            <TableRow className={`${classes.tableStripedRow} ${classes.tableRowHover}`}>
              <TableCell className={classes.tableCell}>
                <p>
                  <FormattedMessage {...messages.loadAccountAdditionalInfoText} />
                </p>
              </TableCell>
            </TableRow>
          </TableBody>
        )}
      </Table>
    </div>
  );
}

export default withStyles(tableStyle)(ResourcesTable);
