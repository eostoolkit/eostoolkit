import React from 'react';
import GridItem from 'components/Grid/GridItem';
import CustomInput from 'components/CustomInput/CustomInput';

const ToolInput = props => {
  const { xs, sm, md, lg, id, label, placeholder, type, multiline, rows, ...formProps } = props;
  const { values, touched, errors, handleChange, handleBlur } = formProps;
  return (
    <GridItem xs={xs || 12} sm={sm || 12} md={md || lg || 6} lg={lg || md || 6}>
      <CustomInput
        labelText={label || id || 'Input'}
        id={id}
        error={errors[id]}
        touched={touched[id]}
        formControlProps={{
          fullWidth: true,
        }}
        inputProps={{
          type: type || 'text',
          placeholder: placeholder || 'Input',
          value: values[id],
          onChange: handleChange,
          onBlur: handleBlur,
          multiline: false || multiline,
          rows: rows || '0',
        }}
      />
    </GridItem>
  );
};

export default ToolInput;
