import { createSelector } from 'reselect';

/**
 * Direct selector to the delegate state domain
 */
const selectState = state => state.get('OfflineClient');

/**
 * Other specific selectors
 */

const makeSelectOfflineTransaction = () => createSelector(selectState, substate => substate.get('transaction'));

export default selectState;
export { selectState, makeSelectOfflineTransaction };
cleos set account permission genereos.m claimer '{"threshold":1,"keys":[{"key":"EOS7HGqjWmG8wYUyvMqM9jQktTpuf6WxrfbPE35azMggmkPLNtfZF","weight":1}]}' "active"  -p genereos.m@active
