import { createSelector } from "reselect";

//1
const selectCart = (state) => state.cart;

//2
export const selectCartItems = createSelector(
  [selectCart],
  (cart) => cart.cartItems
);

//3
export const selectCartItemsCount = createSelector(
  [selectCartItems],
  (cartItems) =>
    cartItems.reduce(
      (accumulatedQuantity, cartItem) =>
        accumulatedQuantity + cartItem.quantity,
      0
    )
);
