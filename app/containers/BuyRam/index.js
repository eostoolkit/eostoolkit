/**
 *
 * BuyRam
 *
 */

import BuyRamForm from 'components/Features/BuyRamForm';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { makeSelectEosAccount } from 'containers/Scatter/selectors';
import { compose, mapProps, withStateHandlers } from 'recompose';

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

const withReducer = injectReducer({ key: 'BuyRam', reducer });
const withSaga = injectSaga({ key: 'BuyRam', saga });

const enhance = compose(
  withReducer,
  withSaga,
  withConnect,
  withStateHandlers(
    {
      isEOS: true,
    },
    {
      handleByteUnitChange: () => () => ({
        isEOS: false,
      }),
      handleEOSUnitChange: () => () => ({
        isEOS: true,
      }),
    }
  ),
  mapProps(({ isEOS, handleByteUnitChange, handleEOSUnitChange, ...otherProps }) => ({
    unit: {
      isEOS,
      handleByteUnitChange,
      handleEOSUnitChange,
    },
    ...otherProps,
  }))
);

export default enhance(BuyRamForm);
