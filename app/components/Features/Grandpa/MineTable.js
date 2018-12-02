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

function MineTable({ ...props }) {
  const { classes, handleSubmit, account, tokens, stats, referrer } = props;
  return (
    <ToolBody
      color="success"
      icon={Restore}
      header="Quit GrandpaCoins" subheader=" - Get your RAM back!">
      <div>
       <p>Recover your RAM while we improve the game.</p>
       <p>Your BTC,ETH, and DOGE will be erased!</p>
        <Button onClick={() => handleSubmit()} color="rose">Quit game and Recover RAM</Button>
      </div>

    </ToolBody>
  );
}

export default withStyles(tableStyle)(MineTable);
