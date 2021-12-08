import React, { FC, useState, useEffect, useContext } from "react";
import { User } from "../../types/user.interface";
import axios, { Axios, AxiosResponse } from "axios";
import classes from "./login-page.module.css";
import { useLocation, useNavigate } from "react-router-dom";
import { UserContext, UserProvider } from "../../UserContext";

const ErrorText = () => {
  return <h2 className={classes.errorText}>This Account Does Not Exist</h2>;
};

const LoginPage = () => {
  const { loggedInUser, setLoggedInUser } = useContext(UserContext);

  const { state } = useLocation();
  const { passedUserName, passedPassword } = state ?? {};

  const [userName, setUserName] = useState(passedUserName || "");
  const [password, setPassword] = useState(passedPassword || "");
  const [isError, setIsError] = useState(false);

  const navigate = useNavigate();

  const Login = async (userName: string, password: string) => {
    try {
      const response = await axios.post("http://localhost:5000/users/login", {
        userName,
        password,
      });

      if (response.statusText === "OK") {
        setLoggedInUser(response.data);
      }
    } catch (error) {
      console.log(error);
      setIsError(true);
    }
  };

  useEffect(() => {
    navigate("/home");
  }, [loggedInUser]);

  return (
    <div className="App">
      <h1 className={classes.title}>Login</h1>
      <form>
        <input
          type="text"
          name="username"
          value={userName}
          onChange={(e) => {
            setUserName(e.currentTarget.value);
          }}
          placeholder="User Name"
          autoComplete="off"
          id="username"
          className={classes.usernameInput}
        />
        <br />
        <input
          type="password"
          name="password"
          value={password}
          onChange={(e) => {
            setPassword(e.currentTarget.value);
          }}
          placeholder="password"
          autoComplete="off"
          className={classes.passwordInput}
        />

        <br />
        <button
          type="button"
          onClick={() => Login(userName, password)}
          className={classes.loginButton}
        >
          Log In
        </button>

        {isError && <ErrorText />}

        <h1>Doesn't Have An Account? </h1>
        <button
          type="button"
          onClick={() => navigate(`/register`)}
          className={classes.loginButton}
        >
          Click Here To Register
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
