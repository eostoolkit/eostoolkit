import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';

import indexRoutes from 'routes/index';

import './material-dashboard-pro-react.css';
import { createBrowserHistory } from 'history';

const hist = createBrowserHistory();

export default function App() {
  return (
    <Router history={hist}>
      <Switch>
        {indexRoutes.map(({ component, name, path }) => {
          return <Route path={path} component={component} key={name} />;
        })}
      </Switch>
    </Router>
  );
}
