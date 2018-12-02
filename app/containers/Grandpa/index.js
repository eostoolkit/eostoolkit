/**
 *
 * SearchAccount
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import GrandpaForm from 'components/Features/Grandpa';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import { makeSelectReaderEnabled, makeSelectWriterEnabled } from 'containers/NetworkClient/selectors';
import { makeSelectLoading, makeSelectMiner, makeSelectSelection } from './selectors';
import { fetchMiner, selectMiner } from './actions';
import reducer from './reducer';
import saga from './saga';

export class Grandpa extends React.Component {
  // eslint-disable-line react/prefer-stateless-function

  render() {
    return <GrandpaForm {...this.props} />;
  }
}

const mapStateToProps = createStructuredSelector({
  readerEnabled: makeSelectReaderEnabled(),
  writerEnabled: makeSelectWriterEnabled(),
  miner: makeSelectMiner(),
  loading: makeSelectLoading(),
});

function mapDispatchToProps(dispatch) {
  return {
    refreshMiner: () => dispatch(fetchMiner()),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
);

const withReducer = injectReducer({ key: 'Grandpa', reducer });
const withSaga = injectSaga({ key: 'Grandpa', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect
)(Grandpa);
