import React from "react";
import { Container } from "react-bootstrap";

import SinglePost from "../singlePost/SinglePost";

export default function Single() {
  return (
    <Container className=" d-flex justify-content-between ">
      <SinglePost />
    </Container>
  );
}
