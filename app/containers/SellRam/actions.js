/*
 *
 * SellRam actions
 *
 */

import { DEFAULT_ACTION } from './constants';

export default function defaultAction(form) {
  // console.log("Sell");
  return {
    type: DEFAULT_ACTION,
    form,
  };
}
