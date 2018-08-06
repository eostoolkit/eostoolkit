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
import { makeSelectLoading, makeSelectProducers } from './selectors'
import { fetchProducers } from './actions';
import reducer from './reducer';
import saga from './saga';

export class NetworkProducers extends React.Component {
  // eslint-disable-line react/prefer-stateless-function

  componentDidMount() {
    // start loading the reader asap
    this.props.refreshProducers();
  }

  render() {
    return (
      <VotingTable {...this.props}/>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  producers: makeSelectProducers(),
  loading: makeSelectLoading(),
});

function mapDispatchToProps(dispatch) {
  return {
    refreshProducers: () => dispatch(fetchProducers()),
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
