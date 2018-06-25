/**
 *
 * VoteUs
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import reducer from './reducer';
import saga from './saga';
import submitAction from './actions';

// eslint-disable-next-line react/prefer-stateless-function
const VoteUs = ({ handleSubmit }) => (
  <a href="#" onClick={handleSubmit}>
    Vote for GenerEOS
  </a>
);

const mapStateToProps = createStructuredSelector({});

function mapDispatchToProps(dispatch) {
  return {
    handleSubmit: () => dispatch(submitAction()),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
);

const withReducer = injectReducer({ key: 'VoteUs', reducer });
const withSaga = injectSaga({ key: 'VoteUs', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect
)(VoteUs);
