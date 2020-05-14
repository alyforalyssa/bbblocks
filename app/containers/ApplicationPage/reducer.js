/*
 *
 * ApplicationPage reducer
 *
 */
import produce from 'immer';

import { ADD_BLOCK } from './constants';

export const initialState = {
  row: 4,
  column: 3,
  blocks: [
    {
      id: '1',
      position: {
        gridColumnStart: 1,
        gridColumnEnd: 2,
        gridRowStart: 1,
        gridRowEnd: 2,
      },
      content: {},
      style: {},
    },
    {
      id: '2',
      position: {
        gridColumnStart: 2,
        gridColumnEnd: 4,
        gridRowStart: 1,
        gridRowEnd: 2,
      },
      content: {},
      style: {},
    },
  ],
  style: {
    rowGutter: 16,
    columnGutter: 16,
    backgroundColor: '#FFFFF',
  },
};

const isOverlappingBlocks = (blockA, blockB) => {
  const isColumnOverlap =
    (blockA.gridColumnStart < blockB.gridColumnEnd &&
      blockA.gridColumnEnd > blockB.gridColumnStart) ||
    (blockB.gridColumnStart < blockA.gridColumnEnd &&
      blockB.gridColumnEnd > blockA.gridColumnStart);
  const isRowOverlap =
    (blockA.gridRowStart < blockB.gridRowEnd &&
      blockA.gridRowEnd > blockB.gridRowStart) ||
    (blockB.gridRowStart < blockA.gridRowEnd &&
      blockB.gridRowEnd > blockA.gridRowStart);
  console.log(`isColumnOverlap: ${isColumnOverlap}`);
  console.log(`isRowOverlap: ${isRowOverlap}`);
  return isColumnOverlap && isRowOverlap;
};
export const isValidBlock = ({ blockData, state }) => {
  if (!blockData.position) return false;
  console.log(blockData);
  console.log(state.blocks);
  if (
    blockData.position.gridColumnStart < 1 ||
    blockData.position.gridRowStart < 1 ||
    blockData.position.gridColumnEnd > state.column + 1 ||
    blockData.position.gridRowEnd > state.row + 1
  ) {
    return false;
  }
  const overlappingBlock = state.blocks.find(b =>
    isOverlappingBlocks(blockData.position, b.position),
  );
  return !overlappingBlock;
};
/* eslint-disable default-case, no-param-reassign */
const appReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case ADD_BLOCK:
        if (isValidBlock({ blockData: action.blockData, state })) {
          draft.blocks = [
            ...draft.blocks,
            {
              id: '3',
              position: action.blockData.position,
              style: action.blockData.style || {},
            },
          ];
        }
        break;
    }
  });

export default appReducer;
