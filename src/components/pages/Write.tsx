import axios from "axios";
import React, { useContext, useState } from "react";
import {
  Container,
  Form,
  Button,
  FloatingLabel,
  Col,
  Row,
} from "react-bootstrap";
import { MyContext } from "../../context/Context";
import { IPost } from "../../models";

export default function Write() {
  const [title, setTitle] = useState<string>("");
  const [desc, setDesc] = useState<string>("");
  const [file, setFile] = useState<any | null>(null);
  const { user } = useContext(MyContext);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    let newPost: IPost = {
      username: user.username,
      title,
      desc,
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
      const res = await axios.post<IPost>("/posts", newPost);
      window.location.replace("/post/" + res.data._id);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Container className="col-6 ">
      <Form onSubmit={handleSubmit}>
        <Row>
          <Form.Group as={Col} className="mb-2">
            <FloatingLabel
              controlId="floatingInput"
              label="Title"
              className="mb-2"
            >
              <Form.Control
                type="text"
                placeholder="Title"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setTitle(e.target.value)
                }
              />
            </FloatingLabel>
          </Form.Group>

          <Form.Group as={Col} className="mb-2">
            <FloatingLabel
              controlId="floatingInput"
              label="Category"
              className="mb-2"
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
        {/*  <Row>
          <Form.Group controlId="formFileSm" className="mb-3">
            <Form.Label>Upload main photo file</Form.Label>
            <Form.Control
              type="file"
              size="sm"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setFile(e.target.files)
              }
            />
          </Form.Group>
        </Row> */}
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label className="text-muted">Post</Form.Label>
          <Form.Control
            as="textarea"
            rows={12}
            placeholder="Tell your story..."
            style={{ resize: "none" }}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setDesc(e.target.value)
            }
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
