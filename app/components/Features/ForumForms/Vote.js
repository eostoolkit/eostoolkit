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

const Vote = props => {
  const { refs, loading, ...clientProps } = props;
  const { networkAccount, networkIdentity, writerEnabled, pushTransaction } = clientProps;
  console.log(refs);

  const makeTransaction = (values,vote) => {
    const transaction = [
      {
        account: 'eosforumrcpp',
        name: 'vote',
        data: {
          voter: networkIdentity ? networkIdentity.name : '',
          proposal_name: values.name,
          vote,
          vote_json: '',
        },
      },
    ];
    pushTransaction(transaction,props.history);
  };

  const data = refs.map(ref => {
    return {
      ...ref,
      actions: (
        <div className="actions-right">
          <Button
            onClick={() => {makeTransaction(ref,1)}}
            color="warning">Yes</Button>{" "}
          <Button
            onClick={() => {makeTransaction(ref,0)}}
            color="success">No</Button>
        </div>
      ),
    };
  });

  return (
    <ToolBody
      color="warning"
      icon={AccountBalance}
      header="Referendum Proposals">
      <ReactTable
        data={data}
        filterable
        noDataText={loading ? (<CircularProgress color="secondary" />) : ('No proposals found')}
        columns={[
          {
            Header: 'Name',
            accessor: 'name',
            filterable: true,
          },
          {
            Header: 'Title',
            accessor: 'title',
            filterable: true,
          },
          {
            Header: 'Content',
            accessor: 'content',
            filterable: true,
            width: 300,
          },
          {
            Header: 'Yes',
            accessor: 'votes_yes',
            filterable: true,
            width: 100,
          },
          {
            Header: 'No',
            accessor: 'votes_no',
            filterable: true,
            width: 100,
          },
          {
            Header: 'Total',
            accessor: 'votes_total',
            filterable: true,
            width: 100,
          },
          {
            Header: 'Actions',
            accessor: 'actions',
            filterable: false,
            sortable: false,
            width: 300,
          },
        ]}
        defaultSorted={[
            {
              id: "votes_total",
              desc: true
            }
          ]}
        defaultPageSize={10}
        pageSize={10}
        showPaginationTop = {true}
        showPaginationBottom={false}
        className="-striped -highlight"
      />
    </ToolBody>
  );
};

export default Vote;
