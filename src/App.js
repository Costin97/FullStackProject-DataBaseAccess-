import "./App.css";
// import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useRoutes,
} from "react-router-dom";
import MainPage from "./pages/MainPage";
import LoginPage from "./pages/LoginPage";
import SignUp from "./pages/SignUp";

function App() {
  let routes = useRoutes([
    {
      path: "/",
      element: <LoginPage />,
    },
    {
      path: "/loginpage",
      element: <LoginPage />,
    },
    {
      path: "/mainpage",
      element: <MainPage />,
    },
    {
      path: "/signuppage",
      element: <SignUp />,
    },
  ]);
  return routes;
}

const AppWrapper = () => {
  return (
    <Router>
      <App />
    </Router>
  );
};

export default AppWrapper;
