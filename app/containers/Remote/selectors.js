import { createSelector } from 'reselect';

/**
 * Direct selector to the Remote state domain
 */
const selectRemote = state => state.get('Remote');

/**
 * Other specific selectors
 */

const makeSelectTokens = () => createSelector(selectRemote, substate => (substate ? substate.get('tokens') : []));
const makeSelectNetworks = () => createSelector(selectRemote, substate => (substate ? substate.get('networks') : []));
const makeSelectActiveNetwork = () =>
  createSelector(selectRemote, substate => (substate ? substate.get('activeNetwork') : null));
const makeSelectEosClient = () =>
  createSelector(selectRemote, substate => (substate ? substate.get('eosClient') : null));
/**
 * Default selector used by Remote
 */

export default selectRemote;

export { selectRemote, makeSelectTokens, makeSelectNetworks, makeSelectActiveNetwork, makeSelectEosClient };
