import { createSelector } from 'reselect';

/**
 * Direct selector to the delegate state domain
 */
const selectProducerState = state => state.get('networkProducers');

/**
 * Other specific selectors
 */


const makeSelectLoading = () => createSelector(selectProducerState, substate => substate.get('loading'));
const makeSelectProducers = () => createSelector(selectProducerState, substate => substate.get('producers'));

export default selectProducerState;
export {
  selectProducerState
  makeSelectLoading,
  makeSelectProducers,
};
