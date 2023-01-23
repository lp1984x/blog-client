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
    <Container className="col-6 ">
      <Form>
        <Row>
          <Form.Group as={Col} className="mb-3">
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
            rows={12}
            placeholder="Tell your story..."
            style={{ resize: "none" }}
          />
        </Form.Group>
        <div className="row justify-content-center">
          <Button variant="success" type="submit">
            Publish
          </Button>
        </div>
      </Form>
    </Container>
  );
}
