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

import { FormattedMessage } from 'react-intl';

import messages from './messages';
import commonMessages from '../../messages';

const FormObject = props => {
  const { handleSubmit, intl } = props;
  const formProps = {
    handleSubmit,
    submitColor: 'rose',
    submitText: intl.formatMessage(messages.formProposalSubmitText),
  };
  const FormData = [
    {
      id: 'proposer',
      label: intl.formatMessage(messages.formProposerLabel),
      placeholder: intl.formatMessage(messages.formProposerPlaceholder),
    },
    {
      id: 'proposal_name',
      label: intl.formatMessage(messages.formProposalNameLabel),
      placeholder: intl.formatMessage(messages.formProposalNamePlaceholder),
    },
    {
      id: 'title',
      label: intl.formatMessage(messages.formProposalTitleLabel),
      placeholder: intl.formatMessage(messages.formProposalTitlePlaceholder),
      md: 12,
    },
    {
      id: 'question',
      label: intl.formatMessage(messages.formProposalQuestionLabel),
      placeholder: intl.formatMessage(messages.formProposalQuestionPlaceholder),
      md: 12,
    },
    {
      id: 'content',
      label: intl.formatMessage(messages.formProposalContentLabel),
      placeholder: intl.formatMessage(messages.formProposalContentPlaceholder),
      multiline: true,
      rows: 3,
      md: 12,
    },
  ];
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

  const today = new Date();
  today.setMonth(today.getMonth() + 4);

  const transaction = [
    {
      account: 'eosio.forum',
      name: 'propose',
      data: {
        ...otherValues,
        proposal_json: JSON.stringify({
          type: 'bps-proposal-v1',
          question,
          content,
        }),
        expires_at: today.toISOString().slice(0, -5),
      },
    },
  ];
  return transaction;
};

const ForumProposeForm = props => {
  const { intl } = props;
  return (
    <Tool>
      <ToolSection lg={8}>
        <ToolBody
          color="warning"
          icon={Feedback}
          header={intl.formatMessage(messages.proposalForumUppercaseHeader)}
          subheader={intl.formatMessage(messages.proposalForumSubHeader)}>
          <FormObject {...props} />
        </ToolBody>
      </ToolSection>
      <ToolSection lg={4}>
        <ToolBody color="info" header={intl.formatMessage(commonMessages.tutorialHeaderMessage)}>
          <h5>
            <FormattedMessage {...messages.eosioForumVoteHeader} />
          </h5>
          <p>
            <FormattedMessage {...messages.eosioForumVoteText1} />
          </p>
          <p>
            <FormattedMessage {...messages.eosioForumVoteText2} />
          </p>
          <p>
            <FormattedMessage {...messages.eosioForumVoteText3} />
          </p>
          <p>
            <FormattedMessage {...messages.eosioForumStatusTextCheckout} />
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
      pushTransaction(transaction, props.history);
    },
    mapPropsToValues: props => ({
      proposer: props.networkIdentity ? props.networkIdentity.name : '',
      proposal_name: '',
      title: '',
      question: '',
      content: '',
    }),
    validationSchema: props => {
      const { intl } = props;
      return Yup.object().shape({
        proposer: Yup.string().required(intl.formatMessage(commonMessages.formAccountRequired)),
        proposal_name: Yup.string().required(intl.formatMessage(commonMessages.formAccountRequired)),
        title: Yup.string().required(intl.formatMessage(messages.formProposalTitleRequired)),
        question: Yup.string().required(intl.formatMessage(messages.formProposalQuestionRequired)),
        content: Yup.string().required(intl.formatMessage(messages.formProposalContentRequired)),
      });
    },
  })
);

export default enhance(ForumProposeForm);
