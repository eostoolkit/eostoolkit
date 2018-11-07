/**
 *
 * ForumStatusForm
 *
 */

import React from 'react';
import { compose } from 'recompose';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { sha256 } from 'js-sha256';
import { makeSelectReader } from 'containers/NetworkClient/selectors';
import { failureNotification, loadingNotification } from 'containers/Notification/actions';
import { withFormik } from 'formik';
import * as Yup from 'yup';

import CheckCircle from '@material-ui/icons/CheckCircle';

import Tool from 'components/Tool/Tool';
import ToolSection from 'components/Tool/ToolSection';
import ToolBody from 'components/Tool/ToolBody';
import ToolForm from 'components/Tool/ToolForm';
import ToolInput from 'components/Tool/ToolInput';
import ToolSwitch from 'components/Tool/ToolSwitch';

const FormData = [
  {
    id: 'voter',
    label: 'Voter',
    placeholder: 'Account that votes',
  },
  {
    id: 'proposal_name',
    label: 'Proposal Name',
    placeholder: 'Name of the proposal',
  },
];

const switchData = {
  id: 'vote',
  label: 'Your Vote (No/Yes)',
  placeholder: 'Vote No - You disagree with the proposal. Vote Yes - You agree with the proposal.',
};

const FormObject = props => {
  const { handleSubmit } = props;
  const formProps = {
    handleSubmit,
    submitColor: 'rose',
    submitText: 'Vote',
  };
  return (
    <ToolForm {...formProps}>
      {FormData.map(form => {
        return <ToolInput key={form.id} {...form} {...props} />;
      })}
      <ToolSwitch {...switchData} {...props} />
    </ToolForm>
  );
};

// async function getProposalHash(networkReader, values) {
//   const proposals = {
//     json: true,
//     scope: 'eosforumrcpp',
//     code: 'eosforumrcpp',
//     table: 'proposal',
//     lower_bound: values.proposal_name
//     limit: 1,
//   };
//
//   try {
//     const data = await networkReader.getTableRows(proposals);
//     const row = data.rows.find(d => d.proposal_name === values.proposal_name);
//     if (row) {
//       const hash = sha256(row.title + row.proposal_json);
//       return hash;
//     }
//     return false;
//   } catch (err) {
//     return false;
//   }
// }

const makeTransaction = (values) => {
  const { vote, ...otherValues } = values;
  const transaction = [
    {
      account: 'eosforumrcpp',
      name: 'vote',
      data: {
        ...otherValues,
        vote: vote ? 1 : 0,
        vote_json: '',
      },
    },
  ];
  return transaction;
};

const validationSchema = Yup.object().shape({
  voter: Yup.string().required('Account is required'),
  proposal_name: Yup.string().required('Proposals require a name'),
});

const ForumVoteForm = props => {
  return (
    <Tool>
      <ToolSection lg={8}>
        <ToolBody color="warning" icon={CheckCircle} header="FORUM" subheader=" - Vote">
          <FormObject {...props} />
        </ToolBody>
      </ToolSection>
      <ToolSection lg={4}>
        <ToolBody color="info" header="Tutorial">
          <h5>EOSIO Forum Vote</h5>
          <p>This is part of the eosio.forum Referendum project.</p>
          <p>You can vote on a Referundum. The proposal name is required.</p>
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

const mapStateToProps = createStructuredSelector({
  networkReader: makeSelectReader(),
});

function mapDispatchToProps(dispatch) {
  return {
    loading: () => dispatch(loadingNotification()),
    failure: err => dispatch(failureNotification(err)),
  };
}

const enhance = compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  withFormik({
    handleSubmit: (values, { props, setSubmitting }) => {
      const { loading, failure, networkReader, pushTransaction } = props;
      loading();
      setSubmitting(false);
      const transaction = makeTransaction(values);
      pushTransaction(transaction,props.history);      
    },
    mapPropsToValues: props => ({
      voter: props.networkIdentity ? props.networkIdentity.name : '',
      proposal_name: '',
      vote: false,
    }),
    validationSchema,
  })
);

export default enhance(ForumVoteForm);
