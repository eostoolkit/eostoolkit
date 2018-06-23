import { createSelector } from 'reselect';

/**
 * Direct selector to the VoteUs state domain
 */
const selectDomain = state => state.get('VoteUs');

/**
 * Other specific selectors
 */

/**
 * Default selector used by VoteUs
 */

const makeSelectForm = () => createSelector(selectDomain, substate => substate.get('form'));

export default makeSelectForm;
export { selectDomain, makeSelectForm };
