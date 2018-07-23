/**
 *
 * Remote
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import { fetchAll } from './actions';
import reducer from './reducer';
import saga from './saga';

export class Remote extends React.Component {
  // eslint-disable-line react/prefer-stateless-function

  componentDidMount() {
    this.props.fetchRemote();
  }

  render() {
    return '';
  }
}

const mapStateToProps = createStructuredSelector({});

function mapDispatchToProps(dispatch) {
  return {
    fetchRemote: () => dispatch(fetchAll()),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
);
const withReducer = injectReducer({ key: 'Remote', reducer });
const withSaga = injectSaga({ key: 'Remote', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect
)(Remote);
