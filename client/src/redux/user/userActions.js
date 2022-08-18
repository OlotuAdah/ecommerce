//  Action creator, creates the action in the valid format expected by a reducer function
export const setCurrentUser = (user) => ({
  type: "SET_CURRENT_USER",
  payload: user,
});
