/**
 *
 * ForumStatusForm
 *
 */

import React from 'react';
import { compose } from 'recompose';
import { withFormik } from 'formik';
import * as Yup from 'yup';

import RecordVoiceOver from '@material-ui/icons/RecordVoiceOver';

import Tool from 'components/Tool/Tool';
import ToolSection from 'components/Tool/ToolSection';
import ToolBody from 'components/Tool/ToolBody';
import ToolForm from 'components/Tool/ToolForm';
import ToolInput from 'components/Tool/ToolInput';

const FormData = [
  {
    id: 'account',
    label: 'Account',
    placeholder: 'Account to set status for',
  },
  {
    id: 'content',
    label: 'Status',
    placeholder: 'Status text',
  },
];

const FormObject = props => {
  const { handleSubmit } = props;
  const formProps = {
    handleSubmit,
    submitColor: 'rose',
    submitText: 'Submit',
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
      account: 'eosforumdapp',
      name: 'status',
      data: {
        ...values,
      },
    },
  ];
  return transaction;
};

const validationSchema = Yup.object().shape({
  account: Yup.string().required('Account is required'),
  content: Yup.string().required('Status text is required'),
});

const ForumStatusForm = props => {
  return (
    <Tool>
      <ToolSection lg={8}>
        <ToolBody color="warning" icon={RecordVoiceOver} header="Forum" subheader=" - Status">
          <FormObject {...props} />
        </ToolBody>
      </ToolSection>
      <ToolSection lg={4}>
        <ToolBody color="info" header="Tutorial">
          <h5>EOSIO Forum Status</h5>
          <p>This is part of the eosio.forum Referendum project.</p>
          <p>You can post a short, twitter like status</p>
          <p>
            For more information checkout{' '}
            <a href="https://github.com/eoscanada/eosio.forum" target="new">
              Eos Canada GitHub
            </a>
          </p>
        </ToolBody>
      </ToolSection>
    </Tool>
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
      content: '',
    }),
    validationSchema,
  })
);

export default enhance(ForumStatusForm);
