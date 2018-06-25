import { fromJS } from 'immutable';
import transferReducer from '../reducer';

describe('transferReducer', () => {
  it('returns the initial state', () => {
    expect(transferReducer(undefined, {})).toEqual(fromJS({}));
  });
});
