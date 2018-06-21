/*
 *
 * ClaimRewards actions
 *
 */

import { DEFAULT_ACTION } from './constants';

export default function defaultAction(form) {
  // console.log("ClaimRewards");
  return {
    type: DEFAULT_ACTION,
    form,
  };
}
