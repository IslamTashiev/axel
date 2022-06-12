import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

export const Routes = ({ children }) => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scroll(0, 0);
  }, [pathname]);

  return <>{children}</>;
};
