import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { Switch, Route, Redirect } from 'react-router-dom';

import { makeSelectEosAccount, makeSelectEosAuthority } from 'containers/Scatter/selectors';
import { pushTransaction } from 'containers/Scatter/actions'

import dashboardRoutes from 'routes/dashboard';

const SwitchRoutes = props => {
  console.log(props);
  return (
    <Switch>
      {dashboardRoutes.map(({ collapse, component, path, pathTo, redirect, views }) => {
        console.log(path);
        const Component = component;
        console.log(Component);
        if (redirect) return <Redirect from={path} to={pathTo} key={`route-redirect-${path}`} />;
        if (collapse)
          return views.map(({ component: viewComponent, path: viewPath }) => {
            return <Route path={viewPath} component={viewComponent} key={`route-${viewPath}`} />;
          });
        return <Route path={path} component={component} key={`route-${path}`} />;
        //return <Route path={path} render={() => <Component {...props}/>} key={`route-${path}`} />;
      })}
    </Switch>
  );
}

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
)(SwitchRoutes);
