import React from "react";
import { Container, Navbar } from "react-bootstrap";

export default function Fotter() {
  return (
    <Navbar bg="dark" style={{ height: 50 }} className="mt-5">
      <Container className="d-flex justify-content-center text-light">
        <div style={{ fontSize: "10px" }}>
          Copyright &#169; 2023 All Rights Reserved | This template is made with
          &#9829;
        </div>
      </Container>
    </Navbar>
  );
}
