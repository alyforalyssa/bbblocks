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
    },
  ],
  style: {
    rowGutter: 16,
    columnGutter: 16,
    backgroundColor: '#FFFFF',
  },
};

/**
 * @param blockData
 * @param blocks
 * return valid if we can insert block into current app grid.
 * 1. block must follow constrain of position/size
 * 2. block cannot overlap with another block
 */

export const isValidBlock = ({ blockData, state }) => {
  if (!blockData.position) return false;
  if (
    blockData.position.gridColumnStart < 1 ||
    blockData.position.gridRowStart < 1 ||
    blockData.position.gridColumnEnd > state.column + 1 ||
    blockData.position.gridRowEnd > state.row + 1
  ) {
    return false;
  }
  return !!blockData;
};
/* eslint-disable default-case, no-param-reassign */
const appReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case ADD_BLOCK:
        if (isValidBlock({ nlockData: action.blockData, state })) {
          draft.id = '3';
          draft.position = action.blockData.position;
          draft.style = action.blockData.style;
        }
        break;
    }
  });

export default appReducer;
