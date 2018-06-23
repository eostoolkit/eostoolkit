import { fromJS } from 'immutable';
import setProxyReducer from '../reducer';

describe('setProxyReducer', () => {
  it('returns the initial state', () => {
    expect(setProxyReducer(undefined, {})).toEqual(fromJS({}));
  });
});
