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

/**
 * Default selector used by ApplicationPage
 */

const makeSelectApplicationPage = () =>
  createSelector(
    SelectApp,
    substate => substate,
  );

export default makeSelectApplicationPage;
export { makeSelectGrid, SelectApp };
