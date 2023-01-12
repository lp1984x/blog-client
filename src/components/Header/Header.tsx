import React from "react";
import "./header.scss";
import { Container, Nav, Navbar } from "react-bootstrap";

export default function Header() {
  return (
    <Navbar sticky="top" bg="dark" variant="dark" className="mb-4 bd">
      <Container className="-sm-md-lg-xl-xxl user-select-none">
        <Navbar.Brand href="#home" className="text-info">
          Blog
        </Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">Features</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link>
        </Nav>
        <Nav className="justify-content-end logsing" activeKey="/home">
          <Nav.Item>
            <Nav.Link href="#">Login</Nav.Link>
          </Nav.Item>
          <div className="slash">/</div>
          <Nav.Item>
            <Nav.Link href="#">Sign in</Nav.Link>
          </Nav.Item>
        </Nav>
      </Container>
    </Navbar>
  );
}
