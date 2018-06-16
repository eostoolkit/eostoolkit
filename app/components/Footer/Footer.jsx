import React from "react";
import PropTypes from "prop-types";
import cx from "classnames";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

import footerStyle from "./footerStyle.jsx";

function Footer({ ...props }) {
  const { classes, fluid, white, rtlActive } = props;
  var container = cx({
    [classes.container]: !fluid,
    [classes.containerFluid]: fluid,
    [classes.whiteColor]: white
  });
  var anchor =
    classes.a +
    cx({
      [" " + classes.whiteColor]: white
    });
  var block = cx({
    [classes.block]: true,
    [classes.whiteColor]: white
  });
  return (
    <footer className={classes.footer}>
      <div className={container}>
        <div className={classes.left}>
          <List className={classes.list}>
            <ListItem className={classes.inlineBlock}>
              <a href="https://github.com/generEOS" className={block}>
                {"GitHub"}
              </a>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <a href="https://steemit.com/@genereos" target="new" className={block}>
                {"Steemit"}
              </a>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <a href="https://www.facebook.com/generEOS" target="new" className={block}>
                {"Facebook"}
              </a>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <a href="https://www.reddit.com/r/GenerEOS/" target="new" className={block}>
                {"Reddit"}
              </a>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <a href="https://twitter.com/genereossydney" target="new" className={block}>
                {"Twitter"}
              </a>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <a href="https://www.youtube.com/channel/UCFHa6AJmcZBjXGILF2EZnHQ" target="new" className={block}>
                {"YouTube"}
              </a>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <a href="https://t.me/generEOS" target="new" className={block}>
                {"Telegram"}
              </a>
            </ListItem>
          </List>
        </div>
        <p className={classes.right}>
          &copy; {1900 + new Date().getYear()}{" "}
          <a href="https://www.genereos.io" target="new" className={anchor}>
            {"GenerEOS"}
          </a>
          {", made with love for the EOS Community"}
        </p>
      </div>
    </footer>
  );
}

Footer.propTypes = {
  classes: PropTypes.object.isRequired,
  fluid: PropTypes.bool,
  white: PropTypes.bool,
  rtlActive: PropTypes.bool
};

export default withStyles(footerStyle)(Footer);
