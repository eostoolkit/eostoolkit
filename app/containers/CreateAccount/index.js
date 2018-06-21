/**
 *
 * CreateAccount
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import CreateAccountForm from 'components/CreateAccountForm';
import { makeSelectEosAccount } from 'containers/Scatter/selectors';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import reducer from './reducer';
import saga from './saga';
import submitAction from './actions';

// eslint-disable-next-line react/prefer-stateless-function
export class CreateAccount extends React.Component {
  render() {
    const { eosAccount, handleSubmit } = this.props;
    return (
      <div>
        <CreateAccountForm handleSubmit={handleSubmit} eosAccount={eosAccount} />
      </div>
    );
  }
}

CreateAccount.propTypes = {
  // dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  eosAccount: makeSelectEosAccount(),
});

function mapDispatchToProps(dispatch) {
  return {
    handleSubmit: form => dispatch(submitAction(form)),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
);

const withReducer = injectReducer({ key: 'CreateAccount', reducer });
const withSaga = injectSaga({ key: 'CreateAccount', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect
)(CreateAccount);
