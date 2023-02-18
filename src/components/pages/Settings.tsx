import axios from "axios";
import React, { useContext, useState } from "react";
import { Card, Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Image from "react-bootstrap/Image";
import { MyContext } from "../../context/Context";

export default function Settings() {
  const { dispatch } = useContext(MyContext);
  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
  };
  const [username, setUsername] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const { user } = useContext(MyContext);
  const [suc, setSuc] = useState(false);
  //const [file, setFile] = useState<any | null>(null);

  const handleUpdate = async (e: any) => {
    e.preventDefault();
    const updatedUser = {
      userId: user._id,
      username,
      email,
      password,
    };
    /*  if (file) {
      
      const filename = Date.now().toString() + file;
      data.append("name", filename);
      data.append("file", file);
      newPost.photo = filename;
    const data = new FormData();
    try {
      await axios.post("/upload", data);
    } catch (err) {} */

    try {
      await axios.put(`/users/${user._id}`, updatedUser);
      setSuc(true);
    } catch (err) {}
  };

  return (
    <Container className="d-flex justify-content-center">
      <Card className="col-4">
        <Card.Header as="h1" className="text-center">
          Settings
        </Card.Header>
        <Card.Body>
          <Form onSubmit={handleUpdate}>
            <Form.Group controlId="formFile" className="mb-3">
              <Image
                src={user.profilePic}
                roundedCircle
                style={{ width: "3em", cursor: "pointer" }}
                className="mb-2 me-2"
              />
              <Form.Label>Сменить аватар</Form.Label>

              <Form.Control type="file" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>User name</Form.Label>
              <Form.Control
                type="text"
                placeholder={user.username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder={user.email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>
            <div className="row justify-content-evenly">
              <Button variant="success" type="submit" className="col-3">
                Update
              </Button>
              <Button variant="danger" className="col-3" onClick={handleLogout}>
                Logout
              </Button>
            </div>
            {suc && (
              <Form.Control
                className="fs-6 text-center text-success "
                plaintext
                readOnly
                defaultValue="update success"
              />
            )}
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
}
