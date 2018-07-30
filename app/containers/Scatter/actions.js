/*
 *
 * Scatter actions
 *
 */

import {
  SCATTER_LOADED,
  EOSCLIENT_LOADED,
  CONNECT_ACCOUNT,
  ATTACHED_ACCOUNT,
  REMOVE_ACCOUNT,
  DETACHED_ACCOUNT,
  REFRESH_DATA,
  REFRESHED_DATA,
  PUSH_TRANSACTION,
  PUSHED_TRANSACTION,
} from './constants';

export function scatterLoaded(scatter) {
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

export function refreshAccountData() {
  return {
    type: REFRESH_DATA,
  };
}

export function refreshedAccountData(data) {
  return {
    type: REFRESHED_DATA,
    data,
  };
}

export function pushTransaction(transaction) {
  return {
    type: PUSH_TRANSACTION,
    transaction,
  };
}

export function pushedTransaction(result) {
  return {
    type: PUSHED_TRANSACTION,
    result,
  };
}
