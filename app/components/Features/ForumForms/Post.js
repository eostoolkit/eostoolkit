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

const FormData = [
  {
    id: 'poster',
    label: 'Poster',
    placeholder: 'Account that sends the post',
  },
  {
    id: 'reply_to_poster',
    label: 'Reply to Poster',
    placeholder: 'Reply to Poster that sends the post',
  },
  {
    id: 'post_uuid',
    label: 'Post UUID - optional',
    placeholder: 'Post UUID - autopopulates if blank',
  },
  {
    id: 'reply_to_post_uuid',
    label: 'Reply to Post UUID - optional',
    placeholder: 'Reply UUID - autopopulates if blank',
  },
  {
    id: 'content',
    label: 'Content',
    placeholder: 'Post content',
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
    submitText: 'Post',
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

const validationSchema = Yup.object().shape({
  poster: Yup.string().required('Account is required'),
  content: Yup.string().required('Content is required'),
});

const ForumPostForm = props => {
  return (
    <Tool>
      <ToolSection lg={8}>
        <ToolBody color="warning" icon={Comment} header="FORUM" subheader=" - Post">
          <FormObject {...props} />
        </ToolBody>
      </ToolSection>
      <ToolSection lg={4}>
        <ToolBody color="info" header="Tutorial">
          <h5>EOSIO Forum Post</h5>
          <p>This is part of the eosio.forum Referendum project.</p>
          <p>You can create a forum post, and reply to other posts.</p>
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
      poster: props.networkIdentity ? props.networkIdentity.name : '',
      reply_to_poster: '',
      content: '',
      post_uuid: '',
      reply_to_post_uuid: '',
    }),
    validationSchema,
  })
);

export default enhance(ForumPostForm);
