/**
 *
 * Notification
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import SweetAlert from 'react-bootstrap-sweetalert';
import withStyles from '@material-ui/core/styles/withStyles';
import VoteUs from 'components/Features/VoteUs';
import { makeSelectWriterEnabled } from 'containers/NetworkClient/selectors';

import {
  makeSelectNotificationFailure,
  makeSelectNotificationLoading,
  makeSelectNotificationMessage,
  makeSelectNotificationSuccess,
} from './selectors';
import { closeNotification } from './actions';
import reducer from './reducer';
import saga from './saga';

import sweetAlertStyle from './sweetAlertStyle';

// eslint-disable-next-line react/prefer-stateless-function
export class Notification extends React.Component {
  render() {
    function replaceErrors(key, value) {
      if (value instanceof Error) {
        const error = {};

        Object.getOwnPropertyNames(value).forEach(valueKey => {
          error[valueKey] = value[valueKey];
        });

        return error;
      }

      return value;
    }

    const { loading, failure, success, message, closeAll, writeEnabled } = this.props;
    if (loading) {
      return (
        <SweetAlert
          info
          style={{ display: 'block', marginTop: '-100px' }}
          title="Sending..."
          onConfirm={() => closeAll()}
          confirmBtnText="Hide"
          // onCancel={() => closeAll()}
          confirmBtnCssClass={`${this.props.classes.button} ${this.props.classes.info}`}>
          <h5>Scatter should appear shortly to confirm this action.</h5>
          <h6>Your transaction will be sent to the network afterwards</h6>
        </SweetAlert>
      );
    }
    if (success) {
      const txid = message && message.TransactionId;

      return (
        <SweetAlert
          success
          style={{ display: 'block', marginTop: '-200px' }}
          title="Success"
          onConfirm={() => closeAll()}
          confirmBtnText="Thanks"
          confirmBtnCssClass={`${this.props.classes.button} ${this.props.classes.success}`}>
            {txid ? (
              <a href={`https://bloks.io/transaction/${txid}`} target="new">
                <h6>{txid}</h6>
              </a>
            ) : (
              <pre className={this.props.classes.preXYScrollable}>
                {message ? `${JSON.stringify(message, null, 2)}` : ''}
              </pre>
            )}
          <p>Thank you for using EOSToolkit.io</p>
          <h6>Your votes support continued development of these tools</h6>
          <h5>
            <VoteUs />
          </h5>
        </SweetAlert>
      );
    }
    if (failure && writeEnabled) {
      const error = typeof message === 'string' ? JSON.parse(message) : message;
      if(JSON.stringify(error).includes('you have already signed up') || JSON.stringify(error).includes('User already has a balance')) {
        return (
          <SweetAlert
            success
            style={{ display: 'block', marginTop: '-100px' }}
            title="Already Grabbed!"
            onConfirm={() => closeAll()}
            confirmBtnText="Hide"
            // onCancel={() => closeAll()}
            confirmBtnCssClass={`${this.props.classes.button} ${this.props.classes.info}`}>
            <h5>You have already claimed this Airgrab!</h5>
            <h6>You are all set to receive new drops!</h6>
          </SweetAlert>
        )
      }

      return (
        <SweetAlert
          danger
          style={{ display: 'block', marginTop: '-200px' }}
          title="Failure"
          onConfirm={() => closeAll()}
          confirmBtnText="Close"
          confirmBtnCssClass={`${this.props.classes.button} ${this.props.classes.danger}`}>
          <h6>Transaction has failed</h6>
          <pre className={this.props.classes.preXYScrollable}>
            {message ? `Details:\n${JSON.stringify(error, replaceErrors, 2)}` : ''}
          </pre>
        </SweetAlert>
      );
    }
    if (failure && !writeEnabled) {
      return (
        <SweetAlert
          danger
          style={{ display: 'block', marginTop: '-100px' }}
          title="Failure"
          onConfirm={() => closeAll()}
          confirmBtnText="Close"
          // onCancel={() => closeAll()}
          confirmBtnCssClass={`${this.props.classes.button} ${this.props.classes.danger}`}>
          <h5>You must install and connect Scatter</h5>
          <h5>
            <a href={`https://get-scatter.com/`} target="new">
              Get Scatter
            </a>
          </h5>
        </SweetAlert>
      );
    }
    return '';
  }
}

Notification.propTypes = {
  // dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  success: makeSelectNotificationSuccess(),
  failure: makeSelectNotificationFailure(),
  loading: makeSelectNotificationLoading(),
  message: makeSelectNotificationMessage(),
  writeEnabled: makeSelectWriterEnabled(),
});

function mapDispatchToProps(dispatch) {
  return {
    closeAll: () => dispatch(closeNotification()),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
);
const styles = withStyles(sweetAlertStyle);
const withReducer = injectReducer({ key: 'notification', reducer });
const withSaga = injectSaga({ key: 'notification', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
  styles
)(Notification);
