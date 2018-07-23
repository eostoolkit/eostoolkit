/*
 *
 * ResignProxy actions
 *
 */

import { DEFAULT_ACTION, REG_PROXY } from './constants';

export default function defaultAction(form) {
  return {
    type: DEFAULT_ACTION,
    form,
  };
}

export function regProxy(form) {
  return {
    type: REG_PROXY,
    form,
  };
}
