/**
 *
 * Scatter
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import routes from 'routes/dashboard';

import { makeSelectAccount, makeSelectIdentity } from './selectors';
import { pushTransaction } from './actions';

const Connector = props => {
  const { match, ...passProps } = props;
  // return ('Page');

  // TODO: Remove this shitty workaround cause fuck babel
  let Component;
  routes.map(({ collapse, path, views, component }) => {
    if (collapse) {
      views.map(prop => {
        if (prop.path === match.path) {
          Component = prop.component;
        }
        return Component;
      });
    }
    if (path === match.path) {
      Component = component;
    }
    return Component;
  });

  if (Component) {
    return <Component {...passProps} />;
  }
  return <div>Not found</div>;
};

const mapStateToProps = createStructuredSelector({
  networkAccount: makeSelectAccount(),
  networkIdentity: makeSelectIdentity(),
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
