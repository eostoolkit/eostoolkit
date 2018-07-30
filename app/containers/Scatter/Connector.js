/**
 *
 * Scatter
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { makeSelectEosAccount, makeSelectEosAuthority } from './selectors';
import { pushTransaction } from './actions';

const ScatterConnector = props => {
  const { renderComponent, ...passProps } = props;
  const Component = renderComponent;
  return <Component {...passProps} />;
};

const mapStateToProps = createStructuredSelector({
  eosAccount: makeSelectEosAccount(),
  eosAuthority: makeSelectEosAuthority(),
});

function mapDispatchToProps(dispatch) {
  return {
    pushTransaction: transaction => dispatch(pushTransaction(transaction)),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ScatterConnector);
