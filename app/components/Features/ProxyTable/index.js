import React from 'react';
import ReactTable from 'react-table';
import Tool from 'components/Tool/Tool';
import ToolSection from 'components/Tool/ToolSection';
import ToolBody from 'components/Tool/ToolBody';

import CheckBoxOn from '@material-ui/icons/CheckBox';

import CheckBoxOff from '@material-ui/icons/CheckBoxOutlineBlank';
import AssignmentTurnedIn from '@material-ui/icons/AssignmentTurnedIn';
import CircularProgress from '@material-ui/core/CircularProgress';

import { FormattedMessage } from 'react-intl';

import messages from './messages';
import commonMessages from '../../messages';

const HorusPay = props => {
  const { proxies, intl, ...clientProps } = props;
  const { networkAccount, networkIdentity, writerEnabled, pushTransaction } = clientProps;

  const makeTransaction = proxy => {
    if (!writerEnabled) {
      return { error: intl.formatMessage(commonMessages.errorNoScatterIdentity) };
    }

    const transaction = [
      {
        account: 'eosio',
        name: 'voteproducer',
        data: {
          voter: networkIdentity ? networkIdentity.name : '',
          proxy,
          producers: [],
        },
      },
    ];
    return transaction;
  };

  const handleSubmit = proxy => {
    const transaction = makeTransaction(proxy);
    pushTransaction(transaction, props.history);
  };

  const data = proxies.map(proxy => {
    let accountVote = '';
    try {
      accountVote = networkAccount.voter_info.proxy;
    } catch (c) {
      accountVote = '';
    }
    return {
      ...proxy,
      actions: (
        <div className="actions-right">
          <a
            href="#"
            onClick={() => {
              handleSubmit(proxy.owner);
            }}>
            {accountVote === proxy.owner ? <CheckBoxOn color="action" /> : <CheckBoxOff color="action" />}
          </a>
        </div>
      ),
    };
  });

  return (
    <Tool>
      <ToolSection md={12}>
        <ToolBody
          color="warning"
          icon={AssignmentTurnedIn}
          header={intl.formatMessage(messages.proxyTableHeader)}
          subheader={intl.formatMessage(messages.proxyTableSubHeader)}>
          <h5>
            <FormattedMessage {...messages.proxyTableInformationHeader} />
          </h5>
          <ReactTable
            data={data}
            filterable
            noDataText={<CircularProgress color="secondary" />}
            columns={[
              {
                Header: intl.formatMessage(messages.proxyTableColumnAccountHeader),
                accessor: 'owner',
                width: 150,
                Cell: row => {
                  return (
                    <a
                      href={`https://bloks.io/account/${row.value}#voter-info`}
                      target="new"
                      style={{ color: 'black' }}>
                      {row.value}
                    </a>
                  );
                },
              },
              {
                Header: intl.formatMessage(messages.proxyTableColumnNameHeader),
                accessor: 'name',
                width: 300,
              },
              {
                Header: intl.formatMessage(messages.proxyTableColumnSloganHeader),
                accessor: 'slogan',
                style: { whiteSpace: 'unset' }, // allow for words wrap inside only this cell
              },
              {
                Header: intl.formatMessage(messages.proxyTableColumnWeChatHeader),
                width: 100,
                accessor: 'wechat',
                sortable: false,
              },
              {
                Header: intl.formatMessage(messages.proxyTableColumnSteemitHeader),
                width: 100,
                accessor: 'steemit',
                sortable: false,
                Cell: row => {
                  const clean = row.value.replace('@', '').replace('https://steemit.com/', '');

                  return (
                    <a href={`https://steemit.com/@${clean}`} target="new" style={{ color: 'black' }}>
                      {clean}
                    </a>
                  );
                },
              },
              {
                Header: intl.formatMessage(messages.proxyTableColumnSocialHeader),
                id: 'connect',
                width: 75,
                accessor: i => [i.website, i.telegram, i.steemit, i.twitter, i.wechat],
                sortable: false,
                Cell: row => {
                  const telegram = row.value[3].replace('https://t.me/', '');
                  return (
                    <span>
                      {row.value[0] !== '' ? (
                        <a href={`${row.value[0]}`} target="new" style={{ color: 'rgba(0, 0, 0, 0.87)' }}>
                          <i className="fas fa-globe" />
                        </a>
                      ) : (
                        ''
                      )}{' '}
                      {row.value[1] !== '' ? (
                        <a href={`https://t.me/${telegram}`} target="new" style={{ color: 'black' }}>
                          <i className="fab fa-telegram-plane" />
                        </a>
                      ) : (
                        ''
                      )}{' '}
                      {row.value[3] !== '' ? (
                        <a href={`https://twitter.com/${row.value[3]}`} target="new" style={{ color: 'black' }}>
                          <i className="fab fa-twitter" />
                        </a>
                      ) : (
                        ''
                      )}{' '}
                    </span>
                  );
                },
              },
              {
                Header: intl.formatMessage(messages.proxyTableColumnSocialHeader),
                accessor: 'actions',
                filterable: false,
                sortable: false,
                width: 75,
              },
            ]}
            defaultPageSize={50}
            pageSize={data.length}
            showPaginationTop={false}
            showPaginationBottom={false}
            className="-striped -highlight"
          />
        </ToolBody>
      </ToolSection>
    </Tool>
  );
};

export default HorusPay;
