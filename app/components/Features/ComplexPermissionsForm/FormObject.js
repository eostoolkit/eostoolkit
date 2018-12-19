import React from 'react';

import ToolForm from 'components/Tool/ToolForm';
import ToolInput from 'components/Tool/ToolInput';

import Button from 'components/CustomButtons/Button';
import AddCircle from '@material-ui/icons/AddCircle';
import RemoveCircle from '@material-ui/icons/RemoveCircle';

import messages from './messages';

const FormObject = props => {
  const {
    handleSubmit,
    inputManager: { inputs, addInputs, subInputs },
    intl,
  } = props;

  const StaticFields = [
    {
      id: 'owner',
      label: intl.formatMessage(messages.complexPermissionFormAccountLabel),
      placeholder: intl.formatMessage(messages.complexPermissionFormAccountPlaceholder),
      md: 6,
    },
    {
      id: 'threshold',
      label: intl.formatMessage(messages.complexPermissionFormThresholdLabel),
      placeholder: intl.formatMessage(messages.complexPermissionFormThresholdPlaceholder),
      md: 6,
    },
    {
      id: 'permission',
      label: intl.formatMessage(messages.complexPermissionFormPermissionLabel),
      placeholder: intl.formatMessage(messages.complexPermissionFormPermissionPlaceholder),
      md: 6,
    },
    {
      id: 'parent',
      label: intl.formatMessage(messages.complexPermissionFormParentLabel),
      placeholder: intl.formatMessage(messages.complexPermissionFormParentPlaceholder),
      md: 6,
    },
  ];

  const AuthField = {
    label: intl.formatMessage(messages.complexPermissionFormAuthorityLabel),
    placeholder: intl.formatMessage(messages.complexPermissionFormAuthorityPlaceholder),
    md: 10,
    xs: 10,
    sm: 10,
  };

  const WeightField = {
    label: intl.formatMessage(messages.complexPermissionFormWeightLabel),
    placeholder: intl.formatMessage(messages.complexPermissionFormWeightPlaceholder),
    md: 2,
    xs: 2,
    sm: 2,
  };

  const addField = () => {
    addInputs();

    const fieldValues = {
      [`auth_value_${inputs}`]: '',
      [`auth_weight_${inputs}`]: '',
    };

    props.setValues({
      ...props.values,
      ...fieldValues,
    });
  };

  const subField = () => {
    const values = props.values;
    delete values[`auth_value_${inputs}`];
    delete values[`auth_weight_${inputs}`];

    props.setValues({
      ...values,
    });

    subInputs();
  };

  const extraButton = () => {
    return (
      <React.Fragment>
        <Button color="success" onClick={() => addField()}>
          <AddCircle /> Row
        </Button>
        <Button color="danger" onClick={() => subField()}>
          <RemoveCircle /> Row
        </Button>
      </React.Fragment>
    );
  };

  const formProps = {
    handleSubmit,
    submitColor: 'rose',
    submitText: intl.formatMessage(messages.complexPermissionFormSubmitText),
    extraButtons: extraButton,
    md: 6,
  };

  return (
    <ToolForm {...formProps}>
      {StaticFields.map(form => {
        return <ToolInput key={form.id} {...form} {...props} />;
      })}
      {[...Array(inputs)].map((x, i) => (
        <React.Fragment key={`field_${i}`}>
          <ToolInput id={`auth_value_${i}`} {...AuthField} {...props} />
          <ToolInput id={`auth_weight_${i}`} {...WeightField} {...props} />
        </React.Fragment>
      ))}
    </ToolForm>
  );
};

export default FormObject;
