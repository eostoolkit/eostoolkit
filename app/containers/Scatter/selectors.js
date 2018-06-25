import { createSelector } from 'reselect';

/**
 * Direct selector to the scatter state domain
 */
const selectScatter = state => state.get('scatter');

/**
 * Other specific selectors
 */

const makeSelectScatter = () => createSelector(selectScatter, substate => substate.get('scatter'));

const makeSelectEosClient = () => createSelector(selectScatter, substate => substate.get('eosClient'));

const makeSelectEosAccount = () => createSelector(selectScatter, substate => substate.get('eosAccount'));

const makeSelectEosAuthority = () => createSelector(selectScatter, substate => substate.get('eosAuthority'));

const makeSelectEosAccountData = () => createSelector(selectScatter, substate => substate.get('eosAccountData'));

/**
 * Default selector used by Scatter
 */

export default makeSelectEosClient;

export {
  selectScatter,
  makeSelectScatter,
  makeSelectEosClient,
  makeSelectEosAccount,
  makeSelectEosAuthority,
  makeSelectEosAccountData,
};
