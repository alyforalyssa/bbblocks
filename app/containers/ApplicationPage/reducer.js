/*
 *
 * ApplicationPage reducer
 *
 */
import produce from 'immer';

import { DEFAULT_ACTION } from './constants';

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

export const isValidBlock = block => {
  /**
   * @param block
   * return valid if we can insert block into current app grid.
   * 1. block must follow constrain of position/size
   * 2. block cannot overlap with another block
   */
  return !!block;
};
/* eslint-disable default-case, no-param-reassign */
const appReducer = (state = initialState, action) =>
  produce(state, (/* draft */) => {
    switch (action.type) {
      case DEFAULT_ACTION:
        break;
    }
  });

export default appReducer;
