import React from 'react';

import ToolForm from 'components/Tool/ToolForm';
import ToolInput from 'components/Tool/ToolInput';
import GridContainer from 'components/Grid/GridContainer';
import GridItem from 'components/Grid/GridItem';
import Button from 'components/CustomButtons/Button';
import AddCircle from '@material-ui/icons/AddCircle';
import RemoveCircle from '@material-ui/icons/RemoveCircle';

const StaticFields = [
  {
    id: 'owner',
    label: 'Account',
    placeholder: 'Account being updated',
    md: 6,
  },{
    id: 'threshold',
    label: 'Threshold',
    placeholder: 'Threshold for this Permission',
    md: 6,
  },{
    id: 'permission',
    label: 'Permission',
    placeholder: 'Permission to change (i.e. active)',
    md: 6,
  },{
    id: 'parent',
    label: 'Parent',
    placeholder: 'Parent permission (i.e. owner)',
    md: 6,
  },
];

const AuthField = {
  label: 'Authority',
  placeholder: 'Public key or Actor@Permission',
  md: 10,
  xs: 10,
  sm: 10,
};

const WeightField = {
  label: 'Weight',
  placeholder: 'Weight for this Permission',
  md: 2,
  xs: 2,
  sm: 2,
};



const FormObject = props => {
  const { handleSubmit, inputManager: { inputs, addInputs, subInputs} } = props;

  const addField = () => {
    addInputs();

    const fieldValues = {
      [`auth_value_${inputs}`]: '',
      [`auth_weight_${inputs}`]: '',
    };

    props.setValues({
      ...props.values,
      ...fieldValues
    });
  }

  const subField = () => {
    let values = props.values;
    delete values[`auth_value_${inputs}`];
    delete values[`auth_weight_${inputs}`];

    props.setValues({
      ...values
    });

    subInputs();
  }

  const extraButton = () => {
    return (
      <React.Fragment>
        <Button color="success" onClick={()=>addField()}><AddCircle/> Row</Button>
        <Button color="danger" onClick={()=>subField()}><RemoveCircle/> Row</Button>
      </React.Fragment>
    );
  };

  const formProps = {
    handleSubmit,
    submitColor: 'rose',
    submitText: 'Update',
    extraButtons: extraButton,
    md: 6
  };

  return (
    <ToolForm {...formProps}>
      {StaticFields.map(form => {
        return <ToolInput key={form.id} {...form} {...props} />;
      })}
      {[...Array(inputs)].map((x,i) =>
        <React.Fragment key={`field_${i}`}>
          <ToolInput id={`auth_value_${i}`} {...AuthField} {...props} />
          <ToolInput id={`auth_weight_${i}`} {...WeightField} {...props} />
        </React.Fragment>
      )}

    </ToolForm>
  );
};

export default FormObject;
