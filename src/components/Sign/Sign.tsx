import React from "react";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Sign() {
  return (
    <Nav className="justify-content-end" activeKey="/home">
      <Nav.Item>
        <Nav.Link href="#">
          <Link to="/signin" style={{ all: "unset" }}>
            Sign in
          </Link>
        </Nav.Link>
      </Nav.Item>
      <div className="slash">/</div>
      <Nav.Item>
        <Nav.Link href="#">
          <Link to="/login" style={{ all: "unset" }}>
            Log in
          </Link>
        </Nav.Link>
      </Nav.Item>
    </Nav>
  );
}
