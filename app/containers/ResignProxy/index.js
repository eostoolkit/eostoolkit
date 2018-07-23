/**
 *
 * ResignProxy
 *
 */

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import ResignProxyForm from 'components/ResignProxyForm';
import { makeSelectEosAccount } from 'containers/Scatter/selectors';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import reducer from './reducer';
import saga from './saga';
import submitAction, { regProxy } from './actions';

const mapStateToProps = createStructuredSelector({
  eosAccount: makeSelectEosAccount(),
});

function mapDispatchToProps(dispatch) {
  return {
    handleCreate: form => dispatch(submitAction(form)),
    handleInfo: form => dispatch(regProxy(form)),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
);

const withReducer = injectReducer({
  key: 'ResignProxy',
  reducer,
});
const withSaga = injectSaga({
  key: 'ResignProxy',
  saga,
});

export default compose(
  withReducer,
  withSaga,
  withConnect
)(ResignProxyForm);
