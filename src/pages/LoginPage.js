import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./LoginPage.css";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const LoginPage = () => {
  const [user, setUser] = useState();
  const [parola, setParola] = useState();

  const getData = async (e) => {
    const newData = await fetch("/login", {
      method: "POST",
      headers: {
        "content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        user: user,
        parola: parola,
      }),
    });
  };

  const setUserHandler = (e) => {
    setUser(e.target.value);
  };

  const setParolaHandler = (e) => {
    setParola(e.target.value);
  };

  return (
    <div className="wholePage">
      {/* <img className="backgroundImg" src={img} alt ="imagine"/> */}
      <p className="header">
        Aplicatie pentru evidenta vanzarilor de masini la un dealer auto
      </p>
      <div className="pageBox">
        {/* <div className="imgBox"> */}
        {/* <img src={img} alt="imagine" className="backgroundImg" /> */}
        <div className="inputBox">
          <TextField
            id="standard-basic"
            label="User"
            variant="standard"
            onChange={setUserHandler}
            className="user"
          ></TextField>
          <TextField
            type="password"
            id="standard-basic"
            label="Password"
            variant="standard"
            onChange={setParolaHandler}
            className="parola"
          ></TextField>
          <div className="bBox">
            <NavLink to="/mainpage" className="loginButton" onClick={getData}>
              <Button variant="contained">Login</Button>
            </NavLink>
            <NavLink to="/signuppage" className="signUpButton">
              <Button variant="contained">SignUp</Button>
            </NavLink>
          </div>
          {/* <p>User:{returnedData.Nume}</p>
          <p>Parola:{returnedData.Parola}</p> */}
        </div>
        {/* </div> */}
      </div>
    </div>
  );
};

export default LoginPage;
