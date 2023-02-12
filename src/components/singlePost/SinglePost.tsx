import React, { useContext, useEffect, useState } from "react";
import { Card, Form, Button } from "react-bootstrap";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";
import { IPost } from "../../models";
import { MyContext } from "../../context/Context";

export default function SinglePost() {
  const { user } = useContext(MyContext);
  const location = useLocation();
  const path = location.pathname.split("/")[2];
  const [post, setPost] = useState<IPost>({
    _id: "",
    title: "",
    desc: "",
    photo: "",
    username: "",
    categories: [],
    updatedAt: "",
  });
  const [title, setTitle] = useState();
  const [desc, setDesc] = useState();
  const [updateMode, setUpdateMode] = useState(false);

  //const PF = "http://localhost:5000/images/";

  useEffect(() => {
    const getPost = async () => {
      const res = await axios.get("/posts/" + path);
      setPost(res.data);
      setTitle(res.data.title);
      setDesc(res.data.desc);
    };
    getPost();
  }, [path]);

  const handleDelete = async () => {
    try {
      await axios.delete("/posts/" + path, {
        data: { username: user.username },
      });
      setUpdateMode(false);
    } catch (err) {}
  };

  const handleUpdate = async () => {
    try {
      await axios.put("/posts/" + path, {
        username: user.username,
        title,
        desc,
      });
      window.location.reload();
    } catch (err) {}
  };

  return (
    <Card className="col-12">
      {/* {post.photo && <Card.Img variant="top" src={PF + post.photo} />} */}

      <Card.Header className="d-flex justify-content-between">
        {updateMode ? (
          <Form.Control
            type="text"
            value={title}
            onChange={(e: any) => setTitle(e.target.value)}
          />
        ) : (
          <>
            <div>
              <Card.Title>{title}</Card.Title>

              <small className="text-muted">
                Author:{" "}
                <Link
                  to={`/?user=${post.username}`}
                  style={{ all: "unset", cursor: "pointer" }}
                >
                  {post.username}
                </Link>
              </small>
            </div>

            {post.username === user?.username && (
              <div>
                <br />
                <FaEdit
                  style={{ cursor: "pointer" }}
                  className="me-2"
                  onClick={() => setUpdateMode(true)}
                />
                <FaTrashAlt
                  style={{ cursor: "pointer" }}
                  onClick={handleDelete}
                />
              </div>
            )}
          </>
        )}
      </Card.Header>
      <Card.Body>
        {updateMode ? (
          <Form.Control
            as="textarea"
            rows={12}
            style={{ resize: "none" }}
            value={desc}
            onChange={(e: any) => setDesc(e.target.value)}
          />
        ) : (
          <Card.Text>{desc}</Card.Text>
        )}
      </Card.Body>
      <Card.Footer className="d-flex justify-content-between">
        <small className="text-muted">{post.categories}</small>
        {updateMode && (
          <Button variant="success" size="sm" onClick={handleUpdate}>
            Apply
          </Button>
        )}
        <small className="text-muted">
          {new Date(post.updatedAt).toDateString()}
        </small>
      </Card.Footer>
    </Card>
  );
}
