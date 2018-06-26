/*
 *
 * Scatter actions
 *
 */

import {
  DEFAULT_ACTION,
  SCATTER_LOADED,
  EOSCLIENT_LOADED,
  CONNECT_ACCOUNT,
  ATTACHED_ACCOUNT,
  REMOVE_ACCOUNT,
  DETACHED_ACCOUNT,
  REFRESH_DATA,
  REFRESHED_DATA,
} from './constants';

export function scatterLoaded(scatter) {
  // console.log('Scatter action');
  return {
    type: SCATTER_LOADED,
    scatter,
  };
}

export function eosLoaded(eosClient) {
  // console.log('EOS Client');
  return {
    type: EOSCLIENT_LOADED,
    eosClient,
  };
}

export function connectAccount() {
  // console.log('Connect');
  return {
    type: CONNECT_ACCOUNT,
  };
}

export function attachedAccount(name, authority) {
  // console.log('Attached');
  return {
    type: ATTACHED_ACCOUNT,
    name,
    authority,
  };
}

export function removeAccount() {
  // console.log('Remove');
  return {
    type: REMOVE_ACCOUNT,
  };
}

export function detachedAccount() {
  // console.log('Detached');
  return {
    type: DETACHED_ACCOUNT,
  };
}

<<<<<<< HEAD
export function refreshAccountData() {
  return {
    type: REFRESH_DATA,
  };
}

export function refreshedAccountData(data) {
  return {
    type: REFRESHED_DATA,
    data,
=======
export default function defaultAction(form) {
  return {
    type: DEFAULT_ACTION,
    form,
>>>>>>> Updated .babelrc and Jest config for the unit tests.
  };
}
