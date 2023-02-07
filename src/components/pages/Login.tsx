import axios from "axios";
import React, { useContext, useRef } from "react";
import { Card, Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { MyContext } from "../../context/Context";

export default function Login() {
  const userRef: any = useRef();
  const passwordRef: any = useRef();
  const { dispatch, isFetching } = useContext(MyContext);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    try {
      const res = await axios.post("auth/login", {
        username: userRef.current.value,
        password: passwordRef.current.value,
      });
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
    } catch (err) {
      dispatch({ type: "LOGIN_FAILURE" });
    }
  };
  return (
    <Container className="d-flex justify-content-center">
      <Card className="col-4">
        <Card.Header as="h1" className="text-center">
          Login
        </Card.Header>
        <Card.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>User name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter user name..."
                ref={userRef}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                ref={passwordRef}
              />
            </Form.Group>
            <div className="row justify-content-center">
              <Button
                variant="success"
                type="submit"
                className="col-2"
                disabled={isFetching}
              >
                Login
              </Button>
            </div>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
}
