import { createSelector } from 'reselect';

/**
 * Direct selector to the CreateProxy state domain
 */
const selectDomain = state => state.get('CreateProxy');

/**
 * Other specific selectors
 */

/**
 * Default selector used by CreateProxy
 */

const makeSelectForm = () => createSelector(selectDomain, substate => substate.get('form'));

export default makeSelectForm;
export { selectDomain, makeSelectForm };
