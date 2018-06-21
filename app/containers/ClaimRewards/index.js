/**
 *
 * SellRam
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import ClaimRewardsForm from 'components/ClaimRewardsForm';
import { makeSelectEosAccount } from 'containers/Scatter/selectors';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import reducer from './reducer';
import saga from './saga';
import submitAction from './actions';

// eslint-disable-next-line react/prefer-stateless-function
export class ClaimRewards extends React.Component {
  render() {
    const { eosAccount, handleSubmit } = this.props;
    return (
      <div>
        <ClaimRewardsForm handleSubmit={handleSubmit} eosAccount={eosAccount} />
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

const withReducer = injectReducer({ key: 'ClaimRewards', reducer });
const withSaga = injectSaga({ key: 'ClaimRewards', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect
)(ClaimRewards);
