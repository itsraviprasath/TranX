import React from "react";
import { Link } from "react-router-dom";
import "../assets/styles/pages/404.scss";

const NotFound = () => {
  return (
    <section id="notFound">
      <div class="text">
        <h1>404</h1>
        <h2>PAGE NOT FOUND</h2>
        <h3>BACK TO HOME?</h3>
        <Link to="/" class="yes">
          YES
        </Link>
        <Link>NO</Link>
      </div>
    </section>
  );
};

export default NotFound;
