import { LOGIN_SUCCESS } from "../user/userConstants";

export const actionHookMiddleware = (store) => (next) => (action) => {
  // If the dispatched action is LOGIN_SUCCES then remove hidden class from the ActionNotification component
  if (action.type === LOGIN_SUCCESS) {
    document
      .querySelector(".animateSlideIn.success")
      .classList.remove("hidden");
    setTimeout(() => {
      document.querySelector(".animateSlideIn.success").classList.add("hidden");
    }, 5000);
  }

  if (action.type === "LOGOUT") {
    // if user clicks the logout button, clear user data saved in the localStorage by redux-persist  & reload window
    window && window.localStorage.removeItem("persist:root");
    window && window.location.reload();
    // if action is LOGOUT the change the notification text to logout success then dispaly it for 5 secs and close
    document
      .querySelector(".animateSlideIn.success")
      .getElementsByTagName("span")[1].textContent = "Logout success!";
    document
      .querySelector(".animateSlideIn.success")
      .classList.remove("hidden");
    setTimeout(() => {
      document.querySelector(".animateSlideIn.success").classList.add("hidden");
    }, 5000);
  }
  //Move to the next middleware in the stack
  next(action);
};
