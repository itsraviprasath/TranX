import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/images/logo.png";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { CgProfile } from "react-icons/cg";
import "../assets/styles/components/ProfileNavbar.scss";

const ProfileNavbar = () => {
  const data = JSON.parse(localStorage.getItem("Data"));
  console.log(data);

  return (
    <>
      <Navbar expand="lg" id="profileNav">
        <Container>
          <Navbar.Brand>
            <img className="nav-logo" src={Logo} alt="logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className="navbar-collapse">
            <Nav className="me-auto">
              <Link className="nav-link" to="/lend">
                Lend
              </Link>
              <Link className="nav-link" to="/borrow">
                Borrow
              </Link>
              <NavDropdown
                className="nav-link nav-dropdown"
                title={
                  <>
                    <CgProfile className="profile-icon" />{" "}
                    <span className="name">{data.name}</span>
                  </>
                }
                id="basic-nav-dropdown"
              >
                <NavDropdown.Item>
                  <Link to="/profile">View Profile</Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link to="/logout">Logout</Link>
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default ProfileNavbar;
