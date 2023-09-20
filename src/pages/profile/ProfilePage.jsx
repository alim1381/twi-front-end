import React, { useEffect, useState } from "react";
import UserProfile from "../../components/user/UserProfile";
import useApi from "../../hooks/useApi";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import Loader from "../../components/loader/Loader";
import InternalLoader from "../../components/loader/InternalLoader";
import Post from "../../components/post/Post";

function ProfilePage() {
  const { id } = useParams();
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const [postPage, setPostPage] = useState(1);
  const [lastPost, setLastPost] = useState(null);
  const [allPosts, setAllPosts] = useState([]);
  const [finishedFetch, setFinishedFetch] = useState(false);
  const [updatePage, setUpdatePage] = useState(0);

  const [response, error, loading, getReqApi] = useApi({
    path: `/posts/${id}?page=${postPage}`,
    method: "get",
  });

  const observerRef = new IntersectionObserver(([entry]) => {
    if (entry.isIntersecting) {
      setPostPage((prev) => prev + 1);
    }
  });

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
      <UserProfile id={id} />
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

export default ProfilePage;
