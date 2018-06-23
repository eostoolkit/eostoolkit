import { createSelector } from 'reselect';

/**
 * Direct selector to the delegate state domain
 */
const selectDomain = state => state.get('SearchAccount');

/**
 * Other specific selectors
 */

/**
 * Default selector used by Delegate
 */

const makeSelectSearchName = () => createSelector(selectDomain, substate => substate.get('name'));

const makeSelectSearchPubkey = () => createSelector(selectDomain, substate => substate.get('pubkey'));

const makeSelectSearchAccounts = () => createSelector(selectDomain, substate => substate.get('accounts'));

const makeSelectSearchLoading = () => createSelector(selectDomain, substate => substate.get('loading'));

export default makeSelectSearchAccounts;
export {
  selectDomain,
  makeSelectSearchName,
  makeSelectSearchPubkey,
  makeSelectSearchAccounts,
  makeSelectSearchLoading,
};
