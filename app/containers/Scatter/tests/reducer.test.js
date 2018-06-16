
import { fromJS } from 'immutable';
import scatterReducer from '../reducer';

describe('scatterReducer', () => {
  it('returns the initial state', () => {
    expect(scatterReducer(undefined, {})).toEqual(fromJS({}));
  });
});
