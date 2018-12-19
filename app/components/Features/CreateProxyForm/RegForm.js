import React from 'react';
import { compose } from 'recompose';
import { withFormik } from 'formik';
import * as Yup from 'yup';

import SupervisorAccount from '@material-ui/icons/SupervisorAccount';
import ToolBody from 'components/Tool/ToolBody';

import FormObject from './RegFormObject';

const makeTransaction = values => {
  const transaction = [
    {
      account: 'regproxyinfo',
      name: 'set',
      data: {
        ...values,
      },
    },
  ];
  return transaction;
};

const validationSchema = Yup.object().shape({
  proxy: Yup.string().required('Proxy account is required'),
  name: Yup.string()
    .required('Name is required')
    .max(64),
  slogan: Yup.string().max(64),
  philosophy: Yup.string().max(1024),
  background: Yup.string().max(1024),
  website: Yup.string()
    .url()
    .max(256),
  logo_256: Yup.string()
    .url()
    .max(256),
  telegram: Yup.string().max(64),
  steemit: Yup.string().max(64),
  twitter: Yup.string().max(64),
  wechat: Yup.string().max(64),
});

const RegForm = props => {
  return (
    <ToolBody
      color="warning"
      icon={SupervisorAccount}
      header="Register Proxy Info"
      subheader=" - Provide details about your proxy to the world">
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
      pushTransaction(transaction, props.history);
    },
    mapPropsToValues: props => ({
      proxy: props.networkIdentity ? props.networkIdentity.name : '',
      name: '',
      slogan: '',
      philosophy: '',
      background: '',
      website: '',
      logo_256: '',
      telegram: '',
      steemit: '',
      twitter: '',
      wechat: '',
    }),
    validationSchema,
  })
);

export default enhance(RegForm);
