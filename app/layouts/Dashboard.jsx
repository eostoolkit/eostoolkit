/* eslint-disable react/no-string-refs */
/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import cx from 'classnames';
import PropTypes from 'prop-types';

// creates a beautiful scrollbar
import PerfectScrollbar from 'perfect-scrollbar';
import 'perfect-scrollbar/css/perfect-scrollbar.css';

// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles';

// core components
import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';
import Sidebar from 'components/Sidebar/Sidebar';
import Notification from 'containers/Notification/Loadable';
import Tokens from 'containers/Tokens/Loadable';

import dashboardRoutes from 'routes/dashboard';
import logo from 'assets/img/logo.png';

import appStyle from './dashboardStyle';

import image from '../assets/img/bg.jpg';

// import HomePage from 'containers/HomePage/Loadable';
// import NotFoundPage from 'containers/NotFoundPage/Loadable';

const switchRoutes = (
  <Switch>
    {dashboardRoutes.map(({ collapse, component, path, pathTo, redirect, views }) => {
      if (redirect) return <Redirect from={path} to={pathTo} key={`route-redirect-${path}`} />;
      if (collapse)
        return views.map(({ component: viewComponent, path: viewPath }) => {
          return <Route path={viewPath} component={viewComponent} key={`route-${viewPath}`} />;
        });
      return <Route path={path} component={component} key={`route-${path}`} />;
    })}
  </Switch>
);

let ps;

class Dashboard extends React.Component {
  state = {
    mobileOpen: false,
    miniActive: false,
  };

  componentDidMount() {
    if (navigator.platform.indexOf('Win') > -1) {
      ps = new PerfectScrollbar(this.refs.mainPanel, {
        suppressScrollX: true,
        suppressScrollY: false,
      });
      document.body.style.overflow = 'hidden';
    }
  }

  componentWillReceiveProps(e) {
    if (e.history.location.pathname !== e.location.pathname) {
      this.refs.mainPanel.scrollTop = 0;
      if (this.state.mobileOpen) {
        this.setState({ mobileOpen: false });
      }
    }
  }

  componentWillUnmount() {
    if (navigator.platform.indexOf('Win') > -1) {
      ps.destroy();
    }
  }

  getRoute() {
    return this.props.location.pathname !== '/maps/full-screen-maps';
  }

  handleDrawerToggle = () => {
    this.setState({ mobileOpen: !this.state.mobileOpen });
  };

  sidebarMinimize = () => {
    this.setState({ miniActive: !this.state.miniActive });
  };

  render() {
    const { classes, ...rest } = this.props;
    const mainPanel = `${classes.mainPanel} ${cx({
      [classes.mainPanelSidebarMini]: this.state.miniActive,
      [classes.mainPanelWithPerfectScrollbar]: navigator.platform.indexOf('Win') > -1,
    })}`;
    return (
      <div className={classes.wrapper}>
        <Tokens />
        <Sidebar
          routes={dashboardRoutes}
          logoText={'EOSTOOLKIT.IO'}
          logo={logo}
          image={image}
          handleDrawerToggle={this.handleDrawerToggle}
          open={this.state.mobileOpen}
          color="blue"
          bgColor="black"
          miniActive={this.state.miniActive}
          {...rest}
        />
        <div className={mainPanel} ref="mainPanel">
          <Header
            sidebarMinimize={this.sidebarMinimize}
            miniActive={this.state.miniActive}
            routes={dashboardRoutes}
            handleDrawerToggle={this.handleDrawerToggle}
            {...rest}
          />
          <Notification />
          {/* On the /maps/full-screen-maps route we want the map to be on full screen - this is not possible if the content and conatiner classes are present because they have some paddings which would make the map smaller */}
          {this.getRoute() ? (
            <div className={classes.content}>
              <div className={classes.container}>{switchRoutes}</div>
            </div>
          ) : (
            <div className={classes.map}>{switchRoutes}</div>
          )}
          {this.getRoute() ? <Footer fluid /> : null}
        </div>
      </div>
    );
  }
}

Dashboard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(appStyle)(Dashboard);
