import { createSelector } from 'reselect';

/**
 * Direct selector to the delegate state domain
 */
const selectDomain = state => state.get('BuyRam');

/**
 * Other specific selectors
 */

/**
 * Default selector used by Delegate
 */

const makeSelectForm = () => createSelector(selectDomain, substate => substate.get('form'));

export default makeSelectForm;
export { selectDomain, makeSelectForm };
