/*
 *
 * SimplePermissions actions
 *
 */

import {
  DEFAULT_ACTION,
} from './constants';

export default function defaultAction(form) {
  console.log('action');
  return {

    type: DEFAULT_ACTION,
    form,
  };
}
