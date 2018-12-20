import React from 'react';
import ReactTable from 'react-table';

import ToolBody from 'components/Tool/ToolBody';
import Button from 'components/CustomButtons/Button';

import AccountBalance from '@material-ui/icons/AccountBalance';

import CircularProgress from '@material-ui/core/CircularProgress';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

const HorusPay = props => {
  const { stakes, loading, intl, ...clientProps } = props;
  const { networkAccount, networkIdentity, writerEnabled, pushTransaction } = clientProps;

  const handleClaim = stake => {
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
    pushTransaction(transaction, props.history);
  };

  const handleUnstake = stake => {
    const transaction = [
      {
        account: 'horustokenio',
        name: 'unstakehorus',
        data: {
          from: stake.from,
          stake_id: stake.id,
        },
      },
    ];
    pushTransaction(transaction, props.history);
  };

  const handleRefund = stake => {
    const transaction = [
      {
        account: 'horustokenio',
        name: 'refundbyid',
        data: {
          owner: stake.from,
          refund_id: stake.id,
        },
      },
    ];
    pushTransaction(transaction, props.history);
  };

  let totalHorusStake = 0;

  const data = stakes.map(stake => {
    if (stake.type === 'Stake') totalHorusStake += Number(stake.horus_weight.split(' ')[0]);
    const refundTime = new Date((stake.time_initial + 604800) * 1000);
    return {
      ...stake,
      actions:
        stake.type === 'Refund' ? (
          refundTime < Date.now() ? (
            <div className="actions-right">
              <Button
                onClick={() => {
                  handleRefund(stake);
                }}
                color="success">
                <FormattedMessage {...messages.horusTableRefundButtonText} />
              </Button>
            </div>
          ) : (
            <div className="actions-right">
              <FormattedMessage {...messages.horusTableAvailableOnText} /> {refundTime.toLocaleString()}
            </div>
          )
        ) : (
          <div className="actions-right">
            <Button
              onClick={() => {
                handleUnstake(stake);
              }}
              color="warning">
              <FormattedMessage {...messages.horusTableUnstakeButtonText} />
            </Button>{' '}
            <Button
              onClick={() => {
                handleClaim(stake);
              }}
              color="success">
              <FormattedMessage {...messages.horusTableClaimButtonText} />
            </Button>
          </div>
        ),
    };
  });

  return (
    <ToolBody
      color="warning"
      icon={AccountBalance}
      header={intl.formatMessage(messages.horusTableHeader)}
      subheader={intl.formatMessage(messages.horusTableSubHeader)}>
      <h3>
        <FormattedMessage {...messages.horusTableTotalStakeText} /> {Number(totalHorusStake).toFixed(4)} HORUS
      </h3>
      <ReactTable
        data={data}
        filterable
        noDataText={
          loading ? <CircularProgress color="secondary" /> : intl.formatMessage(messages.horusTableNoActiveStakes)
        }
        columns={[
          {
            Header: intl.formatMessage(messages.horusTableColumnType),
            accessor: 'type',
            filterable: false,
          },
          {
            Header: intl.formatMessage(messages.horusTableColumnStakedTo),
            accessor: 'to',
            filterable: false,
          },
          {
            Header: intl.formatMessage(messages.horusTableColumnWeight),
            accessor: 'horus_weight',
            filterable: false,
          },
          {
            Header: intl.formatMessage(messages.horusTableColumnStartTime),
            accessor: 'time_initial',
            filterable: false,
            Cell: row => {
              const date = new Date(row.value * 1000);
              return `${date.toLocaleString()}`;
            },
          },
          {
            Header: intl.formatMessage(messages.horusTableColumnActions),
            accessor: 'actions',
            filterable: false,
            sortable: false,
            width: 300,
          },
        ]}
        defaultPageSize={50}
        pageSize={data.length}
        showPaginationTop={false}
        showPaginationBottom={false}
        className="-striped -highlight"
      />
    </ToolBody>
  );
};

export default HorusPay;
