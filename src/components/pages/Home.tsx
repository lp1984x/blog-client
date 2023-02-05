import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import Posts from "../posts/Posts";
import axios from "axios";
import { IPost } from "../../models";

export default function Home() {
  const [posts, setPosts] = useState<IPost[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get<IPost[]>("/posts");
      setPosts(res.data);
    };
    fetchPosts();
  }, []);

  return (
    <Container className=" p-0 ">
      <Posts posts={posts} />
    </Container>
  );
}
