import { fromJS } from 'immutable';
import undelegateReducer from '../reducer';

describe('undelegateReducer', () => {
  it('returns the initial state', () => {
    expect(undelegateReducer(undefined, {})).toEqual(fromJS({}));
  });
});
