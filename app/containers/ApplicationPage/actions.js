/*
 *
 * ApplicationPage actions
 *
 */

import {
  ADD_BLOCK,
  CHANGE_BLOCK_STYLE,
  ADD_SUBBLOCK,
  INITIALIZE_BLOCK_CONTENT,
} from './constants';

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

/**
 * Change a block's style
 *
 * @param  {object} block the block to change
 * @param  {object} styleProps key pair of block style props to change
 *
 * @return {object} An action object with a type of CHANGE_BLOCK_STYLE
 */
export function changeBlockStyle(block, styleProps) {
  return {
    type: CHANGE_BLOCK_STYLE,
    block,
    styleProps,
  };
}

/**
 * Add a subblock to existing block
 *
 * @param {object} block The block to add subblock to
 * @param {string} subBlockType The subblock type to add
 * @param {object} subBlockProps custom props of the subblock
 *
 * @return {object} An action object with a type of ADD_SUBBLOCK
 */
export function addSubBlock(block, subBlockType, subBlockProps) {
  return {
    type: ADD_SUBBLOCK,
    block,
    subBlockType,
    subBlockProps,
  };
}

export function initializeBlockContent(block, blockProps) {
  return {
    type: INITIALIZE_BLOCK_CONTENT,
    block,
    blockProps,
  };
}
