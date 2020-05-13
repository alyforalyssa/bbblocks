/*
 *
 * User actions
 *
 */

import { SELECT_BLOCK } from './constants';

export function selectBlock(block) {
  return {
    type: SELECT_BLOCK,
    block,
  };
}
