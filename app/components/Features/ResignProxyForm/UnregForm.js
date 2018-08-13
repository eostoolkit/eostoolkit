import React from 'react';
import { compose } from 'recompose';
import { withFormik } from 'formik';
import * as Yup from 'yup';

import SupervisorAccount from '@material-ui/icons/SupervisorAccount';
import ToolBody from 'components/Tool/ToolBody';

import FormObject from './UnregFormObject';

const makeTransaction = values => {
  const transaction = [
    {
      account: 'regproxyinfo',
      name: 'remove',
      data: {
        proxy: values.proxy,
      },
    },
  ];
  return transaction;
};

const validationSchema = Yup.object().shape({
  proxy: Yup.string().required('Proxy account is required'),
});

const UnregForm = props => {
  return (
    <ToolBody
      color="warning"
      icon={SupervisorAccount}
      header="Unregister Proxy Info"
      subheader=" - Remove details about your proxy">
      <FormObject {...props} />
    </ToolBody>
  );
};

const enhance = compose(
  withFormik({
    handleSubmit: (values, { props, setSubmitting }) => {
      const { pushTransaction } = props;
      const transaction = makeTransaction(values);
      setSubmitting(false);
      pushTransaction(transaction,props.history);
    },
    mapPropsToValues: props => ({
      proxy: props.networkIdentity ? props.networkIdentity.name : '',
    }),
    validationSchema,
  })
);

export default enhance(UnregForm);
