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
import { failureNotification, loadingNotification, successNotification } from 'containers/Notification/actions';
import { withFormik } from 'formik';
import * as Yup from 'yup';

import CheckCircle from '@material-ui/icons/CheckCircle';

import Tool from 'components/Tool/Tool';
import ToolSection from 'components/Tool/ToolSection';
import ToolBody from 'components/Tool/ToolBody';
import ToolForm from 'components/Tool/ToolForm';
import ToolInput from 'components/Tool/ToolInput';
import ToolSwitch from 'components/Tool/ToolSwitch';
import uuidv4 from 'uuid/v4';

const FormData = [
  {
    id: 'voter',
    label: 'Voter',
    placeholder: 'Account that votes',
  },
  {
    id: 'proposer',
    label: 'Proposer',
    placeholder: 'Account that created proposal',
  },{
    id: 'proposal_name',
    label: 'Proposal Name',
    placeholder: 'Name of the proposal',
  }
];

const switchData = {
  id: 'vote',
  label: 'Your Vote (No/Yes)',
  placeholder:
    'Vote No - You disagree with the proposal. Vote Yes - You agree with the proposal.',
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

async function getProposalHash(networkReader,values) {
  const proposals = {
    json: true,
    scope: values.proposer,
    code: 'eosforumdapp',
    table: 'proposal',
    limit: 1000,
  }

  try {
    const data = await networkReader.getTableRows(proposals);
    const row = data.rows.find(d=>d.proposal_name === values.proposal_name);
    if(row) {
      const hash = sha256(row.title + row.proposal_json);
      return hash;
    }
    return false;
  } catch (err) {
    return false;
  }
}

const makeTransaction = (values,hash) => {
  const { vote, ...otherValues } = values;
  const transaction = [
    {
      account: 'eosforumdapp',
      name: 'vote',
      data: {
        ...otherValues,
        vote: vote ? 1 : 0,
        proposal_hash: hash,
        vote_json: '',
      },
    },
  ];
  return transaction;
};

const validationSchema = Yup.object().shape({
  voter: Yup.string().required('Account is required'),
  proposer: Yup.string().required('Account is required'),
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
          <p>You can vote on a Referundum. The Proposer account name and Proposal name are required.</p>
          <p>If you provide the correct details the proposal will be found and a unique hash generated to confirm your vote.</p>
          <p>For more information checkout <a href="https://github.com/eoscanada/eosio.forum" target="new">Eos Canada GitHub</a></p>
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
    failure: (err) => dispatch(failureNotification(err)),
  };
}

const enhance = compose(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),
  withFormik({
    handleSubmit: (values, { props, setSubmitting }) => {
      const { loading, failure, networkReader, pushTransaction } = props;
      loading();
      setSubmitting(false);
      getProposalHash(networkReader, values).then((hash) => {
        if(!hash) {
          failure({message: 'Unable to find proposal.'});
        } else {
          const transaction = makeTransaction(values, hash);
          pushTransaction(transaction);
        }
      });
    },
    mapPropsToValues: props => ({
      voter: props.networkIdentity ? props.networkIdentity.actor : '',
      proposer: '',
      proposal_name: '',
      vote: false,
    }),
    validationSchema,
  })
);

export default enhance(ForumVoteForm);
