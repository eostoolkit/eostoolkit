import React from 'react';
import ReactTable from 'react-table';
import MarkdownRenderer from 'react-markdown-renderer';

import ToolBody from 'components/Tool/ToolBody';
import Button from 'components/CustomButtons/Button';

import AccountBalance from '@material-ui/icons/AccountBalance';

import CircularProgress from '@material-ui/core/CircularProgress';

import { FormattedMessage } from 'react-intl';

import messages from './messages';

const Vote = props => {
  const { refs, loading, intl, ...clientProps } = props;
  const { networkAccount, networkIdentity, writerEnabled, pushTransaction } = clientProps;
  const makeTransaction = (values, vote) => {
    const transaction = [
      {
        account: 'eosio.forum',
        name: 'vote',
        data: {
          voter: networkIdentity ? networkIdentity.name : '',
          proposal_name: values.name,
          vote,
          vote_json: '',
        },
      },
    ];
    pushTransaction(transaction, props.history);
  };

  const data = refs.map(ref => {
    return {
      ...ref,
      actions: (
        <div className="actions-right">
          <Button
            onClick={() => {
              makeTransaction(ref, 1);
            }}
            color="warning">
            <FormattedMessage {...messages.referendumProposalsYesButton} />
          </Button>{' '}
          <Button
            onClick={() => {
              makeTransaction(ref, 0);
            }}
            color="success">
            <FormattedMessage {...messages.referendumProposalsNoButton} />
          </Button>
        </div>
      ),
    };
  });

  return (
    <ToolBody color="warning" icon={AccountBalance} header={intl.formatMessage(messages.referendumProposalsHeader)}>
      <ReactTable
        data={data}
        filterable
        noDataText={
          loading ? <CircularProgress color="secondary" /> : intl.formatMessage(messages.referendumNoProposalsText)
        }
        columns={[
          {
            Header: intl.formatMessage(messages.referendumProposalsNameHeader),
            accessor: 'name',
            filterable: true,
          },
          {
            Header: intl.formatMessage(messages.referendumProposalsTitleHeader),
            accessor: 'title',
            filterable: true,
          },
          {
            Header: intl.formatMessage(messages.referendumProposalsYesButton),
            accessor: 'votes_yes',
            filterable: true,
          },
          {
            Header: intl.formatMessage(messages.referendumProposalsNoButton),
            accessor: 'votes_no',
            filterable: true,
          },
          {
            Header: intl.formatMessage(messages.referendumProposalsTotalHeader),
            accessor: 'votes_total',
            filterable: true,
          },
          {
            Header: intl.formatMessage(messages.referendumProposalsActionsHeader),
            accessor: 'actions',
            filterable: false,
            sortable: false,
            width: 300,
          },
        ]}
        defaultSorted={[
          {
            id: 'votes_total',
            desc: true,
          },
        ]}
        defaultPageSize={10}
        pageSize={10}
        showPaginationTop
        showPaginationBottom={false}
        className="-striped -highlight"
        SubComponent={row => {
          return (
            <div style={{ padding: '20px' }}>
              <MarkdownRenderer markdown={row.original.content} />
            </div>
          );
        }}
      />
    </ToolBody>
  );
};

export default Vote;
