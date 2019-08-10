import { createSelector } from 'reselect';
// To not calling unrelated state when rendering with new action
// Only select `cart` state
const selectCart = state => state.cart;

// For `mapStateToProps`
export const selectCartItems = createSelector(
  [selectCart],
  cart => cart.cartItems
);

// For `mapDispatchToProps`
export const selectCartItemsCount = createSelector(
  [selectCartItems],
  cartItems =>
    cartItems.reduce(
      (accumulatedQuantity, cartItem) =>
        accumulatedQuantity + cartItem.quantity,
      0
    )
);
