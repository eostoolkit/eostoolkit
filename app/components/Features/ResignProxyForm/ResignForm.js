import React from 'react';
import { compose } from 'recompose';
import { withFormik } from 'formik';
import * as Yup from 'yup';

import SupervisorAccount from '@material-ui/icons/SupervisorAccount';
import ToolBody from 'components/Tool/ToolBody';

import FormObject from './ResignFormObject';

import messages from './messages';
import commonMessages from '../../messages';

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

const ResignForm = props => {
  const { intl } = props;
  return (
    <ToolBody
      color="warning"
      icon={SupervisorAccount}
      header={intl.formatMessage(messages.resignProxyFormHeader)}
      subheader={intl.formatMessage(messages.resignProxyFormSubHeader)}>
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
      owner: props.networkIdentity ? props.networkIdentity.name : '',
    }),
    validationSchema: props => {
      const { intl } = props;
      return Yup.object().shape({
        owner: Yup.string().required(intl.formatMessage(commonMessages.formProxyNameRequired)),
      });
    },
  })
);

export default enhance(ResignForm);
