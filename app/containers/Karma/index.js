/**
 *
 * SearchAccount
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import KarmaForm from 'components/Features/Karma';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import { makeSelectReaderEnabled, makeSelectWriterEnabled } from 'containers/NetworkClient/selectors';
import { makeSelectLoading, makeSelectStake, makeSelectSelection } from './selectors';
import { fetchStake, selectStake } from './actions';
import reducer from './reducer';
import saga from './saga';

export class Karma extends React.Component {
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
    return <KarmaForm {...this.props} />;
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

const withReducer = injectReducer({ key: 'Karma', reducer });
const withSaga = injectSaga({ key: 'Karma', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect
)(Karma);
