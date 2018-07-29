
import React from 'react';
import { compose } from 'recompose';
import { withFormik } from 'formik';
import * as Yup from 'yup';

import SupervisorAccount from '@material-ui/icons/SupervisorAccount';
import ToolBody from 'components/Tool/ToolBody';

import FormObject from './UnregFormObject';

const validationSchema = Yup.object().shape({
  proxy: Yup.string().required('Proxy account is required'),
});


const UnregForm = props => {
  return (
    <ToolBody color="warning" icon={SupervisorAccount} header="Unregister Proxy Info" subheader=" - Remove details about your proxy">
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
      proxy: props.eosAccount,
    }),
    validationSchema,
  })
);

export default enhance(UnregForm);
