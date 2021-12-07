import React, { FC, useState, useEffect, useContext, useCallback } from "react";
import { User } from "../../types/user.interface";
import axios, { Axios, AxiosResponse } from "axios";
import classes from "./register-page.module.css";
import { useLocation, useNavigate } from "react-router-dom";

const ErrorText = () => {
  return (
    <h2 className={classes.errorText}>
      The Username Or The Email Already Exist
    </h2>
  );
};

const RegisterPage = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [favColor, setFavColor] = useState("");

  const [isError, setIsError] = useState(false);

  const navigate = useNavigate();

  const CreateUser = useCallback(() => {
    const sendrequest = async () => {
      try {
        const response = await axios.post("http://localhost:5000/users", {
          firstName,
          lastName,
          email,
          userName,
          password,
          favColor,
        });

        console.log("the response is:", response);

        if (response.status >= 200 && response.status <= 399) {
          console.log(response);
          console.log("Status code is", response.status);

          navigate(`/login`, {
            state: {
              passedUserName: userName,
              passedPassword: password,
            },
          });
        } else if (response.status > 399) {
          console.log(
            "theres something wrong, error code is:",
            response.status
          );
          setIsError(true);
        }
      } catch (error) {
        setIsError(true);
      }
    };

    sendrequest();
  }, [firstName, lastName, email, userName, password, favColor]);

  return (
    <div className="App">
      <h1 className={classes.title}>Register</h1>

      <form>
        <input
          type="text"
          name="firstName"
          value={firstName}
          onChange={(e) => {
            setFirstName(e.currentTarget.value);
          }}
          placeholder="First Name"
          autoComplete="off"
          id="username"
          className={classes.formInput}
        />
        <br />
        <input
          type="text"
          name="lastName"
          value={lastName}
          onChange={(e) => {
            setLastName(e.currentTarget.value);
          }}
          placeholder="Last Name"
          autoComplete="off"
          className={classes.formInput}
        />
        <br />
        <input
          type="text"
          name="Email"
          value={email}
          onChange={(e) => {
            setEmail(e.currentTarget.value);
          }}
          placeholder="Email"
          autoComplete="off"
          className={classes.formInput}
        />
        <br />
        <input
          type="text"
          name="userName"
          value={userName}
          onChange={(e) => {
            setUserName(e.currentTarget.value);
          }}
          placeholder="User Name"
          autoComplete="off"
          className={classes.formInput}
        />
        <br />
        <input
          type="password"
          name="password"
          value={password}
          onChange={(e) => {
            setPassword(e.currentTarget.value);
          }}
          placeholder="Password"
          autoComplete="off"
          className={classes.formInput}
        />
        <br />
        <input
          type="text"
          name="favColor"
          value={favColor}
          onChange={(e) => {
            setFavColor(e.currentTarget.value);
          }}
          placeholder="Favorite Color"
          autoComplete="off"
          className={classes.formInput}
        />

        <br />
        <button
          type="button"
          onClick={CreateUser}
          className={classes.createAccountButton}
        >
          Create Account
        </button>

        {isError && <ErrorText />}

        <h1>Already Have An Account? </h1>
        <button
          type="button"
          onClick={() => navigate(`/login`)}
          className={classes.createAccountButton}
        >
          Click Here To Log In
        </button>
      </form>
    </div>
  );
};

export default RegisterPage;
