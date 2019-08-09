import { combineReducers } from 'redux';
import userReducer from './user/user.reducer';

// Redux: (Giant) JSON format
export default combineReducers({
  user: userReducer
});
