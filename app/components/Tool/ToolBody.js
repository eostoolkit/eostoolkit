import React from 'react';

// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles';
import Card from 'components/Card/Card';
import CardHeader from 'components/Card/CardHeader';
import CardIcon from 'components/Card/CardIcon';
import CardBody from 'components/Card/CardBody';

import HelpOutline from '@material-ui/icons/HelpOutline';

import style from 'assets/jss/regularFormsStyle';

const ToolBody = props => {
  const { classes, style, className, backgroundColor, color, icon, header, subheader } = props;
  return (
    <Card style={style}>
      <CardHeader color={color || 'info'} icon>
        <CardIcon color={color || 'info'}>{icon ? <props.icon /> : <HelpOutline />}</CardIcon>
        <h4 className={classes.cardIconTitle}>
          {header || 'Information'}
          {subheader ? <small>{subheader}</small> : ''}
        </h4>
      </CardHeader>
      <CardBody>{props.children}</CardBody>
    </Card>
  );
};

export default withStyles(style)(ToolBody);
