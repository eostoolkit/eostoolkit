/**
 *
 * BuyRamBytes
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import BuyRamBytesForm from 'components/BuyRamBytesForm';
import { makeSelectEosAccount } from 'containers/Scatter/selectors';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import reducer from './reducer';
import saga from './saga';
import submitAction from './actions';

// eslint-disable-next-line react/prefer-stateless-function
export class BuyRamBytes extends React.Component {
  render() {
    const { eosAccount, handleSubmit } = this.props;
    return (
      <div>
        <BuyRamBytesForm handleSubmit={handleSubmit} eosAccount={eosAccount} />
      </div>
    );
  }
}

BuyRamBytes.propTypes = {
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

const withReducer = injectReducer({ key: 'BuyRamBytes', reducer });
const withSaga = injectSaga({ key: 'BuyRamBytes', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect
)(BuyRamBytes);
