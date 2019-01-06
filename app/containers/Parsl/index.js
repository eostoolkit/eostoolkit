/**
 *
 * SearchAccount
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import ParslForm from 'components/Features/Parsl';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import { makeSelectReaderEnabled, makeSelectWriterEnabled } from 'containers/NetworkClient/selectors';
import { makeSelectLoading, makeSelectStake, makeSelectSelection } from './selectors';
import { fetchStake, selectStake } from './actions';
import reducer from './reducer';
import saga from './saga';

export class Parsl extends React.Component {
  // eslint-disable-line react/prefer-stateless-function

  componentDidMount() {
    this.props.refreshStake();
    this.interval = setInterval(() => this.props.refreshStake(), 5000);
  }

  componentWillUpdate(nextProps) {
    if (this.props.readerEnabled !== nextProps.readerEnabled) {
      // start loading the reader asap
      this.props.refreshStake();
    }
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return <ParslForm {...this.props} />;
  }
}

const mapStateToProps = createStructuredSelector({
  readerEnabled: makeSelectReaderEnabled(),
  writerEnabled: makeSelectWriterEnabled(),
  stakes: makeSelectStake(),
  loading: makeSelectLoading(),
});

function mapDispatchToProps(dispatch) {
  return {
    refreshStake: () => dispatch(fetchStake()),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
);

const withReducer = injectReducer({ key: 'Parsl', reducer });
const withSaga = injectSaga({ key: 'Parsl', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect
)(Parsl);
