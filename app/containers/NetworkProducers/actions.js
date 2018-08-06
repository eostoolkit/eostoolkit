/*
 *
 * NetworkProducers actions
 *
 */

import { FETCH_PRODUCERS, FETCHED_PRODUCERS } from './constants';

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
