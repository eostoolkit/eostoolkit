import { fromJS } from 'immutable';
import sellRamReducer from '../reducer';

describe('sellRamReducer', () => {
  it('returns the initial state', () => {
    expect(sellRamReducer(undefined, {})).toEqual(fromJS({}));
  });
});
