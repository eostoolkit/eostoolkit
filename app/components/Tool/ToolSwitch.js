import React from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import GridItem from 'components/Grid/GridItem';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Tooltip from '@material-ui/core/Tooltip';
import regularFormsStyle from 'assets/jss/regularFormsStyle';

const ToolSwitch = props => {
  const {classes, xs, sm, md, lg, id, label, placeholder, type, ...formProps} = props;
  const { values, touched, errors, handleChange, handleBlur } = formProps;
  return (
    <GridItem xs={xs || 12} sm={sm || 12} md={md || lg || 6} lg={lg || md || 6}>
      <Tooltip
        id="tooltip-right"
        title={placeholder || "Switch"}
        placement="right"
        classes={{ tooltip: classes.formTooltip }}>
        <FormControlLabel
          control={
            <Switch
              id={id}
              checked={values[id]}
              onChange={handleChange}
              onBlur={handleBlur}
              value={values[id] ? 'true' : 'false'}
              classes={{
                switchBase: classes.switchBase,
                checked: classes.switchChecked,
                icon: classes.switchIcon,
                iconChecked: classes.switchIconChecked,
                bar: classes.switchBar,
              }}
            />
          }
          classes={{
            label: classes.label,
          }}
          label={label || id || "Switch"}
        />
      </Tooltip>
    </GridItem>
  );
};

export default withStyles(regularFormsStyle)(ToolSwitch);
