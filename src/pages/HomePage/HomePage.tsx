import React, { FC, useState, useEffect, useContext } from "react";
import { User } from "../../types/user.interface";
import axios, { Axios, AxiosResponse } from "axios";
import classes from "./home-page.module.css";
import { UserContext, UserProvider } from "../../UserContext";

const HomePage = () => {
  const { loggedInUser } = useContext(UserContext);
  return (
    <div className="App">
      <h1>Welcome back, {loggedInUser.firstName}</h1>
      {/* console.log("the username is",loggedIn); */}
    </div>
  );
};

export default HomePage;
