import React from 'react';
import ReactTable from 'react-table';
import Tool from 'components/Tool/Tool';
import ToolSection from 'components/Tool/ToolSection';
import ToolBody from 'components/Tool/ToolBody';
import GridContainer from 'components/Grid/GridContainer';
import GridItem from 'components/Grid/GridItem';
import Button from 'components/CustomButtons/Button';
import CheckBoxOn from '@material-ui/icons/CheckBox';
import CheckCircle from '@material-ui/icons/CheckCircle';
import CheckBoxOff from '@material-ui/icons/CheckBoxOutlineBlank';
import AssignmentTurnedIn from '@material-ui/icons/AssignmentTurnedIn';
import CircularProgress from '@material-ui/core/CircularProgress';

const VotingTable = props => {
  const { producers, setProducers, selected, ...clientProps } = props;
  const { networkAccount, networkIdentity, writerEnabled, pushTransaction } = clientProps;

  const selectedProducers = [];
  selected.map(item => selectedProducers.push(item));

  const makeTransaction = () => {
    if (!writerEnabled) {
      return { error: 'No scatter identity attached' };
    }

    const transaction = [
      {
        account: 'eosio',
        name: 'voteproducer',
        data: {
          voter: networkIdentity ? networkIdentity.actor : '',
          proxy: '',
          producers: selectedProducers,
        },
      },
    ];
    return transaction;
  };

  const handleSubmit = () => {
    const transaction = makeTransaction();
    pushTransaction(transaction);
  };

  const handleReset = () => {
    setProducers([]);
  };

  const maxSelected = () => {
    if (selectedProducers.length < 30) return false;
    return true;
  };

  const toggleProducer = name => {
    const index = selectedProducers.indexOf(name);
    if (index > -1) {
      selectedProducers.splice(index, 1);
    } else if (!maxSelected()) {
      selectedProducers.push(name);
    }
    selectedProducers.sort();
    setProducers(selectedProducers);
  };

  const data = producers.map(producer => {
    let accountVote = [];
    try {
      accountVote = networkAccount.voter_info.producers;
    } catch (c) {
      accountVote = [];
    }
    return {
      ...producer,
      actions: (
        <div className="actions-right">
          {accountVote.includes(producer.owner) ? <CheckCircle color="disabled" /> : ''}
          {''}
          <a
            href="#"
            onClick={() => {
              toggleProducer(producer.owner);
            }}>
            {selected && selected.includes(producer.owner) ? (
              <CheckBoxOn color="action" />
            ) : (
              <CheckBoxOff color={maxSelected() ? 'disabled' : 'action'} />
            )}
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
          header="Block Producers"
          subheader=" - Vote and support the community">
          <GridContainer>
            <GridItem xs={12} sm={8}>
              <div>
                <strong>Selected producers ({selected.length || '0'}/30): </strong>{' '}
                {selected.length > 0 ? selected.join(', ') : 'None'}
              </div>
            </GridItem>
            <GridItem xs={12} sm={4}>
              <Button
                onClick={() => {
                  handleSubmit();
                }}
                color={'rose'}
                style={{ float: 'right' }}>
                Vote
              </Button>
              <Button
                onClick={() => {
                  handleReset();
                }}
                color={'warning'}
                style={{ float: 'right' }}>
                Reset
              </Button>
            </GridItem>
          </GridContainer>
          <ReactTable
            data={data}
            filterable
            noDataText={<CircularProgress color="secondary" />}
            columns={[
              {
                Header: 'Name',
                accessor: 'owner',
              },
              {
                Header: 'Website',
                accessor: 'url',
                Cell: row => (
                  <a href={row.value} target="new">
                    {row.value}
                  </a>
                ),
                minWidth: 300,
                maxWidth: 600,
              },
              {
                Header: 'Votes',
                id: 'vote_percent',
                accessor: d => Number(d.vote_percent).toFixed(3),
                Cell: row => <span>{row.value} %</span>,
                width: 100,
              },
              {
                Header: 'Select',
                accessor: 'actions',
                filterable: false,
                sortable: false,
                width: 75,
              },
            ]}
            defaultSorted={[
              {
                id: 'vote_percent',
                desc: true,
              },
            ]}
            defaultPageSize={50}
            // pageSize={data.length}
            showPaginationTop //= {false}
            showPaginationBottom={false}
            className="-striped -highlight"
          />
        </ToolBody>
      </ToolSection>
    </Tool>
  );
};

export default VotingTable;
