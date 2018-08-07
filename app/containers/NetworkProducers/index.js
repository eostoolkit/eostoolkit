/**
 *
 * SearchAccount
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import VotingTable from 'components/Features/VotingTable';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import { makeSelectReaderEnabled, makeSelectWriterEnabled } from 'containers/NetworkClient/selectors';
import { makeSelectLoading, makeSelectProducers, makeSelectSelection } from './selectors';
import { fetchProducers, selectProducers } from './actions';
import reducer from './reducer';
import saga from './saga';

export class NetworkProducers extends React.Component {
  // eslint-disable-line react/prefer-stateless-function

  componentWillUpdate(nextProps) {
    if (this.props.readerEnabled !== nextProps.readerEnabled) {
      // start loading the reader asap
      this.props.refreshProducers();
    }
    if (this.props.networkAccount !== nextProps.networkAccount) {
      try {
        const selectedProducers = [];
        this.props.selected.map(item => selectedProducers.push(item));
        if (selectedProducers.length === 0) {
          this.props.setProducers(nextProps.networkAccount.voter_info.producers);
        }
      } catch (c) {
        // do nothing
      }
    }
  }

  render() {
    return <VotingTable {...this.props} />;
  }
}

const mapStateToProps = createStructuredSelector({
  readerEnabled: makeSelectReaderEnabled(),
  writerEnabled: makeSelectWriterEnabled(),
  producers: makeSelectProducers(),
  selected: makeSelectSelection(),
  loading: makeSelectLoading(),
});

function mapDispatchToProps(dispatch) {
  return {
    refreshProducers: () => dispatch(fetchProducers()),
    setProducers: selection => dispatch(selectProducers(selection)),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
);

const withReducer = injectReducer({ key: 'NetworkProducers', reducer });
const withSaga = injectSaga({ key: 'NetworkProducers', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect
)(NetworkProducers);
