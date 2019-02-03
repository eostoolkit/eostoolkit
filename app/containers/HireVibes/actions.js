/*
 *
 * HorusPay actions
 *
 */

import { FETCH_STAKE, FETCHED_STAKE } from './constants';

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
