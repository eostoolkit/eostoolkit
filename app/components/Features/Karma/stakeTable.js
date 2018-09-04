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

const Karma = props => {
  const { stakes, loading, ...clientProps } = props;
  const { networkAccount, networkIdentity, writerEnabled, pushTransaction } = clientProps;
  console.log(networkAccount);
  const karmaBalance = networkAccount ? Number(networkAccount.balances.find(b=>b.account === 'therealkarma').balance.split(' ')[0]) : 0;
  //console.log(stakes);
  //const stakeBalance = stakes ? stakes.reduce((total,stake)=>total+Number(stake.weight.split(' ')[0])) : 0;

  console.log(karmaBalance);


  const handleClaim = (stake) => {
    const transaction = [
      {
        account: 'therealkarma',
        name: 'claim',
        data: {
          owner: stake.owner,
        },
      },
    ];
    pushTransaction(transaction,props.history);
  };

  let stakeBalance = 0;
  const data = stakes.map(stake => {
    stakeBalance += Number(stake.weight.split(' ')[0]);
    return {
      ...stake,
      actions: stake.owner === 'Refunding' ? (
        <div className="actions-right">Available on {(new Date(((stake.last_claim_time/1000)+(259200*1000)))).toLocaleString()}</div>
      ) : (
        <div className="actions-right">
          <Button
            onClick={() => {handleClaim(stake)}}
            color="success">Claim</Button>
        </div>
      ),
    };
  });

  console.log(stakeBalance);

  return (
    <ToolBody
      color="warning"
      icon={AccountBalance}
      header="Your KARMA POWER" subheader=" - Good KARMA grows!">
      <h3>Your total KARMA</h3><p style={{marginTop:'-10px'}}>Liquid, powered up, and refunding...</p>
      <h2>{(Number(karmaBalance)+Number(stakeBalance)).toFixed(4)}</h2>
      <ReactTable
        data={data}
        filterable
        noDataText={loading ? (<CircularProgress color="secondary" />) : ('No active stakes found')}
        columns={[
          {
            Header: 'Weight',
            accessor: 'weight',
            filterable: false,
          },
          {
            Header: 'Start Time',
            accessor: 'last_claim_time',
            filterable: false,
            Cell: row => {
              const date = new Date(row.value/1000);
              return (`${date.toLocaleString()}`);
              //return(row.value);
            },
            width: 200,
          },
          {
            Header: 'Actions',
            accessor: 'actions',
            filterable: false,
            sortable: false,
            width: 200,
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

export default Karma;
