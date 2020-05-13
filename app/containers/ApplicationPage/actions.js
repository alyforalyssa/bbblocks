/*
 *
 * ApplicationPage actions
 *
 */

import { ADD_BLOCK } from './constants';

/**
 * Add a custom block to blocks array
 *
 * @param  {object} blockData The user input data of the new block
 *
 * @return {object} An action object with a type of ADD_BLOCK
 */
export function addBlock(blockData) {
  return {
    type: ADD_BLOCK,
    blockData,
  };
}
