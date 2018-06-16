import { createSelector } from 'reselect';

/**
 * Direct selector to the createAccount state domain
 */
const selectCreateAccountDomain = (state) => state.get('createAccount');

/**
 * Other specific selectors
 */


/**
 * Default selector used by CreateAccount
 */

const makeSelectCreateAccount = () => createSelector(
  selectCreateAccountDomain,
  (substate) => substate.toJS()
);

export default makeSelectCreateAccount;
export {
  selectCreateAccountDomain,
};
