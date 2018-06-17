
import { fromJS } from 'immutable';
import notificationReducer from '../reducer';

describe('notificationReducer', () => {
  it('returns the initial state', () => {
    expect(notificationReducer(undefined, {})).toEqual(fromJS({}));
  });
});
