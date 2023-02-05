import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";
import { IPost } from "../../models";

export default function SinglePost() {
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

  useEffect(() => {
    const getPost = async () => {
      const res = await axios.get("/posts/" + path);
      setPost(res.data);
    };
    getPost();
  }, [path]);

  return (
    <Card className="col-12">
      {post.photo && <Card.Img variant="top" src={post.photo} />}

      <Card.Header className="d-flex justify-content-between">
        <div>
          <Card.Title>{post.title}</Card.Title>

          <small className="text-muted">
            Author:{" "}
            <Link
              to={`/?user=${post.username}`}
              style={{ all: "unset", cursor: "pointer" }}
            >
              {post?.username}
            </Link>
          </small>
        </div>
        <div>
          <br />
          <FaEdit className="me-2" />
          <FaTrashAlt />
        </div>
      </Card.Header>
      <Card.Body>
        <Card.Text>{post.desc}</Card.Text>
      </Card.Body>
      <Card.Footer className="d-flex justify-content-between">
        <small className="text-muted">{post.categories}</small>

        <small className="text-muted">
          {new Date(post.updatedAt).toDateString()}
        </small>
      </Card.Footer>
    </Card>
  );
}
