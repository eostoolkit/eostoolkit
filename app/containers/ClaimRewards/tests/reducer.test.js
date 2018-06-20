import { fromJS } from 'immutable';
import claimRewardsReducer from '../reducer';

describe('claimRewardsReducer', () => {
  it('returns the initial state', () => {
    expect(claimRewardsReducer(undefined, {})).toEqual(fromJS({}));
  });
});
