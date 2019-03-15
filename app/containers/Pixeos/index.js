/**
 *
 * Pixeos
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import PixeosForm from 'components/Features/Pixeos';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import { makeSelectReaderEnabled, makeSelectWriterEnabled } from 'containers/NetworkClient/selectors';
import { makeSelectLoading, makeSelectStake, makeSelectSelection } from './selectors';
import { fetchStake, selectStake } from './actions';
import reducer from './reducer';
import saga from './saga';

export class Pixeos extends React.Component {
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
    return <PixeosForm {...this.props} />;
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

const withReducer = injectReducer({ key: 'Pixeos', reducer });
const withSaga = injectSaga({ key: 'Pixeos', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect
)(Pixeos);
