import { fromJS } from 'immutable';
import createProxyReducer from '../reducer';

describe('createProxyReducer', () => {
  it('returns the initial state', () => {
    expect(createProxyReducer(undefined, {})).toEqual(fromJS({}));
  });
});
