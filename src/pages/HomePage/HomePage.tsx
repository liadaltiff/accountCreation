import React, { FC, useState, useEffect, useContext } from "react";
import { User } from "../../types/user.interface";
import axios, { Axios, AxiosResponse } from "axios";
import classes from "./home-page.module.css";
import { UserContext, UserProvider } from "../../UserContext";
import { useNavigate } from "react-router-dom";
import { setUserLS } from "../../utils/localstorage";

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
  const { loggedInUser, setLoggedInUser } = useContext(UserContext);
  const navigate = useNavigate();

  if (loggedInUser) {
    console.log("the logged in user is: ", loggedInUser);

    setLoggedInUser(loggedInUser);
    setUserLS(loggedInUser);
  }

  const logoutMe = () => {
    console.log("log out me func");

    setLoggedInUser(undefined);
    setUserLS(undefined);
    navigate("http:localhost:3000/login");
    console.log("log out me func 2");
  };

  return (
    <div className="App">
      <h1>Welcome back, {loggedInUser?.firstName}</h1>
      {/* {rolesButtons[role].map((role) => {
        return <RoleButton key={role} role={role} />;
      })} */}
      <br />
      <br />
      <br />
      <button onClick={logoutMe}>log out</button>
    </div>
  );
};

export default HomePage;
