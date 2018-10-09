import { createSelector } from 'reselect';

/**
 * Direct selector to the delegate state domain
 */
const selectProxyState = state => state.get('Grandpa');

/**
 * Other specific selectors
 */

const makeSelectLoading = () => createSelector(selectProxyState, substate => substate.get('loading'));
const makeSelectMiner = () => createSelector(selectProxyState, substate => substate.get('miner'));

export default selectProxyState;
export { selectProxyState, makeSelectLoading, makeSelectMiner };
