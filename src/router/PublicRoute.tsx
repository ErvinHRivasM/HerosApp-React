import { useContext } from "react";
import { AuthContext } from "../auth/context/AuthContext";
import { Navigate } from "react-router";

export const PublicRoute = ({ children }) => {
  const { isLoggedIn } = useContext(AuthContext);

  return !isLoggedIn ? children : <Navigate to="/marvel" />;
};
