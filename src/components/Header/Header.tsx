import React from "react";
import "./header.scss";
import { Container, Navbar } from "react-bootstrap";
import Sign from "../Sign/Sign";
import NavB from "../Navb/NavB";

export default function Header() {
  return (
    <Navbar sticky="top" bg="dark" variant="dark" className="mb-5">
      <Container className="-sm-md-lg-xl-xxl user-select-none">
        <Navbar.Brand href="#home" className="text-info">
          Blog
        </Navbar.Brand>

        <NavB />

        <Sign />
      </Container>
    </Navbar>
  );
}
