import React from "react";
import { Card } from "react-bootstrap";
import { FaEdit, FaTrashAlt } from "react-icons/fa";

export default function SinglePost() {
  return (
    <Card className="col-12">
      <Card.Header className="d-flex justify-content-between">
        <div>
          <Card.Title>Special title treatment</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">Life</Card.Subtitle>
        </div>
        <div>
          <br />
          <FaEdit className="me-2" />
          <FaTrashAlt />
        </div>
      </Card.Header>
      <Card.Body>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.Some quick example text to build on the
          card title and make up the bulk of the card's content.Some quick
          example text to build on the card title and make up the bulk of the
          card's content.Some quick example text to build on the card title and
          make up the bulk of the card's content.Some quick example text to
          build on the card title and make up the bulk of the card's
          content.Some quick example text to build on the card title and make up
          the bulk of the card's content.Some quick example text to build on the
          card title and make up the bulk of the card's content.Some quick
          example text to build on the card title and make up the bulk of the
          card's content.Some quick example text to build on the card title and
          make up the bulk of the card's content.Some quick example text to
          build on the card title and make up the bulk of the card's
          content.Some quick example text to build on the card title and make up
          the bulk of the card's content.Some quick example text to build on the
          card title and make up the bulk of the card's content.Some quick
          example text to build on the card title and make up the bulk of the
          card's content.Some quick example text to build on the card title and
          make up the bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
  );
}
