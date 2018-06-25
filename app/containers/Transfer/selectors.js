import { createSelector } from 'reselect';

/**
 * Direct selector to the Transfer state domain
 */
const selectDomain = state => state.get('Transfer');

/**
 * Other specific selectors
 */

/**
 * Default selector used by Transfer
 */

const makeSelectForm = () => createSelector(selectDomain, substate => substate.get('form'));

export default makeSelectForm;
export { selectDomain, makeSelectForm };
