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
import submitAction from './actions';
import SearchAccountForm from 'components/SearchAccountForm'
import {makeSelectEosAccount} from 'containers/Scatter/selectors';


export class SearchAccount extends React.Component { // eslint-disable-line react/prefer-stateless-function

  render() {
    const { eosAccount, handleSubmit } = this.props;
    return (
      <div>
        <SearchAccountForm/>
      </div>
    );
  }
}

SearchAccount.propTypes = {
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

const withReducer = injectReducer({ key: 'SearchAccount', reducer });
const withSaga = injectSaga({ key: 'SearchAccount', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(SearchAccount);
