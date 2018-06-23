import React from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import Check from '@material-ui/icons/Check';
import Clear from '@material-ui/icons/Clear';
// nodejs library to set properties for components
import PropTypes from 'prop-types';
// nodejs library that concatenates classes
import classNames from 'classnames';

import customInputStyle from './customInputStyle';

function CustomInput({ ...props }) {
  const {
    classes,
    formControlProps,
    labelText,
    id,
    labelProps,
    inputProps,
    error,
    touched,
    white,
    inputRootCustomClasses,
    success,
  } = props;

  const labelClasses = classNames({
    [` ${classes.labelRootError}`]: error,
    [` ${classes.labelRootSuccess}`]: success && !error,
  });
  const underlineClasses = classNames({
    [classes.underlineError]: error,
    [classes.underlineSuccess]: success && !error,
    [classes.underline]: true,
    [classes.whiteUnderline]: white,
  });
  const marginTop = classNames({
    [inputRootCustomClasses]: inputRootCustomClasses !== undefined,
  });
  const inputClasses = classNames({
    [classes.input]: true,
    [classes.whiteInput]: white,
  });
  let formControlClasses;
  if (formControlProps !== undefined) {
    formControlClasses = classNames(formControlProps.className, classes.formControl);
  } else {
    formControlClasses = classes.formControl;
  }
  let feedbackClasses = classes.feedback;
  if (inputProps !== undefined) {
    if (inputProps.endAdornment !== undefined) {
      feedbackClasses = `${feedbackClasses} ${classes.feedbackRight}`;
    }
  }

  let Feedback = null;
  if (error) {
    Feedback = <Clear className={`${feedbackClasses} ${classes.labelRootError}`} />;
  } else if (success) {
    Feedback = <Check className={`${feedbackClasses} ${classes.labelRootSuccess}`} />;
  }

  return (
    <FormControl {...formControlProps} className={formControlClasses}>
      {labelText !== undefined ? (
        <InputLabel className={`${classes.labelRoot} ${labelClasses}`} htmlFor={id} {...labelProps}>
          {!error ? labelText : ''}
          {error && touched && ` [${error}]`}
        </InputLabel>
      ) : null}
      <Input
        classes={{
          input: inputClasses,
          root: marginTop,
          disabled: classes.disabled,
          underline: underlineClasses,
        }}
        id={id}
        {...inputProps}
      />
      {Feedback}
    </FormControl>
  );
}

CustomInput.propTypes = {
  classes: PropTypes.object.isRequired,
  labelText: PropTypes.node,
  labelProps: PropTypes.object,
  id: PropTypes.string,
  inputProps: PropTypes.object,
  formControlProps: PropTypes.object,
  inputRootCustomClasses: PropTypes.string,
  error: PropTypes.string,
  touched: PropTypes.bool,
  success: PropTypes.bool,
  white: PropTypes.bool,
};

export default withStyles(customInputStyle)(CustomInput);
