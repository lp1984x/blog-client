import React from "react";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Sign() {
  return (
    <Nav className="justify-content-end" activeKey="/home">
      <Nav.Item>
        <Link to="/login" className="nav-link">
          Log
        </Link>
      </Nav.Item>
      <div className="slash">/</div>
      <Nav.Item>
        <Link to="/reg" className="nav-link">
          Reg
        </Link>
      </Nav.Item>
    </Nav>
  );
}
