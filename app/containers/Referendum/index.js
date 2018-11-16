/**
 *
 * SearchAccount
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import ReferendumForm from 'components/Features/ForumForms/Vote';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import { makeSelectReaderEnabled, makeSelectWriterEnabled } from 'containers/NetworkClient/selectors';
import { makeSelectLoading, makeSelectRef, makeSelectSelection } from './selectors';
import { fetchRef, selectRef } from './actions';
import reducer from './reducer';
import saga from './saga';

export class Referendum extends React.Component {
  // eslint-disable-line react/prefer-stateless-function

  componentDidMount() {
    this.interval = setInterval(() => this.props.refreshRef(), 5000);
  }

  componentWillUpdate(nextProps) {
    if (this.props.readerEnabled !== nextProps.readerEnabled) {
      // start loading the reader asap
      this.props.refreshRef();
    }
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return <ReferendumForm {...this.props} />;
  }
}

const mapStateToProps = createStructuredSelector({
  readerEnabled: makeSelectReaderEnabled(),
  writerEnabled: makeSelectWriterEnabled(),
  refs: makeSelectRef(),
  loading: makeSelectLoading(),
});

function mapDispatchToProps(dispatch) {
  return {
    refreshRef: () => dispatch(fetchRef()),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
);

const withReducer = injectReducer({ key: 'Referendum', reducer });
const withSaga = injectSaga({ key: 'Referendum', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect
)(Referendum);
