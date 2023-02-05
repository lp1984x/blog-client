import React from "react";
import { Button, Card } from "react-bootstrap";
import mg from "./post.jpg";
import { Link } from "react-router-dom";
import { IPost } from "../../models";
import "./post.scss";

interface PostP {
  post: IPost;
}

export default function Post({ post }: PostP) {
  return (
    <Card style={{ width: "38em" }} className="my-2 p-0">
      {post.photo && (
        <Card.Img
          variant="top"
          src={post.photo}
          style={{ height: "30em", pointerEvents: "none" }}
        />
      )}
      <Card.Body>
        <Link to={`/post/${post._id}`} style={{ all: "unset" }}>
          <Card.Title style={{ userSelect: "none", cursor: "pointer" }}>
            {post.title}
          </Card.Title>
        </Link>

        <Card.Subtitle className="mb-2 text-muted">
          {post.username}&nbsp;{new Date(post.updatedAt).toDateString()}
        </Card.Subtitle>
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
        {post.categories?.map((i) => (
          <Button variant="Light">{i}</Button>
        ))}
      </Card.Footer>
    </Card>
  );
}
