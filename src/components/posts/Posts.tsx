import React from "react";
import Post from "../post/Post";
import { IPost } from "../../models";

interface PostsProps {
  posts: IPost[];
}

export default function Posts({ posts }: PostsProps) {
  return (
    <div className="d-flex flex-column align-items-center">
      <div className="row">
        <div className="col-md-auto ">
          <h2 className="mb-4 align">Recent Posts</h2>
        </div>
      </div>
      <div className="col-12 d-flex flex-wrap  row justify-content-between">
        {posts.map((p, i) => (
          <Post post={p} key={i} />
        ))}
      </div>
    </div>
  );
}
