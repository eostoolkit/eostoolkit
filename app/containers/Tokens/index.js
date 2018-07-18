/**
 *
 * Tokens
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import { fetchTokens } from './actions';
import reducer from './reducer';
import saga from './saga';

export class Tokens extends React.Component {
  // eslint-disable-line react/prefer-stateless-function

  componentDidMount() {
    this.props.loadTokens();
  }

  render() {
    return '';
  }
}

const mapStateToProps = createStructuredSelector({});

function mapDispatchToProps(dispatch) {
  return {
    loadTokens: () => dispatch(fetchTokens()),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
);
const withReducer = injectReducer({ key: 'Tokens', reducer });
const withSaga = injectSaga({ key: 'Tokens', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect
)(Tokens);
