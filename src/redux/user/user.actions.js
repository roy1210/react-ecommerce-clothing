import { UserActionTypes } from './user.types';

// args: key of the combineReducers
// args: use for payload too
export const setCurrentUser = user => ({
  type: UserActionTypes.SET_CURRENT_USER,
  payload: user
});
