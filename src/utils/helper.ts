import { useEffect, useState } from "react";
import { cookieInfo } from "../generic/cookies";

export const useAuthOnFocus = () => {
  const [isAuth, setIsAuth] = useState(cookieInfo().isAuthorization);

  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.visibilityState === "visible") {
        const newAuth = cookieInfo().isAuthorization;
        setIsAuth((prev) => (prev !== newAuth ? newAuth : prev));
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  return isAuth;
};
