import { createSelector } from 'reselect';

/**
 * Direct selector to the delegate state domain
 */
const selectProducerState = state => state.get('NetworkProducers');

/**
 * Other specific selectors
 */

const makeSelectLoading = () => createSelector(selectProducerState, substate => substate.get('loading'));
const makeSelectProducers = () => createSelector(selectProducerState, substate => substate.get('producers'));
const makeSelectSelection = () => createSelector(selectProducerState, substate => substate.get('selected'));

export default selectProducerState;
export { selectProducerState, makeSelectLoading, makeSelectProducers, makeSelectSelection };
