import React, { useEffect, useState } from "react";
import CreatePost from "../../components/post/CreatePost";
import Post from "../../components/post/Post";
import useApi from "../../hooks/useApi";
import { useLocation, useNavigate } from "react-router-dom";
import InternalLoader from "../../components/loader/InternalLoader";
import Error500 from "../../components/error/Error500";

function ViewAllPosts() {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const [postPage, setPostPage] = useState(1);
  const [lastPost, setLastPost] = useState(null);
  const [allPosts, setAllPosts] = useState([]);
  const [finishedFetch, setFinishedFetch] = useState(false);
  const [updatePage, setUpdatePage] = useState(0);

  const [response, error, loading, getReqApi] = useApi({
    path: `/posts?page=${postPage}`,
    method: "get",
  });

  const observerRef = new IntersectionObserver(([entry]) => {
    if (entry.isIntersecting) {
      setPostPage((prev) => prev + 1);
    }
  });

  console.log({ allPosts, finishedFetch, postPage, updatePage });
  useEffect(() => {
    setFinishedFetch(false);
    setPostPage(1);
    setAllPosts([]);
  }, [updatePage]);

  useEffect(() => {
    if (!finishedFetch) {
      getReqApi();
    }
  }, [pathname, postPage, updatePage]);

  useEffect(() => {
    if (response) {
      setAllPosts((prev) => [...prev, ...response]);
    }
    if (response !== null && response.length === 0 && allPosts.length > 0) {
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

  useEffect(() => {
    if (error) {
      navigate("/error");
    }
  }, [error]);

  return (
    <>
      <CreatePost setUpdatePage={setUpdatePage} />
      {error && <Error500 />}
      {allPosts.length > 0 &&
        allPosts?.map((post) => (
          <div key={post.id} ref={setLastPost}>
            <Post {...post} />
          </div>
        ))}
      {loading && <InternalLoader />}
      <hr className="max-sm:h-14 border-none" />
    </>
  );
}

export default ViewAllPosts;
