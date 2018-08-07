/*
 *
 * NetworkProducers actions
 *
 */

import { FETCH_PRODUCERS, FETCHED_PRODUCERS, SELECT_PRODUCERS } from './constants';

export function fetchProducers() {
  return {
    type: FETCH_PRODUCERS,
  };
}

export function fetchedProducers(producers) {
  return {
    type: FETCHED_PRODUCERS,
    producers,
  };
}

export function selectProducers(selection) {
  return {
    type: SELECT_PRODUCERS,
    selection,
  };
}
