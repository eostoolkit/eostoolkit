import React from 'react';
import { isMobile } from 'react-device-detect';

// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import { airgrabs } from 'remoteConfig';
import tableStyle from 'assets/jss/tableStyle';

// core components
import Button from 'components/CustomButtons/Button';
import MobileDetectedAlert from 'components/MobileDetectedAlert';

function TokensTable({ ...props }) {
  const { classes, handleSubmit } = props;
  return (
    <div className={classes.tableResponsive}>
      <Table className={classes.table}>
        <TableHead className={classes.successRow}>
          <TableRow className={classes.tableRow}>
            <TableCell className={`${classes.tableHeadCell} ${classes.tableHeadFontSize}`}>Symbol</TableCell>
            <TableCell className={`${classes.tableHeadCell} ${classes.tableHeadFontSize}`}>Website</TableCell>
            <TableCell className={`${classes.tableHeadCell} ${classes.tableHeadFontSize}`}>Grab</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {airgrabs.length > 0 ? (
            airgrabs.map(row => {
              return (
                <TableRow className={classes.tableRowHover} key={row.symbol}>
                  <TableCell className={classes.tableCell}>{row.symbol}</TableCell>
                  <TableCell className={classes.tableCell}>
                    <a href={row.url} target="new">
                      {row.url}
                    </a>
                  </TableCell>
                  <TableCell className={classes.tableCell}>
                    {isMobile ? (
                      <MobileDetectedAlert />
                    ) : (
                      <Button onClick={() => handleSubmit(row)} color="rose">
                        Airgrab!
                      </Button>
                    )}
                  </TableCell>
                </TableRow>
              );
            })
          ) : (
            <TableRow className={classes.tableRowHover}>
              <TableCell className={classes.tableCell} colSpan={3}>
                No Airgrabs
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
}

export default withStyles(tableStyle)(TokensTable);
