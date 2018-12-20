import { createSelector } from 'reselect';

/**
 * Direct selector to the delegate state domain
 */
const selectProxyState = state => state.get('PoorSwap');

/**
 * Other specific selectors
 */

const makeSelectLoading = () => createSelector(selectProxyState, substate => substate.get('loading'));
const makeSelectProxies = () => createSelector(selectProxyState, substate => substate.get('proxies'));

export default selectProxyState;
export { selectProxyState, makeSelectLoading, makeSelectProxies };
