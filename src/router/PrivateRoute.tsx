import { useContext } from "react";
import { AuthContext } from "../auth/context/AuthContext";
import { Navigate, useLocation } from "react-router";

export const PrivateRoute = ({ children }) => {
  const { isLoggedIn } = useContext(AuthContext);
  const { pathname, search } = useLocation();

  const lastPath = pathname + search;
  localStorage.setItem("lastPath", lastPath);

  //console.log("Rerendering");

  return isLoggedIn ? children : <Navigate to="/login" />;
};
