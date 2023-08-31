import React from "react";
import "../assets/styles/pages/Register.scss";
import { Link } from "react-router-dom";
import HomeNavbar from "../components/HomeNavbar";
import Footer from "../components/Footer";

const Register = () => {
  return (
    <>
      <HomeNavbar />
      <section id="register">
        <h3>Create an account</h3>
        <form>
          <label htmlFor="email">Name: </label>
          <input id="name" name="name" type="text" placeholder="John Doe" />
          <label htmlFor="email">Phone: </label>
          <input id="phone" name="phone" type="tel" placeholder="9876543210" />
          <label htmlFor="email">Email: </label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="you@mail.com"
          />
          <label htmlFor="password">Create Password: </label>
          <input
            id="password"
            name="password"
            type="password"
            placeholder="*********"
          />
          <button className="btn" type="submit">
            Register
          </button>
          <p>
            Already have an account? <Link to="/login">Login</Link>
          </p>
        </form>
      </section>
      <Footer />
    </>
  );
};

export default Register;
