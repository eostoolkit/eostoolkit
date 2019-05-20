/**
 *
 * Toolkit Connector
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import { injectIntl } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import routes from 'routes/dashboard';
import { makeSelectAccount, makeSelectIdentity,makeSelectActiveNetwork } from 'containers/NetworkClient/selectors';
import { pushTransaction } from 'containers/NetworkClient/actions';
import { stageTransaction } from 'containers/OfflineClient/actions';

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
  activeNetwork: makeSelectActiveNetwork(),
});

function mapDispatchToProps(dispatch) {
  return {
    pushTransaction: (transaction,history) => dispatch(pushTransaction(transaction,history)),
    stageTransaction: transaction => dispatch(stageTransaction(transaction)),
  };
}

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  injectIntl
)(Connector);
