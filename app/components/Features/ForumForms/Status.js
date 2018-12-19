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

import { FormattedMessage } from 'react-intl';

import messages from './messages';
import commonMessages from '../../messages';

const FormObject = props => {
  const { handleSubmit, intl } = props;
  const formProps = {
    handleSubmit,
    submitColor: 'rose',
    submitText: intl.formatMessage(messages.referendumProposalsSubmitText),
  };
  const FormData = [
    {
      id: 'account',
      label: intl.formatMessage(commonMessages.formAccountLabel),
      placeholder: intl.formatMessage(messages.formAccountPlaceholder),
    },
    {
      id: 'content',
      label: intl.formatMessage(messages.formStatusLabel),
      placeholder: intl.formatMessage(messages.formStatusPlaceholder),
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
  const transaction = [
    {
      account: 'eosforumrcpp',
      name: 'status',
      data: {
        ...values,
      },
    },
  ];
  return transaction;
};

const ForumStatusForm = props => {
  const { intl } = props;
  return (
    <Tool>
      <ToolSection lg={8}>
        <ToolBody
          color="warning"
          icon={RecordVoiceOver}
          header={intl.formatMessage(messages.forumHeader)}
          subheader={intl.formatMessage(messages.forumSubHeader)}>
          <FormObject {...props} />
        </ToolBody>
      </ToolSection>
      <ToolSection lg={4}>
        <ToolBody color="info" header={intl.formatMessage.tutorialHeaderMessage}>
          <h5>
            <FormattedMessage {...messages.eosioForumStatusHeader} />
          </h5>
          <p>
            <FormattedMessage {...messages.eosioForumStatusText1} />
          </p>
          <p>
            <FormattedMessage {...messages.eosioForumStatusText2} />
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
      account: props.networkIdentity ? props.networkIdentity.name : '',
      content: '',
    }),
    validationSchema: props => {
      const { intl } = props;
      return Yup.object().shape({
        account: Yup.string().required(intl.formatMessage(commonMessages.formAccountRequired)),
        content: Yup.string().required(intl.formatMessage(messages.formStatusTextRequired)),
      });
    },
  })
);

export default enhance(ForumStatusForm);
