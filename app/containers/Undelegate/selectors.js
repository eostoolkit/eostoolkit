import { createSelector } from 'reselect';

/**
 * Direct selector to the Undelegate state domain
 */
const selectDomain = state => state.get('Undelegate');

/**
 * Other specific selectors
 */

/**
 * Default selector used by Undelegate
 */

const makeSelectForm = () => createSelector(selectDomain, substate => substate.get('form'));

export default makeSelectForm;
export { selectDomain, makeSelectForm };
