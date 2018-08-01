import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
// import { Manager, Target, Popper } from 'react-popper';

// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles';

import headerLinksStyle from './headerLinksStyle';

class HeaderLinks extends React.Component {
  state = {
    open: false,
  };
  handleClick = () => {
    this.setState({ open: !this.state.open });
  };
  handleClose = () => {
    this.setState({ open: false });
  };
  render() {
    const { classes, rtlActive } = this.props;
    // const { open } = this.state;
    // const searchButton = `${classes.top} ${classes.searchButton} ${classNames({
    //   [classes.searchRTL]: rtlActive,
    // })}`;
    // const dropdownItem = `${classes.dropdownItem} ${classNames({
    //   [classes.dropdownItemRTL]: rtlActive,
    // })}`;
    const wrapper = classNames({
      [classes.wrapperRTL]: rtlActive,
    });
    // const managerClasses = classNames({
    //   [classes.managerClasses]: true,
    // });
    return (
      // TODO: Lets add some alerts for transaction success failure
      // TODO: Or we add all our social media here
      ''
      //
      //   <Manager className={managerClasses}>
      //     <Target>
      //       <Button
      //         color="transparent"
      //         justIcon
      //         aria-label="Notifications"
      //         aria-owns={open ? "menu-list" : null}
      //         aria-haspopup="true"
      //         onClick={this.handleClick}
      //         className={rtlActive ? classes.buttonLinkRTL : classes.buttonLink}
      //         muiClasses={{
      //           label: rtlActive ? classes.labelRTL : ""
      //         }}
      //       >
      //         <Notifications
      //           className={
      //             classes.headerLinksSvg +
      //             " " +
      //             (rtlActive
      //               ? classes.links + " " + classes.linksRTL
      //               : classes.links)
      //           }
      //         />
      //         <span className={classes.notifications}>5</span>
      //         <Hidden mdUp>
      //           <span onClick={this.handleClick} className={classes.linkText}>
      //             {rtlActive ? "إعلام" : "Notification"}
      //           </span>
      //         </Hidden>
      //       </Button>
      //     </Target>
      //     <Popper
      //       placement="bottom-start"
      //       eventsEnabled={open}
      //       className={
      //         classNames({ [classes.popperClose]: !open }) +
      //         " " +
      //         classes.pooperResponsive
      //       }
      //     >
      //       <ClickAwayListener onClickAway={this.handleClose}>
      //         <Grow
      //           in={open}
      //           id="menu-list"
      //           style={{ transformOrigin: "0 0 0" }}
      //         >
      //           <Paper className={classes.dropdown}>
      //             <MenuList role="menu">
      //               <MenuItem
      //                 onClick={this.handleClose}
      //                 className={dropdownItem}
      //               >
      //                 {rtlActive
      //                   ? "إجلاء أوزار الأسيوي حين بل, كما"
      //                   : "Mike John responded to your email"}
      //               </MenuItem>
      //               <MenuItem
      //                 onClick={this.handleClose}
      //                 className={dropdownItem}
      //               >
      //                 {rtlActive
      //                   ? "شعار إعلان الأرضية قد ذلك"
      //                   : "You have 5 new tasks"}
      //               </MenuItem>
      //               <MenuItem
      //                 onClick={this.handleClose}
      //                 className={dropdownItem}
      //               >
      //                 {rtlActive
      //                   ? "ثمّة الخاصّة و على. مع جيما"
      //                   : "You're now friend with Andrew"}
      //               </MenuItem>
      //               <MenuItem
      //                 onClick={this.handleClose}
      //                 className={dropdownItem}
      //               >
      //                 {rtlActive ? "قد علاقة" : "Another Notification"}
      //               </MenuItem>
      //               <MenuItem
      //                 onClick={this.handleClose}
      //                 className={dropdownItem}
      //               >
      //                 {rtlActive ? "قد فاتّبع" : "Another One"}
      //               </MenuItem>
      //             </MenuList>
      //           </Paper>
      //         </Grow>
      //       </ClickAwayListener>
      //     </Popper>
      //   </Manager>
    );
  }
}

HeaderLinks.propTypes = {
  classes: PropTypes.object.isRequired,
  // rtlActive: PropTypes.bool,
};

export default withStyles(headerLinksStyle)(HeaderLinks);
