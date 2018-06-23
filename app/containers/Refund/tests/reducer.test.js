import { fromJS } from 'immutable';
import refundReducer from '../reducer';

describe('refundReducer', () => {
  it('returns the initial state', () => {
    expect(refundReducer(undefined, {})).toEqual(fromJS({}));
  });
});
