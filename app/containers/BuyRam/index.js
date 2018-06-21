/**
 *
 * BuyRam
 *
 */

import React from 'react';
import BuyRamForm from 'components/BuyRamForm';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { makeSelectEosAccount } from 'containers/Scatter/selectors';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import reducer from './reducer';
import saga from './saga';
import submitAction from './actions';

// eslint-disable-next-line react/prefer-stateless-function
export class BuyRam extends React.Component {
  render() {
    const { eosAccount, handleSubmit } = this.props;
    return (
      <div>
        <BuyRamForm handleSubmit={handleSubmit} eosAccount={eosAccount} />
      </div>
    );
  }
}

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

const withReducer = injectReducer({ key: 'BuyRam', reducer });
const withSaga = injectSaga({ key: 'BuyRam', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect
)(BuyRam);
