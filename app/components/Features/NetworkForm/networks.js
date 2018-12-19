import React from 'react';

// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Button from 'components/CustomButtons/Button';

import tableStyle from 'assets/jss/tableStyle';

import messages from '../../messages';

function NetworksTable({ ...props }) {
  const { classes, networks, active, selectNetwork, intl } = props;
  return (
    <div className={classes.tableResponsive}>
      <Table className={classes.table}>
        <TableHead className={classes.successRow}>
          <TableRow className={classes.tableRow}>
            <TableCell className={`${classes.tableHeadCell} ${classes.tableHeadFontSize}`}>{intl.formatMessage(messages.networkTableColumnName)}</TableCell>
            <TableCell className={`${classes.tableHeadCell} ${classes.tableHeadFontSize}`}>{intl.formatMessage(messages.networkTableColumnNetwork)}</TableCell>
            <TableCell className={`${classes.tableHeadCell} ${classes.tableHeadFontSize}`}>{intl.formatMessage(messages.networkTableColumnType)}</TableCell>
            <TableCell className={`${classes.tableHeadCell} ${classes.tableHeadFontSize}`}>{intl.formatMessage(messages.networkTableColumnAPI)}</TableCell>
            <TableCell className={`${classes.tableHeadCell} ${classes.tableHeadFontSize}`}>{intl.formatMessage(messages.networkTableColumnHost)}</TableCell>
            <TableCell className={`${classes.tableHeadCell} ${classes.tableHeadFontSize}`}>{intl.formatMessage(messages.networkTableColumnFailures)}</TableCell>
            <TableCell className={`${classes.tableHeadCell} ${classes.tableHeadFontSize}`}>{intl.formatMessage(messages.networkTableColumnPing)}</TableCell>
            <TableCell className={`${classes.tableHeadCell} ${classes.tableHeadFontSize}`}>{intl.formatMessage(messages.networkTableColumnSelect)}</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {networks && networks.length > 0 ? (
            networks.map(network => {
              return network.endpoints.map(endpoint => {
                return (
                  <TableRow className={classes.tableRowHover} key={endpoint.name}>
                    <TableCell className={classes.tableCell}>{network.name}</TableCell>
                    <TableCell className={classes.tableCell}>{network.network.toUpperCase()}</TableCell>
                    <TableCell className={classes.tableCell}>{network.type.toUpperCase()}</TableCell>
                    <TableCell className={classes.tableCell}>{endpoint.name}</TableCell>
                    <TableCell className={classes.tableCell}>
                      {endpoint.protocol}
                      {'://'}
                      {endpoint.url}:{endpoint.port}
                    </TableCell>
                    <TableCell className={classes.tableCell}>{endpoint.failures}</TableCell>
                    <TableCell className={classes.tableCell}>{endpoint.ping === -1 ? intl.formatMessage(messages.networkTableUnknownNetworkText) : `${endpoint.ping} ms`}</TableCell>
                    <TableCell className={classes.tableCell}>
                      {active && active.network === network && active.endpoint.name === endpoint.name ? (
                        intl.formatMessage(messages.networkTableCurrentNetworkText)
                      ) : (
                        <Button onClick={() => selectNetwork(network, endpoint)} color="info">
                          Select
                        </Button>
                      )}
                    </TableCell>
                  </TableRow>
                );
              });
            })
          ) : (
            <TableRow className={classes.tableRowHover}>
              <TableCell className={classes.tableCell} colSpan={6}>
                Loading...
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
}

export default withStyles(tableStyle)(NetworksTable);
