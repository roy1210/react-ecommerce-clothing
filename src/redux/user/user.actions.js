import { UserActionTypes } from './user.types';

// args: key of the combineReducers
export const setCurrentUser = user => ({
  type: UserActionTypes.SET_CURRENT_USER,
  payload: user
});
