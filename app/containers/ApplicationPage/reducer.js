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
        col: 0,
        row: 0,
      },
      size: {
        col: 1,
        row: 1,
      },
      content: {},
      style: {
        rowGutter: 16,
        columnGutter: 16,
        backgroundColor: '#FFFFF',
      },
    },
  ],
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
