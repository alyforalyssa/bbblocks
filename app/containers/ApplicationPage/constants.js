/*
 *
 * ApplicationPage constants
 *
 */

export const ADD_BLOCK = 'app/ApplicationPage/ADD_BLOCK';
export const ADD_SUBBLOCK = 'app/ApplicationPage/ADD_SUBBLOCK';
export const CHANGE_BLOCK_STYLE = 'app/ApplicationPage/CHANGE_BLOCK_STYLE';
export const DRAG_BLOCK_END = 'app/ApplicationPage/DRAG_BLOCK_END';
export const INITIALIZE_BLOCK_CONTENT =
  'app/ApplicationPage/INITIALIZE_BLOCK_CONTENT';

export const reducerKey = 'app';

export const allBlocks = {
  paragraph: {
    id: 'paragraph',
    type: 'paragraph',
    name: 'Text',
    image: '',
    desciption: 'Cute, friendly line of text.',
    props: {
      row: 1,
      column: 2,
      text: 'Hello!',
    },
    style: {
      color: 'blue',
    },
  },
  header1: {
    id: 'header1',
    type: 'header1',
    name: 'Title',
    image: '',
    description: 'Big, bold header.',
    props: {
      row: 1,
      column: 3,
      text: 'Title!',
    },
    style: {
      color: 'blue',
    },
  },
};
