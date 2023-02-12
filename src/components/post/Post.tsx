import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { IPost } from "../../models";
import "./post.scss";

interface PostP {
  post: IPost;
}

export default function Post({ post }: PostP) {
  const PF = "http://localhost:5000/images/";
  return (
    <Card style={{ width: "38em" }} className="my-2 p-0">
      {/* {post.photo && (
        <Card.Img
          variant="top"
          src={PF + post.photo}
          style={{ height: "30em", pointerEvents: "none" }}
        />
      )} */}
      <Card.Header>
        <Link to={`/post/${post._id}`} style={{ all: "unset" }}>
          <Card.Title style={{ userSelect: "none", cursor: "pointer" }}>
            {post.title}
          </Card.Title>
        </Link>

        <Card.Subtitle className="mb-2 text-muted d-flex justify-content-between">
          <small className="text-muted">
            Author:
            <Link
              to={`/?user=${post.username}`}
              style={{ all: "unset", cursor: "pointer" }}
            >
              {post.username}
            </Link>
          </small>
          <small className="text-muted">
            {new Date(post.updatedAt).toDateString()}
          </small>
        </Card.Subtitle>
      </Card.Header>
      <Card.Body>
        <Card.Text
          style={{
            userSelect: "none",
          }}
          className="txt"
        >
          {post.desc}
        </Card.Text>
      </Card.Body>
      <Card.Footer>
        {post.categories?.map((c, i) => (
          <small className="text-muted" key={i}>
            {c}
          </small>
        ))}
      </Card.Footer>
    </Card>
  );
}
