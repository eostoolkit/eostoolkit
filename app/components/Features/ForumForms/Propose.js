/**
 *
 * ForumStatusForm
 *
 */

import React from 'react';
import { compose } from 'recompose';
import { withFormik } from 'formik';
import * as Yup from 'yup';

import Feedback from '@material-ui/icons/Feedback';

import Tool from 'components/Tool/Tool';
import ToolSection from 'components/Tool/ToolSection';
import ToolBody from 'components/Tool/ToolBody';
import ToolForm from 'components/Tool/ToolForm';
import ToolInput from 'components/Tool/ToolInput';

const FormData = [
  {
    id: 'proposer',
    label: 'Proposer',
    placeholder: 'Account that creates proposal',
  },
  {
    id: 'proposal_name',
    label: 'Proposal Name',
    placeholder: 'Name of the proposal',
  },
  {
    id: 'title',
    label: 'Title',
    placeholder: 'Title of the proposal',
    md: 12,
  },
  {
    id: 'question',
    label: 'Content',
    placeholder: 'Proposal question',
    md: 12,
  },
  {
    id: 'content',
    label: 'Content',
    placeholder: 'Proposal content in markdown',
    multiline: true,
    rows: 3,
    md: 12,
  },
];

const FormObject = props => {
  const { handleSubmit } = props;
  const formProps = {
    handleSubmit,
    submitColor: 'rose',
    submitText: 'Propose',
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
  const { content, question, ...otherValues } = values;

  let today = new Date();
  today.setMonth(today.getMonth()+4);

  const transaction = [
    {
      account: 'eosforumrcpp',
      name: 'propose',
      data: {
        ...otherValues,
        proposal_json: `{"type": "bps-proposal-v1", "question":${question}, "content":"${content}"}`,
        expires_at: today.toISOString().slice(0,-5),
      },
    },
  ];
  return transaction;
};

const validationSchema = Yup.object().shape({
  proposer: Yup.string().required('Account is required'),
  proposal_name: Yup.string().required('Proposals require a name'),
  title: Yup.string().required('Title is required'),
  question: Yup.string().required('Question is required'),
  content: Yup.string().required('Content is required'),
});

const ForumProposeForm = props => {
  return (
    <Tool>
      <ToolSection lg={8}>
        <ToolBody color="warning" icon={Feedback} header="FORUM" subheader=" - Propose">
          <FormObject {...props} />
        </ToolBody>
      </ToolSection>
      <ToolSection lg={4}>
        <ToolBody color="info" header="Tutorial">
          <h5>EOSIO Forum Vote</h5>
          <p>This is part of the eosio.forum Referendum project.</p>
          <p>
            You can create a Referundum. You must provide the Proposer account name and Proposal name to others so they
            can vote.
          </p>
          <p>The content can be as large as you require. The expiry is 120 days from creation.</p>
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
      proposer: props.networkIdentity ? props.networkIdentity.name : '',
      proposal_name: '',
      title: '',
      question: '',
      content: '',
    }),
    validationSchema,
  })
);

export default enhance(ForumProposeForm);
