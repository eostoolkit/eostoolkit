import { createSelector } from 'reselect';

/**
 * Direct selector to the delegate state domain
 */
const selectState = state => state.get('OfflineClient');

/**
 * Other specific selectors
 */

const makeSelectOfflineTransaction = () => createSelector(selectState, substate => substate.get('transaction'));

export default selectState;
export { selectState, makeSelectOfflineTransaction };
