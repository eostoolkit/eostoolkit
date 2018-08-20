import React from 'react';
import ReactTable from 'react-table';

import Tool from 'components/Tool/Tool';
import ToolSection from 'components/Tool/ToolSection';
import ToolBody from 'components/Tool/ToolBody';
import GridContainer from 'components/Grid/GridContainer';
import GridItem from 'components/Grid/GridItem';
import Button from 'components/CustomButtons/Button';

import Undo from '@material-ui/icons/Undo';
import AccountBalance from '@material-ui/icons/AccountBalance';

import CircularProgress from '@material-ui/core/CircularProgress';

const HorusPay = props => {
  const { stakes, loading, ...clientProps } = props;
  const { networkAccount, networkIdentity, writerEnabled, pushTransaction } = clientProps;

  const handleClaim = (stake) => {
    console.log(stake);
    const transaction = [
      {
        account: 'horustokenio',
        name: 'claimreward',
        data: {
          owner: stake.from,
          stake_id: stake.id,
        },
      },
    ];
    pushTransaction(transaction,props.history);
  };

  const handleUnstake = (stake) => {
    console.log(stake);
    const transaction = [
      {
        account: 'horustokenio',
        name: 'unstakehorus',
        data: {
          from: stake.from,
          unstake_id: stake.id,
        },
      },
    ];
    pushTransaction(transaction,props.history);
  };

  const data = stakes.map(stake => {
    return {
      ...stake,
      actions: (
            <div className="actions-right">
              <Button
                onClick={() => {handleUnstake(stake)}}
                color="warning">Unstake</Button>{" "}
              <Button
                onClick={() => {handleClaim(stake)}}
                color="success">Claim</Button>
            </div>
      ),
    };
  });

  return (
    <ToolBody
      color="warning"
      icon={AccountBalance}
      header="Your HorusPay Stakes" subheader=" - These stakes are earning you ECASH">
      <ReactTable
        data={data}
        filterable
        noDataText={loading ? (<CircularProgress color="secondary" />) : ('No active stakes found')}
        columns={[
          {
            Header: 'Staked To',
            accessor: 'to',
            filterable: false,
          },
          {
            Header: 'Weight',
            accessor: 'horus_weight',
            filterable: false,
          },
          {
            Header: 'Staked On',
            accessor: 'time_initial',
            filterable: false,
            Cell: row => {
              const date = new Date(row.value*1000);
              return (`${date.toLocaleString()}`);
            }
          },
          {
            Header: 'Actions',
            accessor: 'actions',
            filterable: false,
            sortable: false,
            width: 300,
          },
        ]}
        defaultPageSize={50}
        pageSize={data.length}
        showPaginationTop = {false}
        showPaginationBottom={false}
        className="-striped -highlight"
      />
    </ToolBody>
  );
};

export default HorusPay;
