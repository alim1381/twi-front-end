import React, { useEffect, useState } from "react";
import CreatePost from "../../components/post/CreatePost";
import Post from "../../components/post/Post";
import useApi from "../../hooks/useApi";
import { useLocation } from "react-router-dom";
import InternalLoader from "../../components/loader/InternalLoader";

function ViewAllPosts() {
  const { pathname } = useLocation();
  const [postPage, setPostPage] = useState(1);
  const [lastPost, setLastPost] = useState(null);
  const [allPosts, setAllPosts] = useState([]);
  const [finishedFetch, setFinishedFetch] = useState(false);
  console.log(allPosts);

  const { response, error, loading, getReqApi } = useApi({
    path: `/posts?page=${postPage}`,
    method: "get",
  });

  const observerRef = new IntersectionObserver(([entry]) => {
    if (entry.isIntersecting) {
      setPostPage((prev) => prev + 1);
    }
  });

  useEffect(() => {
    if (!finishedFetch) {
      getReqApi();
    }
  }, [pathname, postPage]);

  useEffect(() => {
    if (response) {
      setAllPosts((prev) => [...prev, ...response]);
    }
    if (response !== null && response.length === 0 ) {
      setFinishedFetch(true);
    }
  }, [response]);

  useEffect(() => {
    if (lastPost) {
      observerRef.observe(lastPost);
    }
    return () => {
      if (lastPost) {
        observerRef.unobserve(lastPost);
      }
    };
  }, [lastPost]);

  return (
    <>
      <CreatePost />
      {allPosts.length > 0 &&
        allPosts?.map((post) => (
          <div key={post.id} ref={setLastPost}>
            <Post {...post} />
          </div>
        ))}
      {loading && <InternalLoader />}
    </>
  );
}

export default ViewAllPosts;
