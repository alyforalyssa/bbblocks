/*
 *
 * ApplicationPage reducer
 *
 */
import produce from 'immer';
import { fabric } from 'fabric';

import {
  ADD_BLOCK,
  CHANGE_BLOCK_STYLE,
  ADD_SUBBLOCK,
  INITIALIZE_BLOCK_CONTENT,
} from './constants';
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
      // content should be the subblocks of canvas, stored in json
      content: null,
      canvas: null,
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
      content: null,
      canvas: null,
      // style applied to blocks
      style: {
        backgroundColor: 'red',
        borderRadius: 20,
      },
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
      case ADD_SUBBLOCK: {
        const block = state.blocks[action.block.id];
        const subBlock = new fabric.IText(action.subBlockProps.text, {
          ...action.subBlockProps.options,
        });
        block.canvas.add(subBlock);
        block.canvas.setActiveObject(subBlock);
        block.canvas.renderAll();
        break;
      }
      case CHANGE_BLOCK_STYLE: {
        /**
         * @TODO only accept certain keys? kinda dangerous lmao
         */
        // Object.keys(action.styleProps).forEach(key => {
        //   draft.blocks[action.block.id].canvas.set(key, action.styleProps[key]);
        // });
        // draft.blocks[action.block.id].canvas.renderAll();
        draft.blocks[action.block.id] = {
          ...draft.blocks[action.block.id],
          style: {
            ...draft.blocks[action.block.id].style,
            ...action.styleProps,
          },
        };
        break;
      }
      case INITIALIZE_BLOCK_CONTENT: {
        if (action.block.content) {
          // initialize canvas from json object
        } else {
          draft.blocks[action.block.id].canvas = new fabric.Canvas(
            action.block.id,
          );
        }
        break;
      }
    }
  });

export default appReducer;
