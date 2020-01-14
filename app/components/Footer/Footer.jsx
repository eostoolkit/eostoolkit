import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

import footerStyle from './footerStyle';

import { injectIntl } from 'react-intl';

import messages from './messages';

function Footer({ ...props }) {
  const { classes, fluid, white, intl } = props;
  const container = cx({
    [classes.container]: !fluid,
    [classes.containerFluid]: fluid,
    [classes.whiteColor]: white,
  });
  const anchor =
    classes.a +
    cx({
      [` ${classes.whiteColor}`]: white,
    });
  const block = cx({
    [classes.block]: true,
    [classes.whiteColor]: white,
  });
  return (
    <footer className={classes.footer}>
      <div className={container}>
        <div className={classes.left}>
          <List className={classes.list}>
            <ListItem className={classes.inlineBlock}>
              <a href="https://github.com/generEOS" className={block}>
                {intl.formatMessage(messages.footerGithub)}
              </a>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <a href="https://steemit.com/@genereos" target="new" className={block}>
                {intl.formatMessage(messages.footerSteemit)}
              </a>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <a href="https://www.facebook.com/generEOS" target="new" className={block}>
                {intl.formatMessage(messages.footerFacebook)}
              </a>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <a href="https://www.reddit.com/r/GenerEOS/" target="new" className={block}>
                {intl.formatMessage(messages.footerReddit)}
              </a>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <a href="https://twitter.com/GenerEOSAus" target="new" className={block}>
                {intl.formatMessage(messages.footerTwitter)}
              </a>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <a href="https://www.youtube.com/channel/UCFHa6AJmcZBjXGILF2EZnHQ" target="new" className={block}>
                {intl.formatMessage(messages.footerYouTube)}
              </a>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <a href="https://t.me/generEOS" target="new" className={block}>
                {intl.formatMessage(messages.footerTelegram)}
              </a>
            </ListItem>
          </List>
        </div>
        <p className={classes.right}>
          &copy; {1900 + new Date().getYear()}{' '}
          <a href="https://www.genereos.io" target="new" className={anchor}>
            {'GenerEOS'}
          </a>
          {intl.formatMessage(messages.footerLoveMessage)}
        </p>
      </div>
    </footer>
  );
}

Footer.propTypes = {
  classes: PropTypes.object.isRequired,
  fluid: PropTypes.bool,
  white: PropTypes.bool,
  rtlActive: PropTypes.bool,
};

export default injectIntl(withStyles(footerStyle)(Footer));
