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
  DRAG_BLOCK_END,
  allBlocks,
} from './constants';
import { isValidBlock, getBlockGridPosition } from './utils';

export const initialState = {
  row: 4,
  column: 12,
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
      type: null,
      canvas: null,
      props: {},
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
      type: null,
      canvas: null,
      props: {},
      // style applied to blocks
      style: {},
    },
  },
  style: {
    blockHeight: '48px',
    width: 1260,
    backgroundColor: '#FFFFF',
  },
};

const handleCanvasLayerToObject = toObject => {
  // add id and custom_type to object
  return function() {
    return fabric.util.object.extend(toObject.call(this), {
      id: this.id,
      custom_type: this.custom_type,
    });
  };
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
      case DRAG_BLOCK_END: {
        const { result } = action;
        // outside of bounds
        if (!result.destination) {
          return;
        }
        const blockPosition = getBlockGridPosition({
          draggables: allBlocks,
          droppableId: result.destination.droppableId,
          draggableId: result.draggableId,
        });
        const templateBlock = allBlocks[result.draggableId];
        if (
          isValidBlock({
            blockData: { ...templateBlock, position: blockPosition },
            state,
          })
        ) {
          draft.blocks = {
            ...state.blocks,
            [result.destination.droppableId]: {
              id: result.destination.droppableId,
              position: blockPosition,
              type: templateBlock.type,
              props: templateBlock.props,
              style: templateBlock.style,
            },
          };
          console.log(draft.blocks);
        }
        break;
      }
      case ADD_SUBBLOCK: {
        const subBlock = new fabric.IText(action.subBlockProps.text, {
          ...action.subBlockProps.options,
        });
        subBlock.toObject = handleCanvasLayerToObject(subBlock.toObject);
        draft.blocks[action.block.id].canvas.add(subBlock);
        draft.blocks[action.block.id].canvas.setActiveObject(subBlock);
        draft.blocks[action.block.id].canvas.renderAll();
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
        draft.blocks[action.block.id].style = {
          ...state.blocks[action.block.id].style,
          ...action.styleProps,
        };
        break;
      }
      case INITIALIZE_BLOCK_CONTENT: {
        if (action.block.content) {
          // initialize canvas from json object
        } else {
          draft.blocks[action.block.id].canvas = new fabric.Canvas(
            action.block.id,
            {
              ...action.blockProps,
            },
          );
        }
        break;
      }
    }
  });

export default appReducer;
