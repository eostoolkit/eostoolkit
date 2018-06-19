/*
 *
 * Notification actions
 *
 */

import {
  NOTIFICATION_SUCCESS,
  NOTIFICATION_FAILURE,
  NOTIFICATION_LOADING,
  NOTIFICATION_CLOSE,
} from './constants';

export function successNotification(message) {
  //console.log('Success');
  return {
    type: NOTIFICATION_SUCCESS,
    message,
  };
}

export function failureNotification(message) {
  //console.log('Failure');
  return {
    type: NOTIFICATION_FAILURE,
    message,
  };
}

export function loadingNotification() {
  //console.log('Loading');
  return {
    type: NOTIFICATION_LOADING,
  };
}

export function closeNotification() {
  //console.log('Close');
  return {
    type: NOTIFICATION_CLOSE,
  };
}
