/**
 *
 * ForumStatusForm
 *
 */

import React from 'react';
import { compose } from 'recompose';
import { withFormik } from 'formik';
import * as Yup from 'yup';

import Comment from '@material-ui/icons/Comment';

import Tool from 'components/Tool/Tool';
import ToolSection from 'components/Tool/ToolSection';
import ToolBody from 'components/Tool/ToolBody';
import ToolForm from 'components/Tool/ToolForm';
import ToolInput from 'components/Tool/ToolInput';
import uuidv4 from 'uuid/v4';

import { FormattedMessage } from 'react-intl';

import messages from './messages';
import commonMessages from '../../messages';

const FormObject = props => {
  const { handleSubmit, intl } = props;
  const formProps = {
    handleSubmit,
    submitColor: 'rose',
    submitText: intl.formatMessage(messages.formProposalPostSubmitText),
  };
  const FormData = [
    {
      id: 'poster',
      label: intl.formatMessage(messages.formProposalPosterLabel),
      placeholder: intl.formatMessage(messages.formProposalPosterPlaceholder),
    },
    {
      id: 'reply_to_poster',
      label: intl.formatMessage(messages.formProposalPosterReplyLabel),
      placeholder: intl.formatMessage(messages.formProposalPosterReplyPlaceholder),
    },
    {
      id: 'post_uuid',
      label: intl.formatMessage(messages.formProposalUUIDPostLabel),
      placeholder: intl.formatMessage(messages.formProposalUUIDPostPlaceholder),
    },
    {
      id: 'reply_to_post_uuid',
      label: intl.formatMessage(messages.formProposalUUIDReplyLabel),
      placeholder: intl.formatMessage(messages.formProposalUUIDReplyPlaceholder),
    },
    {
      id: 'content',
      label: intl.formatMessage(messages.formProposalPostContentLabel),
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
  const { post_uuid, ...otherValues } = values;

  const transaction = [
    {
      account: 'eosforumrcpp',
      name: 'post',
      data: {
        ...otherValues,
        post_uuid: post_uuid || uuidv4(),
        certify: 0,
        json_metadata: '{"type": "chat"}',
      },
    },
  ];
  return transaction;
};

const ForumPostForm = props => {
  const { intl } = props;
  return (
    <Tool>
      <ToolSection lg={8}>
        <ToolBody
          color="warning"
          icon={Comment}
          header={intl.formatMessage(messages.proposalForumUppercaseHeader)}
          subheader={intl.formatMessage(messages.formForumPostSubheader)}>
          <FormObject {...props} />
        </ToolBody>
      </ToolSection>
      <ToolSection lg={4}>
        <ToolBody color="info" header="Tutorial">
          <h5>
            <FormattedMessage {...messages.eosioForumPostHeader} />
          </h5>
          <p>
            <FormattedMessage {...messages.eosioForumPostText1} />
          </p>
          <p>
            <FormattedMessage {...messages.eosioForumPostText2} />
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
      poster: props.networkIdentity ? props.networkIdentity.name : '',
      reply_to_poster: '',
      content: '',
      post_uuid: '',
      reply_to_post_uuid: '',
    }),
    validationSchema: props => {
      const { intl } = props;
      return Yup.object().shape({
        poster: Yup.string().required(intl.formatMessage(commonMessages.formAccountRequired)),
        content: Yup.string().required(intl.formatMessage(commonMessages.formProposalContentRequired)),
      });
    },
  })
);

export default enhance(ForumPostForm);
