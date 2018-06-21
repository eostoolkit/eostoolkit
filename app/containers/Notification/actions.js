/*
 *
 * Notification actions
 *
 */

import { NOTIFICATION_SUCCESS, NOTIFICATION_FAILURE, NOTIFICATION_LOADING, NOTIFICATION_CLOSE } from './constants';

export function successNotification(message) {
  return {
    type: NOTIFICATION_SUCCESS,
    message,
  };
}

export function failureNotification(message) {
  return {
    type: NOTIFICATION_FAILURE,
    message,
  };
}

export function loadingNotification() {
  return {
    type: NOTIFICATION_LOADING,
  };
}

export function closeNotification() {
  return {
    type: NOTIFICATION_CLOSE,
  };
}
