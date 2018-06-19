/**
 *
 * SearchAccount
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import {lookupAccount, lookupPubkey} from './actions';
import SearchAccountForm from 'components/SearchAccountForm'
import Account from 'components/Account'
import {makeSelectSearchAccounts} from './selectors';
import {makeSelectSearchLoading} from './selectors';
import GridContainer from "components/Grid/GridContainer.jsx";

import CircularProgress from '@material-ui/core/CircularProgress';

function LoadingSpinner(props) {
  if(props.loading) {
    return (<CircularProgress color="secondary" />);
  } else {
    return('');
  }
}

export class SearchAccount extends React.Component { // eslint-disable-line react/prefer-stateless-function



  render() {
    //const { handleAccountName, handlePublicKey } = this.props;
    return (
      <div>
        <SearchAccountForm {...this.props}/>
        <LoadingSpinner {...this.props}/>
        <GridContainer>
          {this.props.accounts.map(account=>{
            return(<Account account={account}/>)
          })}
        </GridContainer>
      </div>
    );
  }
}

SearchAccount.propTypes = {
  //dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  accounts: makeSelectSearchAccounts(),
  loading: makeSelectSearchLoading(),
});

function mapDispatchToProps(dispatch) {
  return {
    handleAccountName: (form) => dispatch(lookupAccount(form.name)),
    handlePublicKey: (form) => dispatch(lookupPubkey(form.publicKey)),
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'SearchAccount', reducer });
const withSaga = injectSaga({ key: 'SearchAccount', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(SearchAccount);
