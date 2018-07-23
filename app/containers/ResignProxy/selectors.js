import { createSelector } from 'reselect';

/**
 * Direct selector to the ResignProxy state domain
 */
const selectDomain = state => state.get('ResignProxy');

/**
 * Other specific selectors
 */

/**
 * Default selector used by ResignProxy
 */

const makeSelectForm = () => createSelector(selectDomain, substate => substate.get('form'));
const makeSelectRegProxy = () => createSelector(selectDomain, substate => substate.get('regProxy'));

export default makeSelectForm;
export { selectDomain, makeSelectForm, makeSelectRegProxy };
