/*
 *
 * CreateProxy actions
 *
 */

import { DEFAULT_ACTION } from './constants';

export default function defaultAction(form) {
  return {
    type: DEFAULT_ACTION,
    form,
  };
}
