/**
 *
 * SimplePermissions
 *
 */

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { makeSelectEosAccount } from 'containers/Scatter/selectors';
import SimplePermissionsForm from 'components/Features/SimplePermissionsForm';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import reducer from './reducer';
import saga from './saga';
import submitAction from './actions';

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
)(SimplePermissionsForm);
