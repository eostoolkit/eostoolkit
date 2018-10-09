/**
 *
 * Vote for us
 *
 */

import React from 'react';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import Button from 'components/CustomButtons/Button';
import { makeSelectIdentity, makeSelectAccount } from 'containers/NetworkClient/selectors';
import { pushTransaction as sendTransaction } from 'containers/NetworkClient/actions';

const makeTransaction = (networkIdentity, accountData) => {
  if (!accountData) {
    return { error: 'No scatter identity attached' };
  }
  const producers = accountData.voter_info ? accountData.voter_info.producers : [];
  if (producers.includes('aus1genereos')) {
    return { success: 'You already voted for us! Thank you!' };
  }
  if (producers.length > 29) {
    producers.pop();
  }
  producers.push('aus1genereos');
  producers.sort();
  const transaction = [
    {
      account: 'eosio',
      name: 'voteproducer',
      data: {
        voter: networkIdentity ? networkIdentity.name : '',
        proxy: '',
        producers,
      },
    },
  ];
  return transaction;
};

const VoteUs = props => {
  const { pushTransaction, networkIdentity, networkAccount, className } = props;
  const handleSubmit = () => {
    const transaction = makeTransaction(networkIdentity, networkAccount);
    pushTransaction(transaction,props.history);
  };
  return (
    <React.Fragment>
      <a href="#" onClick={handleSubmit} className={className}>
        Built by GenerEOS
      </a>
      <Button type="submit" color="success" onClick={handleSubmit} style={{marginTop:'-7px',marginLeft:'10px'}}>Vote</Button>
    </React.Fragment>
  );
};

const mapStateToProps = createStructuredSelector({
  networkIdentity: makeSelectIdentity(),
  networkAccount: makeSelectAccount(),
});

function mapDispatchToProps(dispatch) {
  return {
    pushTransaction: (transaction,history) => dispatch(sendTransaction(transaction,history)),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(VoteUs);
