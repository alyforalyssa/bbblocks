/*
 *
 * ApplicationPage reducer
 *
 */
import produce from 'immer';
import { fabric } from 'fabric';

import { ADD_BLOCK, CHANGE_BLOCK_STYLE } from './constants';
import { isValidBlock } from './utils';

export const initialState = {
  row: 4,
  column: 3,
  blocks: {
    '1': {
      id: '1',
      position: {
        gridColumnStart: 1,
        gridColumnEnd: 2,
        gridRowStart: 1,
        gridRowEnd: 2,
      },
      content: new fabric.Canvas('1'),
      style: {},
    },
    '2': {
      id: '2',
      position: {
        gridColumnStart: 2,
        gridColumnEnd: 4,
        gridRowStart: 1,
        gridRowEnd: 2,
      },
      content: new fabric.Canvas('2'),
      style: {},
    },
  },
  style: {
    rowGutter: 16,
    columnGutter: 16,
    backgroundColor: '#FFFFF',
  },
};

/* eslint-disable default-case, no-param-reassign */
const appReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case ADD_BLOCK:
        if (isValidBlock({ blockData: action.blockData, state })) {
          draft.blocks = {
            ...state.blocks,
            '3': {
              id: '3',
              position: action.blockData.position,
              style: action.blockData.style || {},
            },
          };
        }
        break;
      case CHANGE_BLOCK_STYLE:
        draft.blocks[action.block.id] = {
          ...draft.blocks[action.block.id],
          style: {
            ...draft.blocks[action.block.id].style,
            ...action.styleProps,
          },
        };
        break;
    }
  });

export default appReducer;
