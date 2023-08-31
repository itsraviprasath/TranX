import React from "react";
import { Routes as RoutesComponent, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Login from "./pages/Login";
import Register from "./pages/Register";

const Routes = () => {
  return (
    <RoutesComponent>
      <Route exact path="/" element={<Navigate replace to="/home" />} />
      <Route exact path="/home" element={<Home />} />
      <Route exact path="/about" element={<About />} />
      <Route exact path="/login" element={<Login />} />
      <Route exact path="/register" element={<Register />} />
    </RoutesComponent>
  );
};

export default Routes;
