/*
 *
 * SearchAccount actions
 *
 */

import { LOOKUP_ACCOUNT, LOOKUP_PUBKEY, LOOKUP_LOADING, LOOKUP_LOADED } from './constants';

export function lookupAccount(name) {
  return {
    type: LOOKUP_ACCOUNT,
    name,
  };
}

export function lookupPubkey(pubkey) {
  return {
    type: LOOKUP_PUBKEY,
    pubkey,
  };
}

export function lookupLoading() {
  return {
    type: LOOKUP_LOADING,
  };
}

export function lookupLoaded(accounts) {
  return {
    type: LOOKUP_LOADED,
    accounts,
  };
}
