import React from "react";
import { Button, Card } from "react-bootstrap";

export default function Post() {
  return (
    <Card style={{ width: "18em" }} className="mb-5 p-0">
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}
