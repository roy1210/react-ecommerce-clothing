import { combineReducers } from 'redux';
import userReducer from './user/user.reducer';
import cartReducer from './cart/cart.reducer';

// Redux: (Giant) JSON format
export default combineReducers({
  user: userReducer,
  cart: cartReducer
});
