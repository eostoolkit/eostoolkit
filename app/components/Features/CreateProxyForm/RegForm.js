import React from 'react';
import { compose } from 'recompose';
import { withFormik } from 'formik';
import * as Yup from 'yup';

import SupervisorAccount from '@material-ui/icons/SupervisorAccount';
import ToolBody from 'components/Tool/ToolBody';

import FormObject from './RegFormObject';

import messages from './messages';

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

const RegForm = props => {
  const { intl } = props;
  return (
    <ToolBody
      color="warning"
      icon={SupervisorAccount}
      header={intl.formatMessage(messages.createProxyRegisterHeader)}
      subheader={intl.formatMessage(messages.createProxyRegisterSubHeader)}>
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
    validationSchema: props => {
      const { intl } = props;
      return Yup.object().shape({
        proxy: Yup.string().required(intl.formatMessage(messages.formCreateProxyAccountRequired)),
        name: Yup.string()
          .required(intl.formatMessage(messages.formCreateProxyNameRequired))
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
    },
  })
);

export default enhance(RegForm);
