/*
 *
 * HorusPay actions
 *
 */

import { FETCH_REF, FETCHED_REF } from './constants';

export function fetchRef() {
  return {
    type: FETCH_REF,
  };
}

export function fetchedRef(stakes) {
  return {
    type: FETCHED_REF,
    stakes,
  };
}
