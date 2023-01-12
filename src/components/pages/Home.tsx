import React from "react";
import { Container } from "react-bootstrap";
import Posts from "../posts/Posts";
import Sidebar from "../sidebar/Sidebar";

export default function Home() {
  return (
    <Container className=" d-flex justify-content-between ">
      <Posts />
      <Sidebar />
    </Container>
  );
}
