import React from "react";
import { Card, Container } from "react-bootstrap";

export default function About() {
  return (
    <Container className="d-flex justify-content-center">
      <Card className="col-8">
        <Card.Header as="h1" className="text-center">
          About
        </Card.Header>
        <Card.Body>
          <Card.Text className="text-center">
            This is a simple blog template made to demonstrate the skills of
            working with such front end development technologies as react,
            typescript and bootstrap
          </Card.Text>
        </Card.Body>
      </Card>
    </Container>
  );
}
