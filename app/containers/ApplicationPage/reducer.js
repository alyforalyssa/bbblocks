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
  blocks: [],
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
