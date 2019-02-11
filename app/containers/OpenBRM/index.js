/**
 *
 * SearchAccount
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import OpenBRMForm from 'components/Features/OpenBRM';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import { makeSelectReaderEnabled, makeSelectWriterEnabled } from 'containers/NetworkClient/selectors';
import { makeSelectLoading, makeSelectStake } from './selectors';
// import { makeSelectStake, makeSelectSelection } from './selectors';
// import { fetchStake, selectStake } from './actions';
import { fetchStake } from './actions';
import reducer from './reducer';
import saga from './saga';

export class OpenBRM extends React.Component {
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
    return <OpenBRMForm {...this.props} />;
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

const withReducer = injectReducer({ key: 'OpenBRM', reducer });
const withSaga = injectSaga({ key: 'OpenBRM', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect
)(OpenBRM);
