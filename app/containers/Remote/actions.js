/*
 *
 * Remote actions
 *
 */

import {
  FETCH_ALL,
  FETCH_TOKENS,
  FETCHED_TOKENS,
  FETCH_NETWORKS,
  FETCHED_NETWORKS,
  SELECT_NETWORK,
  SELECTED_NETWORK,
} from './constants';

export function fetchAll() {
  return {
    type: FETCH_ALL,
  };
}

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

export function fetchNetworks() {
  return {
    type: FETCH_NETWORKS,
  };
}

export function fetchedNetworks(networks) {
  return {
    type: FETCHED_NETWORKS,
    networks,
  };
}

export function selectNetwork(network, endpoint) {
  return {
    type: SELECT_NETWORK,
    network,
    endpoint,
  };
}

export function selectedNetwork(network, client) {
  return {
    type: SELECTED_NETWORK,
    network,
    client,
  };
}
