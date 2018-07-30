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
import routes from 'routes/dashboard';



const Connector = props => {
  const { match, ...passProps } = props;

  //TODO: Remove this shitty workaround cause fuck babel
  let Component;
  routes.map(({ collapse, path, name: routeName, views, component }) => {
    if (collapse) {
      views.map(prop => {
        if (prop.path === match.path) {
          Component = prop.component;
        }
      });
    }
    if (path === match.path) {
      Component = component;
    }
  });

  if(Component) {
    return (
      <Component {...passProps} />
    );
  } else {
    return (
      <div>Not found</div>
    )
  }

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
)(Connector);
