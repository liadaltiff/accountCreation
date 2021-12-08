import React, { FC, useState, useEffect, useContext } from "react";
import { User } from "../../types/user.interface";
import axios, { Axios, AxiosResponse } from "axios";
import classes from "./home-page.module.css";
import { UserContext, UserProvider } from "../../UserContext";
import { setUserLS } from "../../utils/localstorage";
import { useNavigate } from "react-router-dom";

interface RoleButtonProps {
  role: string;
}

const RoleButton: React.VFC<RoleButtonProps> = ({ role }) => {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate(`/${role}Role`)}
    >{`you got the ${role} role`}</button>
  );
};

function viewButtons(role: string) {
  switch (role) {
    case "Admin":
      return ["Admin", "Male", "Female"];
    case "Female":
      return ["Female"];
    case "Male":
      return ["Male"];
    default:
      return ["Default"];
  }
}

const rolesButtons = {
  Admin: ["Admin", "Male", "Female"],
  Male: ["Male"],
  Female: ["Female"],
  Default: [],
};

type rolesOptions = keyof typeof rolesButtons;

const HomePage = () => {
  const { loggedInUser } = useContext(UserContext);
  if (loggedInUser) {
    setUserLS(loggedInUser);
  }
  const [role, setRole] = useState<rolesOptions>("Default");

  console.log("the user name is:", loggedInUser?.userName);

  useEffect(() => {
    if (loggedInUser) {
      setRole(loggedInUser.role);
    }
  }, [loggedInUser]);

  return (
    <div className="App">
      <h1>Welcome back, {loggedInUser?.firstName}</h1>
      {rolesButtons[role].map((role) => {
        return <RoleButton role={role} />;
      })}
    </div>
  );
};

export default HomePage;
