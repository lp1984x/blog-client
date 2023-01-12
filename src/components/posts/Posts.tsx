import React from "react";
import Post from "../post/Post";

export default function Posts() {
  return (
    <div className="col-10 d-flex row flex-wrap justify-content-between">
      <Post />
      <Post />
      <Post />
      <Post />
    </div>
  );
}
