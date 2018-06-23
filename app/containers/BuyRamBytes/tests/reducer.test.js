import { fromJS } from 'immutable';
import buyRamBytesReducer from '../reducer';

describe('buyRamBytesReducer', () => {
  it('returns the initial state', () => {
    expect(buyRamBytesReducer(undefined, {})).toEqual(fromJS({}));
  });
});
