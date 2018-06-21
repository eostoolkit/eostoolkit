import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Hidden from '@material-ui/core/Hidden';

// material-ui icons
import Menu from '@material-ui/icons/Menu';
import MoreVert from '@material-ui/icons/MoreVert';
import ViewList from '@material-ui/icons/ViewList';

import Button from 'components/CustomButtons/Button';

// core components
import HeaderLinks from './HeaderLinks';

import headerStyle from './headerStyle';

function Header({ ...props }) {
  function makeBrand() {
    let name;
    props.routes.map(({ collapse, path, name: routeName, views }) => {
      if (collapse) {
        views.map(prop => {
          if (prop.path === props.location.pathname) {
            name = prop.name;
          }
          return null;
        });
      }
      if (path === props.location.pathname) {
        name = routeName;
      }
      return null;
    });
    return name;
  }
  const { classes, color, rtlActive } = props;
  const appBarClasses = cx({
    [` ${classes[color]}`]: color,
  });
  const sidebarMinimize = `${classes.sidebarMinimize} ${cx({
    [classes.sidebarMinimizeRTL]: rtlActive,
  })}`;
  return (
    <AppBar className={classes.appBar + appBarClasses}>
      <Toolbar className={classes.container}>
        <Hidden smDown>
          <div className={sidebarMinimize}>
            {props.miniActive ? (
              <Button justIcon round color="white" onClick={props.sidebarMinimize}>
                <ViewList className={classes.sidebarMiniIcon} />
              </Button>
            ) : (
              <Button justIcon round color="white" onClick={props.sidebarMinimize}>
                <MoreVert className={classes.sidebarMiniIcon} />
              </Button>
            )}
          </div>
        </Hidden>
        <div className={classes.flex}>
          {/* Here we create navbar brand, based on route name */}
          <Button href="#" className={classes.title} color="transparent">
            {makeBrand()}
          </Button>
        </div>
        <Hidden smDown implementation="css">
          <HeaderLinks rtlActive={rtlActive} />
        </Hidden>
        <Hidden mdUp>
          <Button
            className={classes.appResponsive}
            color="transparent"
            justIcon
            aria-label="open drawer"
            onClick={props.handleDrawerToggle}>
            <Menu />
          </Button>
        </Hidden>
      </Toolbar>
    </AppBar>
  );
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
  color: PropTypes.oneOf(['primary', 'info', 'success', 'warning', 'danger']),
  rtlActive: PropTypes.bool,
};

export default withStyles(headerStyle)(Header);
