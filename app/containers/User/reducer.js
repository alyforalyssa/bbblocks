/*
 *
 * User reducer
 *
 */
import produce from 'immer';
import { SELECT_BLOCK } from './constants';

export const initialState = {
  selected: {
    block: false,
    app: true,
  },
};

/* eslint-disable default-case, no-param-reassign */
const userReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case SELECT_BLOCK:
        console.log(action);
        draft.selected.block = action.block;
        break;
    }
  });

export default userReducer;
