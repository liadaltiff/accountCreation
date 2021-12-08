import { ReactElement, useContext, useEffect, useLayoutEffect } from "react";
import { Route, Router, useNavigate } from "react-router";
import { PathRouteProps } from "react-router-dom";
import { getUser } from "../api/users";
import { UserContext } from "../UserContext";
import { setUserLS } from "../utils/localstorage";

interface ProtectedRouteProps {
  role: string;
  children: ReactElement<any, any>;
}

const ProtectedRoute: React.VFC<ProtectedRouteProps> = ({ role, children }) => {
  const navigate = useNavigate();
  const { loggedInUser } = useContext(UserContext);

  if (loggedInUser.role !== role) {
    if (loggedInUser.role !== "Admin") {
      navigate("/home");
    }
  }

  if (loggedInUser.role === role || loggedInUser.role === "Admin") {
    return children;
  } else {
    return <div></div>;
  }
};

export default ProtectedRoute;
