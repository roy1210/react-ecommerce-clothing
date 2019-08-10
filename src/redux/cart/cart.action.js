import { CartActionTypes } from './cart.types';

// NO need payload because just change the boon
// Payload: Options and it a `args`
export const toggleCartHidden = () => ({
  type: CartActionTypes.TOGGLE_CART_HIDDEN
});

export const addItem = item => ({
  type: CartActionTypes.ADD_ITEM,
  payload: item
});
