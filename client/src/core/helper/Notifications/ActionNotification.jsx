import React, { useState, useEffect } from "react";

function ActionNotification({
  actionType = "success",
  textSize = "text-sm",
  message = "Notification msg!",
}) {
  const [openToast, setopenToast] = useState(true);
  let notificationType = {};
  let typeObject = {
    success: {
      textColor: "green-700",
      icon: "task_alt",
    },
    warning: {
      textColor: "amber-500",
      icon: "announcement",
    },
    danger: {
      textColor: "red-700",
      icon: "gpp_maybe",
    },
  };

  if (actionType === "success") notificationType = typeObject.success;
  if (actionType === "warning") notificationType = typeObject.warning;
  if (actionType === "danger") notificationType = typeObject.danger;

  const closeNotification = () => {
    // close notification if user clicks on the close icon
    document &&
      document.querySelector(".animateSlideIn").classList.add("hidden");
  };

  return (
    <div
      className={`absolute top-[105px] right-[300px] w-[200px] h-min rounded-md animateSlideIn ${actionType} hidden  `}
    >
      <div
        className={`bg-white text-${notificationType.textColor} ${textSize} px-2 py-1 flex w-full h-full rounded-md justify-start items-center space-x-2 `}
      >
        <span
          className={`material-icons text-inherit text-[20px] text-${notificationType.textColor}`}
        >
          {notificationType.icon}
        </span>
        <span>{message}</span>
        <span
          className={`material-icons text-inherit pl-3 text-[20px] cursor-pointer transition hover:translate-x-0.5 hover:duration-500 text-${notificationType.textColor}`}
          onClick={closeNotification}
        >
          close
        </span>
      </div>
    </div>
  );
}

export default ActionNotification;
