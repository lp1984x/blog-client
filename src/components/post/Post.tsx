import React from "react";
import { Button, Card } from "react-bootstrap";
import mg from "./post.jpg";
import { Link } from "react-router-dom";

export default function Post() {
  return (
    <Card style={{ width: "20em" }} className="my-2 mx-2 p-0">
      <Card.Img
        variant="top"
        src={mg}
        style={{ height: "20em", pointerEvents: "none" }}
      />
      <Card.Body>
        <Card.Title style={{ userSelect: "none" }}>Card Title</Card.Title>
        <Card.Text style={{ userSelect: "none" }}>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">
          <Link to="/single" style={{ all: "unset" }}>
            Read post
          </Link>
        </Button>
      </Card.Body>
    </Card>
  );
}
