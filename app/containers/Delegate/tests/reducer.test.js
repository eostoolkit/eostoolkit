import { fromJS } from 'immutable';
import delegateReducer from '../reducer';

describe('delegateReducer', () => {
  it('returns the initial state', () => {
    expect(delegateReducer(undefined, {})).toEqual(fromJS({}));
  });
});
