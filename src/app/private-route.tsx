import { FC } from "react";
import { Navigate } from "react-router-dom";
import useGetUser from "../main/hooks/useGetUser";
const PrivateRoute: FC<any> = (props: any) => {
  const { children, isPageLogin } = props;
  const userisAuthenticated = useGetUser();
  console.log(window.location.pathname, "url");

  if (
    (window.location.pathname === "/login" ||
      window.location.pathname === "/") &&
    userisAuthenticated
  ) {
    return <Navigate to="/dashboard" />;
  } else if (
    !userisAuthenticated &&
    (window.location.pathname === "/login" || window.location.pathname === "/")
  ) {
    return children;
  }
  return userisAuthenticated ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
