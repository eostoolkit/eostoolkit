/**
 *
 * SearchAccount
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import ProxyTable from 'components/Features/PoorSwapTable';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import { makeSelectReaderEnabled, makeSelectWriterEnabled } from 'containers/NetworkClient/selectors';
import { makeSelectLoading, makeSelectProxies, makeSelectSelection } from './selectors';
import { fetchProxies, selectProxies } from './actions';
import reducer from './reducer';
import saga from './saga';

export class PoorSwap extends React.Component {
  // eslint-disable-line react/prefer-stateless-function

  componentDidMount() {
    this.interval = setInterval(() => this.props.refreshProxies(), 5000);
  }

  componentWillUpdate(nextProps) {
    if (this.props.readerEnabled !== nextProps.readerEnabled) {
      // start loading the reader asap
      this.props.refreshProxies();
    }
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return <ProxyTable {...this.props} />;
  }
}

const mapStateToProps = createStructuredSelector({
  readerEnabled: makeSelectReaderEnabled(),
  writerEnabled: makeSelectWriterEnabled(),
  proxies: makeSelectProxies(),
  loading: makeSelectLoading(),
});

function mapDispatchToProps(dispatch) {
  return {
    refreshProxies: () => dispatch(fetchProxies()),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
);

const withReducer = injectReducer({ key: 'PoorSwap', reducer });
const withSaga = injectSaga({ key: 'PoorSwap', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect
)(PoorSwap);
