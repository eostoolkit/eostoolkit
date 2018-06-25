import { fromJS } from 'immutable';
import buyRamReducer from '../reducer';

describe('buyRamReducer', () => {
  it('returns the initial state', () => {
    expect(buyRamReducer(undefined, {})).toEqual(fromJS({}));
  });
});
