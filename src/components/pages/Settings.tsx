import React, { useContext } from "react";
import { Card, Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Image from "react-bootstrap/Image";
import { MyContext } from "../../context/Context";
import userImg from "../User/user.png";

export default function Settings() {
  const { dispatch } = useContext(MyContext);
  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
  };

  return (
    <Container className="d-flex justify-content-center">
      <Card className="col-4">
        <Card.Header as="h1" className="text-center">
          Settings
        </Card.Header>
        <Card.Body>
          <Form.Group controlId="formFile" className="mb-3">
            <Image
              src={userImg}
              roundedCircle
              style={{ height: "3em", cursor: "pointer" }}
              className="mb-2 me-2"
            />
            <Form.Label>Сменить аватар</Form.Label>

            <Form.Control type="file" />
          </Form.Group>
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
            <div className="row justify-content-evenly">
              <Button variant="success" type="submit" className="col-3">
                Upload
              </Button>
              <Button
                variant="danger"
                type="submit"
                className="col-3"
                onClick={handleLogout}
              >
                Logout
              </Button>
            </div>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
}
