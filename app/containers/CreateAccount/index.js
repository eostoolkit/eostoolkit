/**
 *
 * CreateAccount
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
import makeSelectCreateAccount from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import submitAction from './actions';
import CreateAccountForm from 'components/CreateAccountForm'
import {makeSelectEosAccount} from 'containers/Scatter/selectors';


export class CreateAccount extends React.Component { // eslint-disable-line react/prefer-stateless-function

  render() {
    const { eosAccount, handleSubmit } = this.props;
    return (
      <div>
        <CreateAccountForm handleSubmit={handleSubmit} eosAccount={eosAccount}/>
      </div>
    );
  }
}

CreateAccount.propTypes = {
  //dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  eosAccount: makeSelectEosAccount(),
});

function mapDispatchToProps(dispatch) {
  return {
    handleSubmit: (form) => dispatch(submitAction(form)),
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'createAccount', reducer });
const withSaga = injectSaga({ key: 'createAccount', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(CreateAccount);
