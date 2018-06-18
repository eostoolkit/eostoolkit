/**
 *
 * BuyRamBytes
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
import submitAction from './actions';
import BuyRamBytesForm from 'components/BuyRamBytesForm'
import {makeSelectEosAccount} from 'containers/Scatter/selectors';


export class BuyRamBytes extends React.Component { // eslint-disable-line react/prefer-stateless-function

  render() {
    const { eosAccount, handleSubmit } = this.props;
    return (
      <div>
        <BuyRamBytesForm handleSubmit={handleSubmit} eosAccount={eosAccount}/>
      </div>
    );
  }
}

BuyRamBytes.propTypes = {
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

const withReducer = injectReducer({ key: 'BuyRamBytes', reducer });
const withSaga = injectSaga({ key: 'BuyRamBytes', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(BuyRamBytes);
