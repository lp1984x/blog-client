import React from "react";
import "./header.scss";
import { Container, Navbar } from "react-bootstrap";
import Sign from "../Sign/Sign";
import NavB from "../Navb/NavB";
import User from "../User/User";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg="dark"
      variant="dark"
      className="mb-5"
    >
      <Container>
        <Navbar.Brand href="#home" className="text-info">
          Blog
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <NavB />

          <Sign />
          <Link to="/settings">
            <User />
          </Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
