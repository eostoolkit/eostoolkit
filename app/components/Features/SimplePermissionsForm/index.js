/**
 *
 * SimplePermissionsForm
 *
 */

import React from 'react';
import { compose } from 'recompose';
import { withFormik } from 'formik';
import * as Yup from 'yup';

import PersonAdd from '@material-ui/icons/PersonAdd';

import Tool from 'components/Tool/Tool';
import ToolSection from 'components/Tool/ToolSection';
import ToolBody from 'components/Tool/ToolBody';

import ChangePermissions from 'components/Information/ChangePermissions';
import FormObject from './FormObject';

const validationSchema = Yup.object().shape({
  owner: Yup.string().required('Owner name is required'),
  activeKey: Yup.string(),
  ownerKey: Yup.string(),
});

const SimplePermissionsForm = props => {
  return (
    <Tool>
      <ToolSection lg={8}>
        <ToolBody color="warning" icon={PersonAdd} header="Change Permissions" subheader=" Simple active / owner">
          <FormObject {...props}/>
        </ToolBody>
      </ToolSection>
      <ToolSection lg={4}>
        <ToolBody color="danger" header="Important">
          <ChangePermissions />
        </ToolBody>
      </ToolSection>
    </Tool>
  );
};

const enhance = compose(
  withFormik({
    handleSubmit: (values, { props, setSubmitting }) => {
      const { handleSubmit } = props;
      setSubmitting(false);
      handleSubmit({ ...values});
    },
    mapPropsToValues: props => ({
      owner: props.eosAccount,
      activeKey: '',
      ownerKey: '',
    }),
    validationSchema,
  })
);

export default enhance(SimplePermissionsForm);
