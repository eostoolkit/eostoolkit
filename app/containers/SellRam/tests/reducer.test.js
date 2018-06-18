
import { fromJS } from 'immutable';
import createAccountReducer from '../reducer';

describe('createAccountReducer', () => {
  it('returns the initial state', () => {
    expect(createAccountReducer(undefined, {})).toEqual(fromJS({}));
  });
});
