/**
 *
 * SimplePermissions
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { makeSelectEosAccount } from 'containers/Scatter/selectors';
import SimplePermissionsForm from 'components/SimplePermissionsForm';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import reducer from './reducer';
import saga from './saga';
import submitAction from './actions';

// eslint-disable-next-line react/prefer-stateless-function
export class SimplePermissions extends React.Component {
  render() {
    const { eosAccount, handleSubmit } = this.props;
    return (
      <div>
        <SimplePermissionsForm handleSubmit={handleSubmit} eosAccount={eosAccount} />
      </div>
    );
  }
}

SimplePermissions.propTypes = {
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

const withReducer = injectReducer({ key: 'SimplePermissions', reducer });
const withSaga = injectSaga({ key: 'SimplePermissions', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect
)(SimplePermissions);
