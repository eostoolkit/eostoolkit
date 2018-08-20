/**
 *
 * SearchAccount
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import HorusPayForm from 'components/Features/HorusPay';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import { makeSelectReaderEnabled, makeSelectWriterEnabled } from 'containers/NetworkClient/selectors';
import { makeSelectLoading, makeSelectStake, makeSelectSelection } from './selectors';
import { fetchStake, selectStake } from './actions';
import reducer from './reducer';
import saga from './saga';

export class HorusPay extends React.Component {
  // eslint-disable-line react/prefer-stateless-function

  componentDidMount() {
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
    return <HorusPayForm {...this.props} />;
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

const withReducer = injectReducer({ key: 'HorusPay', reducer });
const withSaga = injectSaga({ key: 'HorusPay', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect
)(HorusPay);
