import React, { useState } from "react";
import "../assets/styles/pages/Register.scss";
import { Link } from "react-router-dom";
import HomeNavbar from "../components/HomeNavbar";
import Footer from "../components/Footer";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    axios
      .post(`http://localhost:8000/api/users/register`, {
        name: name,
        phone: phone,
        email: email,
        password: password,
      })
      .then((result) => {
        const res = JSON.stringify(result.data);
        localStorage.setItem("Data", res);
        navigate("/profile");
        // document.location.reload();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <HomeNavbar />
      <section id="register">
        <h3>Create an account</h3>
        <form onSubmit={handleRegisterSubmit}>
          <label htmlFor="email">Name: </label>
          <input
            id="name"
            name="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="John Doe"
          />
          <label htmlFor="email">Phone: </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="9876543210"
          />
          <label htmlFor="email">Email: </label>
          <input
            id="email"
            name="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@mail.com"
          />
          <label htmlFor="password">Create Password: </label>
          <input
            id="password"
            name="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="*********"
          />
          <button className="btn" type="submit">
            Register
          </button>
        </form>
        <p>
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </section>
      <Footer />
    </>
  );
};

export default Register;
