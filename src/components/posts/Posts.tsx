import React from "react";
import Post from "../post/Post";
import { IPost } from "../../models";
import { Spinner } from "react-bootstrap";

interface PostsProps {
  posts: IPost[];
  load: boolean;
}

export default function Posts({ posts, load }: PostsProps) {
  return (
    <div className="d-flex flex-column align-items-center">
      <div className="row">
        <div className="col-md-auto ">
          <h2 className="mb-4 align">Recent Posts</h2>
        </div>
      </div>
      <div className="col-12 d-flex flex-wrap  row justify-content-between">
        {load && (
          <Spinner
            animation="border"
            role="status"
            className="position-absolute top-50 start-50 translate-middle"
          >
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        )}
        {posts.map((p, i) => (
          <Post post={p} key={i} />
        ))}
      </div>
    </div>
  );
}
