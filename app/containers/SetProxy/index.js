/**
 *
 * SetProxy
 *
 */

import React from 'react';
import SetProxyForm from 'components/SetProxyForm';
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
export class SetProxy extends React.Component {
  render() {
    const { eosAccount, handleSubmit } = this.props;
    return (
      <div>
        <SetProxyForm handleSubmit={handleSubmit} eosAccount={eosAccount} />
      </div>
    );
  }
}

SetProxy.propTypes = {
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

const withReducer = injectReducer({ key: 'SetProxy', reducer });
const withSaga = injectSaga({ key: 'SetProxy', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect
)(SetProxy);
