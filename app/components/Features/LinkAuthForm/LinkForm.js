import React from 'react';
import { compose } from 'recompose';
import { withFormik } from 'formik';
import * as Yup from 'yup';

import SupervisorAccount from '@material-ui/icons/SupervisorAccount';
import ToolBody from 'components/Tool/ToolBody';
import ToolForm from 'components/Tool/ToolForm';
import ToolInput from 'components/Tool/ToolInput';

import messages from './messages';
import commonMessages from '../../messages';

const FormObject = props => {
  const { handleSubmit, intl } = props;
  const FormData = [
    {
      id: 'account',
      label: intl.formatMessage(commonMessages.formAccountNameText),
      placeholder: intl.formatMessage(messages.linkAuthAccountPlaceholder),
      md: 6,
    },
    {
      id: 'requirement',
      label: intl.formatMessage(commonMessages.formAccountPermissionLabel),
      placeholder: intl.formatMessage(messages.linkAuthAccountPermissionPlaceholder),
      md: 6,
    },
    {
      id: 'code',
      label: intl.formatMessage(messages.formContractNameLabel),
      placeholder: intl.formatMessage(messages.formContractNamePlaceholder),
      md: 6,
    },
    {
      id: 'type',
      label: intl.formatMessage(messages.formContractActionLabel),
      placeholder: intl.formatMessage(messages.formContractActionPlaceholder),
      md: 6,
    },
  ];
  const formProps = {
    handleSubmit,
    submitColor: 'rose',
    submitText: intl.formatMessage(messages.linkAuthText),
  };
  return (
    <ToolForm {...formProps}>
      {FormData.map(form => {
        return <ToolInput key={form.id} {...form} {...props} />;
      })}
    </ToolForm>
  );
};

const makeTransaction = values => {
  const transaction = [
    {
      account: 'eosio',
      name: 'linkauth',
      data: {
        ...values,
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
      header={intl.formatMessage(messages.linkAuthText)}
      subheader={intl.formatMessage(messages.linkAuthSubheader)}>
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
      account: props.networkIdentity ? props.networkIdentity.name : '',
    }),
    validationSchema: props => {
      const { intl } = props;
      return Yup.object().shape({
        account: Yup.string().required(intl.formatMessage(commonMessages.formAccountNameRequired)),
        code: Yup.string().required(intl.formatMessage(commonMessages.formContractNameRequired)),
        type: Yup.string().required(intl.formatMessage(commonMessages.formActionNameRequired)),
        requirement: Yup.string().required(intl.formatMessage(commonMessages.formPermissionRequired)),
      });
    },
  })
);

export default enhance(ResignForm);
