import React from 'react';

// @material-ui/core components
import { isMobile } from 'react-device-detect';
import withStyles from '@material-ui/core/styles/withStyles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Button from 'components/CustomButtons/Button';
import MobileAlert from 'components/Tool/MobileAlert';

import { airgrabs } from 'remoteConfig';
import tableStyle from 'assets/jss/tableStyle';

function AirgrabTable({ ...props }) {
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
                    {!isMobile ? (
                      <Button onClick={() => handleSubmit(row)} color="rose">
                        Airgrab!
                      </Button>
                    ) : (
                      <MobileAlert />
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

export default withStyles(tableStyle)(AirgrabTable);
