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

export function fetchedRef(refs) {
  return {
    type: FETCHED_REF,
    refs,
  };
}
