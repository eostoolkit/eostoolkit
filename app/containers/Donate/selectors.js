import { createSelector } from 'reselect';

/**
 * Direct selector to the Donate state domain
 */
const selectDomain = state => state.get('Donate');

/**
 * Other specific selectors
 */

/**
 * Default selector used by Donate
 */

const makeSelectForm = () => createSelector(selectDomain, substate => substate.get('form'));

export default makeSelectForm;
export { selectDomain, makeSelectForm };
