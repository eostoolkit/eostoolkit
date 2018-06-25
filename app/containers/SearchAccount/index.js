/**
 *
 * SearchAccount
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import Account from 'components/Account';
import CircularProgress from '@material-ui/core/CircularProgress';
import GridContainer from 'components/Grid/GridContainer';
import SearchAccountForm from 'components/SearchAccountForm';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import reducer from './reducer';
import saga from './saga';
import { lookupAccount, lookupPubkey } from './actions';
import { makeSelectSearchAccounts, makeSelectSearchLoading } from './selectors';

function LoadingSpinner(props) {
  if (props.loading) {
    return <CircularProgress color="secondary" />;
  }
  return '';
}

// eslint-disable-next-line react/prefer-stateless-function
export class SearchAccount extends React.Component {
  render() {
    // const { handleAccountName, handlePublicKey } = this.props;
    return (
      <div>
        <SearchAccountForm {...this.props} />
        <LoadingSpinner {...this.props} />
        <GridContainer>
          {this.props.accounts.map(account => {
            return <Account account={account} key={account.account_name} />;
          })}
        </GridContainer>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  accounts: makeSelectSearchAccounts(),
  loading: makeSelectSearchLoading(),
});

function mapDispatchToProps(dispatch) {
  return {
    handleAccountName: form => dispatch(lookupAccount(form.name)),
    handlePublicKey: form => dispatch(lookupPubkey(form.publicKey)),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
);

const withReducer = injectReducer({ key: 'SearchAccount', reducer });
const withSaga = injectSaga({ key: 'SearchAccount', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect
)(SearchAccount);
