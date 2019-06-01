/**
 *
 * FeaturesPage
 *
 */
import React from 'react';
import { NavLink } from 'react-router-dom';
// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles';
// @material-ui/icons
import Info from '@material-ui/icons/Info';
import Favorite from '@material-ui/icons/Favorite';
import Tool from 'components/Tool/Tool';
import ToolSection from 'components/Tool/ToolSection';
import ToolBody from 'components/Tool/ToolBody';
import dashboardRoutes from 'routes/dashboard';
import HomeDoc from 'components/Information/Home';
import News from 'components/Information/News';

import { injectIntl } from 'react-intl';
import messages from './messages';

const FeaturesPage = props => {
  const { classes, backgroundColor, intl } = props;

  return (
    <Tool>
      <ToolSection lg={12}>
        <ToolBody
          style={{background:'bisque'}}
          color="rose"
          icon={Favorite}
          header={intl.formatMessage(messages.toolkitNewsHeader)}
          subheader={intl.formatMessage(messages.toolkitNewsSubHeader)}>
          <News style={{background:'bisque'}} />
        </ToolBody>
      </ToolSection>

      <ToolSection lg={12}>
        <ToolBody
          color="info"
          icon={Info}
          header={intl.formatMessage(messages.welcomeEosToolkitHeader)}
          subheader={intl.formatMessage(messages.welcomeEosToolkitSubheader)}>
          <HomeDoc />
        </ToolBody>
      </ToolSection>

      <ToolSection lg={4}>
        <ToolBody color="warning" icon={Favorite} header={intl.formatMessage(messages.favouritesHeader)}>
          {dashboardRoutes.map(({ icon, name, collapse, hide, redirect, path, views }) => {
            if (!redirect && !hide && !collapse) {
              return (
                <NavLink to={path} key={`route-${path}`}>
                  <h4>{name}</h4>
                </NavLink>
              );
            }
          })}
        </ToolBody>
      </ToolSection>

      {dashboardRoutes.map(route => {
        if (route.collapse) {
          return (
            <ToolSection lg={4} key={`header-${route.name}`}>
              <ToolBody color="rose" icon={route.icon} header={route.name}>
                {route.views.map(view => {
                  return (
                    <NavLink to={view.path} key={`route-view-${view.path}`}>
                      <h4>{view.name}</h4>
                    </NavLink>
                  );
                })}
              </ToolBody>
            </ToolSection>
          );
        }
      })}
    </Tool>
  );
};

export default withStyles(withStyles)(FeaturesPage);
