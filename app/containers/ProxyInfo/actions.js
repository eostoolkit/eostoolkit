/*
 *
 * ProxyInfo actions
 *
 */

import { FETCH_PROXIES, FETCHED_PROXIES } from './constants';

export function fetchProxies() {
  return {
    type: FETCH_PROXIES,
  };
}

export function fetchedProxies(proxies) {
  return {
    type: FETCHED_PROXIES,
    proxies,
  };
}
