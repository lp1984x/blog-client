import React from "react";
import { ListGroup, Card } from "react-bootstrap";
import "./sidebar.scss";

export default function Sidebar() {
  return (
    <div className="col-2">
      <Card className="-sm-md-lg-xl-xxl stk">
        <Card.Body>
          <Card.Title className="text-center">Categories</Card.Title>
          <ListGroup variant="flush">
            <ListGroup.Item>Life</ListGroup.Item>
            <ListGroup.Item>Music</ListGroup.Item>
            <ListGroup.Item>Sport</ListGroup.Item>
            <ListGroup.Item>Cinema</ListGroup.Item>
            <ListGroup.Item>Tech</ListGroup.Item>
          </ListGroup>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}
