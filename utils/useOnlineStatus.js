import { useEffect, useState } from "react";

// *** CUSTOM HOOK   ***

const useOnlineStatus = () => {
  const [OnlineStatus, setonlineStatus] = useState("online");
  useEffect(() => {
    window.addEventListener("offline", () => {
      setonlineStatus(false);
    });
    window.addEventListener("online", () => {
      setonlineStatus(true);
    });
  }, []);
  return OnlineStatus;
};

export default useOnlineStatus;
