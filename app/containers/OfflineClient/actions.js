/*
 *
 * OfflineClient actions
 *
 */

import { STAGE_TRANSACTION, SIGN_TRANSACTION, PUSH_TRANSACTION } from './constants';

export function stageTransaction(authorization) {
  return {
    type: STAGE_TRANSACTION,
    authorization
  };
}

export function signTransaction(data) {
  return {
    type: SIGN_TRANSACTION,
    data,
  };
}

export function pushTransaction(data) {
  return {
    type: PUSH_TRANSACTION,
    data,
  };
}
