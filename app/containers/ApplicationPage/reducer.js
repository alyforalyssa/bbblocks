/*
 *
 * ApplicationPage reducer
 *
 */
import produce from 'immer';

import { ADD_BLOCK, CHANGE_BLOCK_STYLE } from './constants';
import { isValidBlock } from './utils';

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

/* eslint-disable default-case, no-param-reassign */
const appReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case ADD_BLOCK:
        if (isValidBlock({ blockData: action.blockData, state })) {
          draft.blocks = [
            ...state.blocks,
            {
              id: '3',
              position: action.blockData.position,
              style: action.blockData.style || {},
            },
          ];
        }
        break;
      case CHANGE_BLOCK_STYLE:
        draft.blocks = state.blocks.map(block => {
          if (block.id === action.block.id) {
            return {
              ...block,
              style: {
                ...block.style,
                ...action.styleProps,
              },
            };
          }
          return block;
        });
        break;
    }
  });

export default appReducer;
