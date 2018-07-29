
import React from 'react';
import { compose } from 'recompose';
import { withFormik } from 'formik';
import * as Yup from 'yup';

import SupervisorAccount from '@material-ui/icons/SupervisorAccount';
import ToolBody from 'components/Tool/ToolBody';

import FormObject from './CreateFormObject';

const validationSchema = Yup.object().shape({
  owner: Yup.string().required('Proxy name is required'),
});

const CreateForm = props => {
  return (
    <ToolBody color="warning" icon={SupervisorAccount} header="Create Proxy" subheader=" - You will vote on behalf of others">
      <FormObject {...props}/>
    </ToolBody>
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
    }),
    validationSchema,
  })
);

export default enhance(CreateForm);
