import { createSelector } from 'reselect';

/**
 * Direct selector to the delegate state domain
 */
const selectProxyState = state => state.get('OpenBRM');

/**
 * Other specific selectors
 */

const makeSelectLoading = () =>
  createSelector(
    selectProxyState,
    substate => substate.get('loading')
  );
const makeSelectStake = () =>
  createSelector(
    selectProxyState,
    substate => substate.get('stakes')
  );

const makeSelectRefund = () =>
  createSelector(
    selectProxyState,
    substate => substate.get('refunds')
  );

export default selectProxyState;
export { selectProxyState, makeSelectLoading, makeSelectStake, makeSelectRefund };
