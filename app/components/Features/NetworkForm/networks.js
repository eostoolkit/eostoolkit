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

function NetworksTable({ ...props }) {
  const { classes, networks, active, selectNetwork } = props;
  return (
    <div className={classes.tableResponsive}>
      <Table className={classes.table}>
        <TableHead className={classes.successRow}>
          <TableRow className={classes.tableRow}>
            <TableCell className={`${classes.tableHeadCell} ${classes.tableHeadFontSize}`}>Name</TableCell>
            <TableCell className={`${classes.tableHeadCell} ${classes.tableHeadFontSize}`}>Network</TableCell>
            <TableCell className={`${classes.tableHeadCell} ${classes.tableHeadFontSize}`}>Type</TableCell>
            <TableCell className={`${classes.tableHeadCell} ${classes.tableHeadFontSize}`}>API</TableCell>
            <TableCell className={`${classes.tableHeadCell} ${classes.tableHeadFontSize}`}>Host</TableCell>
            <TableCell className={`${classes.tableHeadCell} ${classes.tableHeadFontSize}`}>Failures</TableCell>
            <TableCell className={`${classes.tableHeadCell} ${classes.tableHeadFontSize}`}>Ping</TableCell>
            <TableCell className={`${classes.tableHeadCell} ${classes.tableHeadFontSize}`}>Select</TableCell>
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
                    <TableCell className={classes.tableCell}>{endpoint.ping === -1 ? 'Unknown' : `${endpoint.ping} ms`}</TableCell>
                    <TableCell className={classes.tableCell}>
                      {active && active.network === network && active.endpoint.name === endpoint.name ? (
                        'Current Network'
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
