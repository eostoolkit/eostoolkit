/*
 *
 * Tokens actions
 *
 */

import { FETCH_TOKENS, FETCHED_TOKENS } from './constants';

export function fetchTokens() {
  return {
    type: FETCH_TOKENS,
  };
}

export function fetchedTokens(tokens) {
  return {
    type: FETCHED_TOKENS,
    tokens,
  };
}
