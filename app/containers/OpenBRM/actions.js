/*
 *
 * HorusPay actions
 *
 */

import { FETCH_STAKE, FETCHED_STAKE, FETCHED_REFUND } from './constants';

export function fetchStake() {
  return {
    type: FETCH_STAKE,
  };
}

export function fetchedStake(stakes) {
  return {
    type: FETCHED_STAKE,
    stakes,
  };
}


export function fetchRefund() {
  return {
    type: FETCH_REFUND,
  };
}

export function fetchedRefund(refunds) {
  return {
    type: FETCHED_REFUND,
    refunds,
  };
}
