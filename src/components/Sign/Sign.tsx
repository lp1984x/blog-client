import React from "react";
import { Nav } from "react-bootstrap";

export default function Sign() {
  return (
    <Nav className="justify-content-end" activeKey="/home">
      <Nav.Item>
        <Nav.Link href="#">Sign in</Nav.Link>
      </Nav.Item>
      <div className="slash">/</div>
      <Nav.Item>
        <Nav.Link href="#">Sign up</Nav.Link>
      </Nav.Item>
    </Nav>
  );
}
