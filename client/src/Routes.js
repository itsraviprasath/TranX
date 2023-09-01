import React from "react";
import { Routes as RoutesComponent, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import NotFound from "./pages/404";

const Routes = () => {
  return (
    <RoutesComponent>
      <Route exact path="/" element={<Navigate replace to="/home" />} />
      <Route exact path="/home" element={<Home />} />
      <Route exact path="/login" element={<Login />} />
      <Route exact path="/register" element={<Register />} />
      <Route exact path="/profile" element={<Profile />} />
      <Route path="*" element={<NotFound />} />
    </RoutesComponent>
  );
};

export default Routes;
