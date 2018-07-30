/**
 *
 * Vote for us
 *
 */

import React from 'react';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { makeSelectEosAccount, makeSelectEosAuthority, makeSelectEosAccountData } from 'containers/Scatter/selectors';
import { pushTransaction as sendTransaction } from 'containers/Scatter/actions';

const makeTransaction = (eosAccount, accountData) => {
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
        voter: eosAccount,
        proxy: '',
        producers,
      },
    },
  ];
  return transaction;
};

const VoteUs = props => {
  const { pushTransaction, eosAccount, accountData } = props;
  const handleSubmit = () => {
    const transaction = makeTransaction(eosAccount, accountData);
    pushTransaction(transaction);
  };
  return (
    <a href="#" onClick={handleSubmit}>
      Vote for GenerEOS
    </a>
  );
};

const mapStateToProps = createStructuredSelector({
  eosAccount: makeSelectEosAccount(),
  eosAuthority: makeSelectEosAuthority(),
  accountData: makeSelectEosAccountData(),
});

function mapDispatchToProps(dispatch) {
  return {
    pushTransaction: transaction => dispatch(sendTransaction(transaction)),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(VoteUs);
