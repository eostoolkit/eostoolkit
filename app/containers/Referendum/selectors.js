import { createSelector } from 'reselect';

/**
 * Direct selector to the delegate state domain
 */
const selectProxyState = state => state.get('Referendum');

/**
 * Other specific selectors
 */

const makeSelectLoading = () => createSelector(selectProxyState, substate => substate.get('loading'));
const makeSelectRef = () => createSelector(selectProxyState, substate => substate.get('refs'));

export default selectProxyState;
export { selectProxyState, makeSelectLoading, makeSelectRef };
