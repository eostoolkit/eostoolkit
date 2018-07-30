import React from 'react';

import ToolForm from 'components/Tool/ToolForm';
import ToolInput from 'components/Tool/ToolInput';

const FormData = [
  {
    id: 'owner',
    label: 'Change permission on',
    placeholder: 'Account whose permissions will change',
    md: 12,
  },
  {
    id: 'activeKey',
    label: 'Active Permision (Only complete if you want to change)',
    placeholder: 'Public key or account name',
    md: 12,
  },
  {
    id: 'ownerKey',
    label: 'Owner Permision (Only complete if you want to change)',
    placeholder: 'Public key or account name',
    md: 12,
  },
];

const FormObject = props => {
  const { handleSubmit } = props;
  const formProps = {
    handleSubmit,
    submitColor: 'rose',
    submitText: 'Update',
  };
  return (
    <ToolForm {...formProps}>
      {FormData.map(form => {
        return <ToolInput key={form.id} {...form} {...props} />;
      })}
    </ToolForm>
  );
};

export default FormObject;
