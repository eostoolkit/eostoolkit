/**
 *
 * OfflineClient
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import reducer from './reducer';
import saga from './saga';

const OfflineClient = () => {
  return('');
}

const withReducer = injectReducer({ key: 'OfflineClient', reducer });
const withSaga = injectSaga({ key: 'OfflineClient', saga });

export default compose(
  withReducer,
  withSaga,
)(OfflineClient);
