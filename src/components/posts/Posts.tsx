import React from "react";
import Post from "../post/Post";

export default function Posts() {
  return (
    <div className="col-10 d-flex flex-wrap ">
      <div className="row">
        <div className="col-md-auto">
          <h2 className="mb-4">Latest Posts</h2>
        </div>
      </div>
      <div className="row ">
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
      </div>
    </div>
  );
}
