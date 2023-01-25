import { Fragment, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import classes from "./SignUp.module.css";
import Button from "@mui/material/Button";

const SignUp = () => {
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isError, setIsError] = useState(false);
  const [errorText, SetErrorText] = useState("");

  let disabled = false;
  let data;
  const history = useNavigate();
  if (email !== "" && password !== "") {
    data = {
      email: email,
      password: password,
    };
  }
  const signUpHandler = async () => {
    const newData = await fetch("/createuser", {
      method: "POST",
      headers: {
        "content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        User: firstName,
        Parola: password,
        Email: email,
      }),
    });
    // console.log(newData[0]);
    // setReturnedDataCar(newData[0]);
  };
  const userHandler = (event) => {
    setFirstName(event.target.value);
  };

  const emailHandler = (event) => {
    setEmail(event.target.value);
  };

  const passwordHandler = (event) => {
    setPassword(event.target.value);
  };

  if ((firstName !== "") !== "" && password !== "" && email !== "") {
    disabled = true;
  }

  //   console.log(newData[0]);
  //   setReturnedDataCar(newData[0]);

  return (
    <Fragment>
      {isError !== true ? (
        <div className={classes.container}>
          <div className={classes.box}>
            <h1 className={classes.title}>
              Aplicatie pentru evidenta vanzarilor de masini la un dealer auto
            </h1>
            <div className={classes.nameInputBox}>
              <input
                type="text"
                placeholder="User"
                className={classes.firstName}
                onChange={userHandler}
              ></input>
              <input
                placeholder="Password"
                type="password"
                className={classes.surname}
                onChange={passwordHandler}
              ></input>
            </div>
            <input
              type="email"
              placeholder="Email"
              className={classes.email}
              size="49"
              onChange={emailHandler}
            ></input>
          </div>
          {disabled === false ? (
            <NavLink to="/" className={classes.text}>
              <Button
                variant="contained"
                className={classes.signUpButton}
                disabled
              >
                Sign Up
              </Button>
            </NavLink>
          ) : (
            <NavLink to="/loginpage" className={classes.text}>
              <Button
                variant="contained"
                className={classes.signUpButton}
                onClick={signUpHandler}
              >
                Sign Up
              </Button>
            </NavLink>
          )}
        </div>
      ) : (
        <p className={classes.errorText}>{errorText}</p>
      )}
    </Fragment>
  );
};

export default SignUp;
