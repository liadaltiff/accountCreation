import React, { FC, useState, useEffect, useContext } from "react";
import { User } from "../../types/user.interface";
import axios, { Axios, AxiosResponse } from "axios";
import classes from "./home-page.module.css";
import { UserContext, UserProvider } from "../../UserContext";
import { setUserLS } from "../../utils/localstorage";

interface RoleButtonProps {
  role: string;
}

const RoleButton: React.VFC<RoleButtonProps> = ({ role }) => {
  return <button>{`you got the ${role} role`}</button>;
};

const HomePage = () => {
  const { loggedInUser } = useContext(UserContext);
  setUserLS(loggedInUser);

  console.log("the user name is:", loggedInUser.userName);

  const [isMaleRole, setIsMaleRole] = useState(false);
  useEffect(() => {
    if (loggedInUser.role === "Male") {
      setIsMaleRole(true);
    } else {
      setIsMaleRole(false);
    }
  });

  const [isFemaleRole, setIsFemaleRole] = useState(false);
  useEffect(() => {
    if (loggedInUser.role === "Female") {
      setIsFemaleRole(true);
    } else {
      setIsFemaleRole(false);
    }
  });

  const [isAdminRole, setIsAdminRole] = useState(false);
  useEffect(() => {
    if (loggedInUser.role === "Admin") {
      setIsAdminRole(true);
    } else {
      setIsAdminRole(false);
    }
  });

  return (
    <div className="App">
      <h1>Welcome back, {loggedInUser.firstName}</h1>
      {isMaleRole && <RoleButton role="Male" />}
      {isFemaleRole && <RoleButton role="Female" />}
      {isAdminRole && <RoleButton role="Admin" />}
    </div>
  );
};

export default HomePage;
