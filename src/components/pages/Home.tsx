import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import Posts from "../posts/Posts";
import axios from "axios";
import { IPost } from "../../models";
import { useLocation } from "react-router-dom";
import Pagi from "../Pagination/Pagination";

export default function Home() {
  const [posts, setPosts] = useState<IPost[]>([]);
  const { search } = useLocation();
  const [loading, setLoading] = useState(false);
  const [current, setCurrent] = useState(1);
  const [perPage] = useState(4);

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      const res = await axios.get<IPost[]>("/posts" + search);
      setPosts(res.data);
      setLoading(false);
    };
    fetchPosts();
  }, [search]);

  const lastIndex = current * perPage;
  const firstIndex = lastIndex - perPage;
  const currentPosts = posts.slice(firstIndex, lastIndex);
  const total = Math.ceil(posts.length / perPage);

  const onChangePage = (page: any) => setCurrent(page);

  return (
    <Container className=" p-0 ">
      <Posts posts={currentPosts} loading={loading} />
      {perPage < posts.length && (
        <Pagi
          total={total}
          perPage={perPage}
          current={current}
          onChangePage={onChangePage}
        />
      )}
    </Container>
  );
}
