import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import Posts from "../posts/Posts";
import axios from "axios";
import { IPost } from "../../models";
import { useLocation } from "react-router-dom";

export default function Home() {
  const [posts, setPosts] = useState<IPost[]>([]);
  const { search } = useLocation();

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get<IPost[]>("/posts" + search);
      setPosts(res.data);
    };
    fetchPosts();
  }, [search]);

  return (
    <Container className=" p-0 ">
      <Posts posts={posts} />
    </Container>
  );
}
