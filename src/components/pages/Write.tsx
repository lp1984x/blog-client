import React from "react";
import {
  Container,
  Form,
  Button,
  FloatingLabel,
  Col,
  Row,
} from "react-bootstrap";

export default function Write() {
  return (
    <Container>
      <Form>
        <Row>
          <Form.Group as={Col} className="mb-3" controlId="formBasicEmail">
            <FloatingLabel
              controlId="floatingInput"
              label="Title"
              className="mb-3"
            >
              <Form.Control type="text" placeholder="Title" />
            </FloatingLabel>
          </Form.Group>

          <Form.Group as={Col} className="mb-3">
            <FloatingLabel
              controlId="floatingInput"
              label="Category"
              className="mb-3"
            >
              <Form.Select>
                <option>Life</option>
                <option>Music</option>
                <option>Sport</option>
                <option>Cinema</option>
                <option>Tech</option>
              </Form.Select>
            </FloatingLabel>
          </Form.Group>
        </Row>

        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label className="text-muted">Post</Form.Label>
          <Form.Control
            as="textarea"
            rows={10}
            placeholder="Tell your story..."
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Publish
        </Button>
      </Form>
    </Container>
  );
}
