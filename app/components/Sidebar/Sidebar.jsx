/* eslint-disable react/no-string-refs */
import React from 'react';
import PropTypes from 'prop-types';
// javascript plugin used to create scrollbars on windows
import { NavLink } from 'react-router-dom';
import cx from 'classnames';

// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Hidden from '@material-ui/core/Hidden';
import Collapse from '@material-ui/core/Collapse';
import { AddBox, ExitToApp, SettingsApplications } from '@material-ui/icons';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { connectAccount, removeAccount } from 'containers/Scatter/actions';
import Scatter from 'containers/Scatter/Loadable';

// core components
import HeaderLinks from 'components/Header/HeaderLinks';
import VoteUs from 'components/Features/VoteUs';
import generEosLogo from 'assets/img/genereosWhite.png';

import avatar from 'assets/img/scatter.png';

import SidebarWrapper from './SidebarWrapper';
import sidebarStyle from './sidebarStyle';

class Sidebar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      openAvatar: false,
      openAccount: this.activeRoute('/account'),
      openVote: this.activeRoute('/vote'),
      openCommunity: this.activeRoute('/community'),
      openBlockProducer: this.activeRoute('/block-producer'),
      miniActive: true,
    };
    this.activeRoute.bind(this);
  }
  // verifies if routeName is the one active (in browser input)
  activeRoute(routeName) {
    return this.props.location.pathname.indexOf(routeName) > -1;
  }
  openCollapse(collapse) {
    const st = {};
    st[collapse] = !this.state[collapse];
    this.setState(st);
  }

  render() {
    const { classes, color, logo, image, logoText, routes, bgColor, rtlActive } = this.props;
    const itemText = `${classes.itemText} ${cx({
      [classes.itemTextMini]: this.props.miniActive && this.state.miniActive,
      [classes.itemTextMiniRTL]: rtlActive && this.props.miniActive && this.state.miniActive,
      [classes.itemTextRTL]: rtlActive,
    })}`;
    const collapseItemText = `${classes.collapseItemText} ${cx({
      [classes.collapseItemTextMini]: this.props.miniActive && this.state.miniActive,
      [classes.collapseItemTextMiniRTL]: rtlActive && this.props.miniActive && this.state.miniActive,
      [classes.collapseItemTextRTL]: rtlActive,
    })}`;
    const userWrapperClass = `${classes.user} ${cx({
      [classes.whiteAfter]: bgColor === 'white',
    })}`;
    const caret = `${classes.caret} ${cx({
      [classes.caretRTL]: rtlActive,
    })}`;
    const photo = `${classes.photo} ${cx({
      [classes.photoRTL]: rtlActive,
    })}`;
    const user = (
      <div className={userWrapperClass}>
        <div className={photo}>
          <img src={avatar} className={classes.avatarImg} alt="..." />
        </div>
        <List className={classes.list}>
          <ListItem className={`${classes.item} ${classes.userItem}`}>
            <NavLink
              to={'#'}
              className={`${classes.itemLink} ${classes.userCollapseButton}`}
              onClick={() => this.openCollapse('openAvatar')}>
              <ListItemText
                primary={<Scatter />}
                secondary={
                  <b className={`${caret} ${classes.userCaret} ${this.state.openAvatar ? classes.caretActive : ''}`} />
                }
                disableTypography
                className={`${itemText} ${classes.userItemText}`}
              />
            </NavLink>
            <Collapse in={this.state.openAvatar} unmountOnExit>
              <List className={`${classes.list} ${classes.collapseList}`}>
                <ListItem className={classes.collapseItem} onClick={this.props.onScatterConnect}>
                  <NavLink to="#" className={`${classes.itemLink} ${classes.userCollapseLinks}`}>
                    <ListItemIcon className={classes.itemIconMini}>
                      <AddBox />
                    </ListItemIcon>
                    <ListItemText
                      primary="Connect Account" // TODO: Make this international
                      disableTypography
                      className={collapseItemText}
                    />
                  </NavLink>
                </ListItem>
                <ListItem className={classes.collapseItem}>
                  <NavLink to="/networks" className={`${classes.itemLink} ${classes.userCollapseLinks}`}>
                    <ListItemIcon className={classes.itemIconMini}>
                      <SettingsApplications />
                    </ListItemIcon>
                    <ListItemText
                      primary="Change Network" // TODO: Make this international
                      disableTypography
                      className={collapseItemText}
                    />
                  </NavLink>
                </ListItem>
                <ListItem className={classes.collapseItem} onClick={this.props.onScatterRemove}>
                  <NavLink to="#" className={`${classes.itemLink} ${classes.userCollapseLinks}`}>
                    <ListItemIcon className={classes.itemIconMini}>
                      <ExitToApp />
                    </ListItemIcon>
                    <ListItemText
                      primary="Sign Out" // TODO: Make this international
                      disableTypography
                      className={collapseItemText}
                    />
                  </NavLink>
                </ListItem>
              </List>
            </Collapse>
          </ListItem>
        </List>
      </div>
    );
    const links = (
      <List className={classes.list}>
        {routes.map(prop => {
          if (prop.hide) {
            return null;
          }
          if (prop.redirect) {
            return null;
          }
          if (prop.collapse) {
            const navLinkClasses = `${classes.itemLink} ${cx({
              [` ${classes.collapseActive}`]: this.activeRoute(prop.path),
            })}`;
            const listItemTextClass = `${classes.itemText} ${cx({
              [classes.itemTextMini]: this.props.miniActive && this.state.miniActive,
              [classes.itemTextMiniRTL]: rtlActive && this.props.miniActive && this.state.miniActive,
              [classes.itemTextRTL]: rtlActive,
            })}`;
            const collapseItemTextClass = `${classes.collapseItemText} ${cx({
              [classes.collapseItemTextMini]: this.props.miniActive && this.state.miniActive,
              [classes.collapseItemTextMiniRTL]: rtlActive && this.props.miniActive && this.state.miniActive,
              [classes.collapseItemTextRTL]: rtlActive,
            })}`;
            const itemIcon = `${classes.itemIcon} ${cx({
              [classes.itemIconRTL]: rtlActive,
            })}`;
            const caretLink = `${classes.caret} ${cx({
              [classes.caretRTL]: rtlActive,
            })}`;
            return (
              <ListItem key={`list-item-${prop.path}`} className={classes.item}>
                <NavLink to={'#'} className={navLinkClasses} onClick={() => this.openCollapse(prop.state)}>
                  <ListItemIcon className={itemIcon}>
                    <prop.icon />
                  </ListItemIcon>
                  <ListItemText
                    primary={prop.name}
                    secondary={<b className={`${caretLink} ${this.state[prop.state] ? classes.caretActive : ''}`} />}
                    disableTypography
                    className={listItemTextClass}
                  />
                </NavLink>
                <Collapse in={this.state[prop.state]} unmountOnExit>
                  <List className={`${classes.list} ${classes.collapseList}`}>
                    {prop.views.map(viewProp => {
                      if (viewProp.redirect) {
                        return null;
                      }
                      const navLinkCollapseClasses = `${classes.collapseItemLink} ${cx({
                        [` ${classes[color]}`]: this.activeRoute(viewProp.path),
                      })}`;
                      const collapseItemMini = `${classes.collapseItemMini} ${cx({
                        [classes.collapseItemMiniRTL]: rtlActive,
                      })}`;
                      return (
                        <ListItem key={`list-item-collapse-${viewProp.path}`} className={classes.collapseItem}>
                          <NavLink to={viewProp.path} className={navLinkCollapseClasses}>
                            <span className={collapseItemMini}>{viewProp.mini}</span>
                            <ListItemText primary={viewProp.name} disableTypography className={collapseItemTextClass} />
                          </NavLink>
                        </ListItem>
                      );
                    })}
                  </List>
                </Collapse>
              </ListItem>
            );
          }
          const navLinkClasses = `${classes.itemLink} ${cx({
            [` ${classes[color]}`]: this.activeRoute(prop.path),
          })}`;
          const itemTextLink = `${classes.itemText} ${cx({
            [classes.itemTextMini]: this.props.miniActive && this.state.miniActive,
            [classes.itemTextMiniRTL]: rtlActive && this.props.miniActive && this.state.miniActive,
            [classes.itemTextRTL]: rtlActive,
          })}`;
          const itemIcon = `${classes.itemIcon} ${cx({
            [classes.itemIconRTL]: rtlActive,
          })}`;
          return (
            <ListItem key={`list-${prop.path}`} className={classes.item}>
              <NavLink to={prop.path} className={navLinkClasses}>
                <ListItemIcon className={itemIcon}>
                  <prop.icon />
                </ListItemIcon>
                <ListItemText primary={prop.name} disableTypography className={itemTextLink} />
              </NavLink>
            </ListItem>
          );
        })}
      </List>
    );

    const logoNormal = `${classes.logoNormal} ${cx({
      [classes.logoNormalSidebarMini]: this.props.miniActive && this.state.miniActive,
      [classes.logoNormalSidebarMiniRTL]: rtlActive && this.props.miniActive && this.state.miniActive,
      [classes.logoNormalRTL]: rtlActive,
    })}`;
    const logoMini = `${classes.logoMini} ${cx({
      [classes.logoMiniRTL]: rtlActive,
    })}`;
    const logoClasses = `${classes.logo} ${cx({
      [classes.whiteAfter]: bgColor === 'white',
    })}`;
    const brand = (
      <div className={logoClasses}>
        <a href="https://www.genereos.io" className={logoMini}>
          <img src={logo} alt="logo" className={classes.img} />
        </a>
        <a href="https://www.genereos.io" className={logoNormal}>
          {logoText}
        </a>
        <div className={classes.voteWrap}>
          <VoteUs /> <img src={generEosLogo} alt="logo" className={classes.logoGenereos} />
        </div>
      </div>
    );
    const drawerPaper = `${classes.drawerPaper} ${cx({
      [classes.drawerPaperMini]: this.props.miniActive && this.state.miniActive,
      [classes.drawerPaperRTL]: rtlActive,
    })}`;
    const sidebarWrapper = `${classes.sidebarWrapper} ${cx({
      [classes.drawerPaperMini]: this.props.miniActive && this.state.miniActive,
      [classes.sidebarWrapperWithPerfectScrollbar]: navigator.platform.indexOf('Win') > -1,
    })}`;
    return (
      <div ref="mainPanel">
        <Hidden mdUp>
          <Drawer
            variant="temporary"
            anchor={rtlActive ? 'left' : 'right'}
            open={this.props.open}
            classes={{
              paper: `${drawerPaper} ${classes[`${bgColor}Background`]}`,
            }}
            onClose={this.props.handleDrawerToggle}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}>
            {brand}
            <SidebarWrapper
              className={sidebarWrapper}
              user={user}
              headerLinks={<HeaderLinks rtlActive={rtlActive} />}
              links={links}
            />
            {image !== undefined ? (
              <div className={classes.background} style={{ backgroundImage: `url(${image})` }} />
            ) : null}
          </Drawer>
        </Hidden>
        <Hidden smDown>
          <Drawer
            onMouseOver={() => this.setState({ miniActive: false })}
            onMouseOut={() => this.setState({ miniActive: true })}
            anchor={rtlActive ? 'right' : 'left'}
            variant="permanent"
            open
            classes={{
              paper: `${drawerPaper} ${classes[`${bgColor}Background`]}`,
            }}>
            {brand}
            <SidebarWrapper className={sidebarWrapper} user={user} links={links} />
            {image !== undefined ? (
              <div className={classes.background} style={{ backgroundImage: `url(${image})` }} />
            ) : null}
          </Drawer>
        </Hidden>
      </div>
    );
  }
}

Sidebar.defaultProps = {
  bgColor: 'blue',
};

Sidebar.propTypes = {
  classes: PropTypes.object.isRequired,
  bgColor: PropTypes.oneOf(['white', 'black', 'blue']),
  rtlActive: PropTypes.bool,
  color: PropTypes.oneOf(['white', 'red', 'orange', 'green', 'blue', 'purple', 'rose']),
  logo: PropTypes.string,
  logoText: PropTypes.string,
  voteText: PropTypes.string,
  image: PropTypes.string,
  routes: PropTypes.arrayOf(PropTypes.object),
};

function mapDispatchToProps(dispatch) {
  return {
    onScatterConnect: () => dispatch(connectAccount()),
    onScatterRemove: () => dispatch(removeAccount()),
  };
}

export default compose(
  withStyles(sidebarStyle),
  connect(
    null,
    mapDispatchToProps
  )
)(Sidebar);
