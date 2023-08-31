import React from "react";
import "../assets/styles/pages/Login.scss";
import { Link } from "react-router-dom";
import HomeNavbar from "../components/HomeNavbar";
import Footer from "../components/Footer";

const Login = () => {
  return (
    <>
      <HomeNavbar />
      <section id="login">
        <h3>Login to your account</h3>
        <form>
          <label htmlFor="email">Email: </label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="you@mail.com"
          />
          <label htmlFor="password">Password: </label>
          <input
            id="password"
            name="password"
            type="password"
            placeholder="*********"
          />
          <Link to="/forgot-password">Forgot Password?</Link>
          <button className="btn" type="submit">
            Login
          </button>
          <p>
            Don't have an account? <Link to="/register">Register</Link>
          </p>
        </form>
      </section>
      <Footer />
    </>
  );
};

export default Login;
