/*
 *
 * HorusPay actions
 *
 */

import { FETCH_MINER, FETCHED_MINER } from './constants';

export function fetchMiner() {
  return {
    type: FETCH_MINER,
  };
}

export function fetchedMiner(miner) {
  return {
    type: FETCHED_MINER,
    miner,
  };
}
