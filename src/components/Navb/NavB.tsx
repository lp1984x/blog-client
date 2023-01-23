import React from "react";
import { Nav, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function NavB() {
  return (
    <Nav className="me-auto">
      <Nav.Link href="#home">
        <Link to="/" style={{ all: "unset" }}>
          Home
        </Link>
      </Nav.Link>

      <Nav.Link href="#features">
        <Link to="/write" style={{ all: "unset" }}>
          Write
        </Link>
      </Nav.Link>

      <NavDropdown
        title="Categories"
        id="basic-nav-dropdown"
        menuVariant="dark"
      >
        <NavDropdown.Item href="#action/3.1">Life</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Music</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Sport</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.4">Cinema</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.4">Tech</NavDropdown.Item>
      </NavDropdown>

      <Nav.Link href="#about">
        <Link to="/about" style={{ all: "unset" }}>
          About
        </Link>
      </Nav.Link>
    </Nav>
  );
}
