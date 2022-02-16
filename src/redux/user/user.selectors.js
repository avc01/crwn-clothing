import { createSelector } from "reselect";

//1
const selectUser = (state) => state.user;

//2
export const selectCurrentUser = createSelector(
  [selectUser],
  (user) => user.currentUser
);
