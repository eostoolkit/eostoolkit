import { createSelector } from 'reselect';

/**
 * Direct selector to the Tokens state domain
 */
const selectTokens = state => state.get('Tokens');

/**
 * Other specific selectors
 */

const makeSelectTokens = () => createSelector(selectTokens, substate => (substate ? substate.get('tokens') : []));

/**
 * Default selector used by Tokens
 */

export default makeSelectTokens;

export { selectTokens, makeSelectTokens };
