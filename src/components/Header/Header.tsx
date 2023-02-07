import React, { useContext } from "react";
import "./header.scss";
import { Container, Navbar } from "react-bootstrap";
import Sign from "../Sign/Sign";
import NavB from "../Navb/NavB";
import User from "../User/User";
import { Link } from "react-router-dom";
import { MyContext } from "../../context/Context";

export default function Header() {
  const { user } = useContext(MyContext);
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg="dark"
      variant="dark"
      className="mb-5"
    >
      <Container>
        <Navbar.Brand className="text-info">
          <Link to="/" className="nav-link">
            Blog
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <NavB />
          {user ? (
            <Link to="/settings">
              <User />
            </Link>
          ) : (
            <Sign />
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
