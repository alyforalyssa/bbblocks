import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the user state domain
 */

const selectUserDomain = state => state.user || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by User
 */

const makeSelectUser = () =>
  createSelector(
    selectUserDomain,
    substate => substate,
  );
const makeSelectUserSelected = () =>
  createSelector(
    selectUserDomain,
    state => state.selected,
  );

export default makeSelectUser;
export { makeSelectUserSelected, selectUserDomain };
