import React from "react";
import { Card, Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

export default function Reg() {
  return (
    <Container className="d-flex justify-content-center">
      <Card className="col-4">
        <Card.Header as="h1" className="text-center">
          Sign in
        </Card.Header>
        <Card.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>User name</Form.Label>
              <Form.Control type="text" placeholder="User name" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <div className="row justify-content-center">
              <Button variant="success" type="submit" className="col-3">
                Sign in
              </Button>
            </div>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
}
