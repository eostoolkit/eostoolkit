import { fromJS } from 'immutable';
import voteUsReducer from '../reducer';

describe('voteUsReducer', () => {
  it('returns the initial state', () => {
    expect(voteUsReducer(undefined, {})).toEqual(fromJS({}));
  });
});
