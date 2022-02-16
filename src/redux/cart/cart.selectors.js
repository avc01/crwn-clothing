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

//4
export const selectCartHidden = createSelector(
  [selectCart],
  (cart) => cart.hidden
);

//5
export const selectCartTotal = createSelector([selectCartItems], (cart) =>
  cart.reduce(
    (accumulatedQuantity, cartItem) =>
      accumulatedQuantity + cartItem.price * cartItem.quantity,
    0
  )
);
