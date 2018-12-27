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

import { FormattedMessage, injectIntl } from 'react-intl';

import messages from './messages';
import commonMessages from '../../messages';

const makeTransaction = (networkIdentity, accountData, intl) => {
  if (!accountData) {
    return { error: intl.formatMessage(commonMessages.errorNoScatterIdentity) };
  }
  const producers = accountData.voter_info ? accountData.voter_info.producers : [];
  if (producers.includes('aus1genereos')) {
    return { success: intl.formatMessage(messages.successAlreadyVoted) };
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
  const { pushTransaction, networkIdentity, networkAccount, className, intl } = props;
  const handleSubmit = () => {
    const transaction = makeTransaction(networkIdentity, networkAccount, intl);
    pushTransaction(transaction, props.history);
  };
  return (
    <React.Fragment>
      <a href="#" onClick={handleSubmit} className={className}>
        <FormattedMessage {...messages.buildByGenerEOSText} />
      </a>
      <Button type="submit" color="success" onClick={handleSubmit} style={{ marginTop: '-7px', marginLeft: '10px' }}>
        <FormattedMessage {...messages.voteButtonText} />
      </Button>
    </React.Fragment>
  );
};

const mapStateToProps = createStructuredSelector({
  networkIdentity: makeSelectIdentity(),
  networkAccount: makeSelectAccount(),
});

function mapDispatchToProps(dispatch) {
  return {
    pushTransaction: (transaction, history) => dispatch(sendTransaction(transaction, history)),
  };
}

export default injectIntl(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(VoteUs)
);
