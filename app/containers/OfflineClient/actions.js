/*
 *
 * OfflineClient actions
 *
 */

import { STAGE_TRANSACTION, SIGN_TRANSACTION, PUSH_TRANSACTION } from './constants';

export function stageTransaction(transaction) {
  return {
    type: STAGE_TRANSACTION,
    transaction
  };
}

export function signTransaction(transaction) {
  return {
    type: SIGN_TRANSACTION,
    transaction,
  };
}

export function pushTransaction(transaction) {
  return {
    type: PUSH_TRANSACTION,
    transaction,
  };
}
