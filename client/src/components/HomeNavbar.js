import React from "react";
import { Link } from "react-router-dom";
import "../assets/styles/components/HomeNavbar.scss";
import Logo from "../assets/images/logo.png";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Button from "react-bootstrap/Button";
import { FiLogIn } from "react-icons/fi";

const HomeNavbar = () => {
  return (
    <>
      <Navbar expand="lg" className="nav">
        <Container>
          <Navbar.Brand>
            <img className="nav-logo" src={Logo} alt="logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className="navbar-collapse">
            <Nav className="me-auto">
              <Link className="nav-link" to="/home">
                Home
              </Link>
              <Link className="nav-link" to="/lend">
                Lend
              </Link>
              <Link className="nav-link" to="/borrow">
                Borrow
              </Link>
              <NavDropdown
                className="nav-link nav-dropdown"
                title="Loans"
                id="basic-nav-dropdown"
              >
                <NavDropdown.Item>
                  <Link to="">One</Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link to="">Two</Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link to="">Three</Link>
                </NavDropdown.Item>
              </NavDropdown>
              {/* <NavDropdown
                className="nav-link nav-dropdown"
                title="More"
                id="basic-nav-dropdown"
              >
                <NavDropdown.Item>
                  <Link to="">One</Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link to="">Two</Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link to="">Three</Link>
                </NavDropdown.Item>
              </NavDropdown> */}
              <Link className="btn" to="/login">
                <Button style={{ backgroundColor: "#2D3079", color: "#fff" }}>
                  <FiLogIn className="login-icon" />
                  Login
                </Button>
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default HomeNavbar;
