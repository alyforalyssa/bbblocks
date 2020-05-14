import { createSelector } from 'reselect';
import { initialState } from './reducer';
import { reducerKey } from './constants';
/**
 * Direct selector to the applicationPage state domain
 */

const SelectApp = state => state[reducerKey] || initialState;

/**
 * Other specific selectors
 */
const makeSelectGrid = () =>
  createSelector(
    SelectApp,
    appState => ({
      row: appState.row,
      column: appState.column,
      blocks: appState.blocks,
    }),
  );

const makeSelectBlocksArray = () =>
  createSelector(
    SelectApp,
    appState => Object.keys(appState.blocks).map(id => appState.blocks[id]),
  );

const makeSelectBlock = blockId => {
  createSelector(
    SelectApp,
    appState => appState.blocks[blockId],
  );
};
/**
 * Default selector used by ApplicationPage
 */

const makeSelectApplicationPage = () =>
  createSelector(
    SelectApp,
    substate => substate,
  );

export default makeSelectApplicationPage;
export { makeSelectGrid, SelectApp, makeSelectBlocksArray, makeSelectBlock };
