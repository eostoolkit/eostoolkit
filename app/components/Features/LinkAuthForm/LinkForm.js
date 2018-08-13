import React from 'react';
import { compose } from 'recompose';
import { withFormik } from 'formik';
import * as Yup from 'yup';

import SupervisorAccount from '@material-ui/icons/SupervisorAccount';
import ToolBody from 'components/Tool/ToolBody';
import ToolForm from 'components/Tool/ToolForm';
import ToolInput from 'components/Tool/ToolInput';

const FormData = [
  {
    id: 'account',
    label: 'Account Name',
    placeholder: 'Account name to link',
    md: 6,
  },{
    id: 'requirement',
    label: 'Account Permission',
    placeholder: 'Account permission to link (i.e. sender)',
    md: 6,
  },{
    id: 'code',
    label: 'Contract Name',
    placeholder: 'Contract account name (i.e. eosio.token)',
    md: 6,
  },{
    id: 'type',
    label: 'Contract Action',
    placeholder: 'Contract action name (i.e. transfer)',
    md: 6,
  }
];

const FormObject = props => {
  const { handleSubmit } = props;
  const formProps = {
    handleSubmit,
    submitColor: 'rose',
    submitText: 'Link Auth',
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
        ...values
      },
    },
  ];
  return transaction;
};

const validationSchema = Yup.object().shape({
  account: Yup.string().required('Account name is required'),
  code: Yup.string().required('Contract name is required'),
  type: Yup.string().required('Action name is required'),
  requirement: Yup.string().required('Permission is required'),
});

const ResignForm = props => {
  return (
    <ToolBody
      color="warning"
      icon={SupervisorAccount}
      header="Link Auth"
      subheader=" - Specify permissions for certain contract actions">
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
      account: props.networkIdentity ? props.networkIdentity.name : '',
    }),
    validationSchema,
  })
);

export default enhance(ResignForm);
