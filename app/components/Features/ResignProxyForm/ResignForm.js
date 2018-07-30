import React from 'react';
import { compose } from 'recompose';
import { withFormik } from 'formik';
import * as Yup from 'yup';

import SupervisorAccount from '@material-ui/icons/SupervisorAccount';
import ToolBody from 'components/Tool/ToolBody';

import FormObject from './ResignFormObject';

const makeTransaction = values => {
  const transaction = [
    {
      account: 'eosio',
      name: 'regproxy',
      data: {
        proxy: values.owner,
        isproxy: 0,
      },
    },
  ];
  return transaction;
};

const validationSchema = Yup.object().shape({
  owner: Yup.string().required('Proxy name is required'),
});

const ResignForm = props => {
  return (
    <ToolBody
      color="warning"
      icon={SupervisorAccount}
      header="Resign Proxy"
      subheader=" - You no longer vote on behalf of others">
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
      pushTransaction(transaction);
    },
    mapPropsToValues: props => ({
      owner: props.eosAccount,
    }),
    validationSchema,
  })
);

export default enhance(ResignForm);
