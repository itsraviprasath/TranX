import React, { useState } from "react";
import "../assets/styles/pages/Login.scss";
import { Link } from "react-router-dom";
import HomeNavbar from "../components/HomeNavbar";
import Footer from "../components/Footer";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const [errorMsg, setErrorMsg] = useState("");

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    axios
      .post(`http://localhost:8000/api/users/login`, {
        email: email,
        password: password,
      })
      .then((result) => {
        const res = JSON.stringify(result.data);
        localStorage.setItem("Data", res);

        if (result.data.login !== "false") {
          navigate("/home");
          document.location.reload();
        } else {
          setErrorMsg(result.data.message);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <HomeNavbar />
      <section id="login">
        <h3>Login to your account</h3>
        <form onSubmit={handleLoginSubmit}>
          <label htmlFor="email">Email: </label>
          <input
            id="email"
            name="email"
            type="email"
            value={email}
            placeholder="you@mail.com"
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="password">Password: </label>
          <input
            id="password"
            name="password"
            value={password}
            type="password"
            placeholder="*********"
            onChange={(e) => setPassword(e.target.value)}
          />
          <p className="error-msg">{errorMsg}</p>
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
