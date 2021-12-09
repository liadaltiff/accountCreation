import { ReactElement, useContext, useEffect, useLayoutEffect } from "react";
import { useNavigate } from "react-router";
import { UserContext } from "../UserContext";

interface ProtectedRouteProps {
  role: string;
  children: ReactElement<any, any>;
}

const ProtectedRoute: React.VFC<ProtectedRouteProps> = ({ role, children }) => {
  const navigate = useNavigate();
  const { loggedInUser } = useContext(UserContext);

  console.log(loggedInUser);

  if (loggedInUser?.role !== role) {
    if (loggedInUser?.role !== "Admin") {
      navigate("/home");
    }
  }

  if (loggedInUser?.role === role || loggedInUser?.role === "Admin") {
    return children;
  } else {
    return <div></div>;
  }
};

export default ProtectedRoute;
