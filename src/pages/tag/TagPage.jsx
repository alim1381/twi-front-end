import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import useApi from "../../hooks/useApi";
import Post from "../../components/post/Post";

function TagPage() {
  const { tag } = useParams();

  const [postsRes, postsErr, postsLoading, getPosts] = useApi({
    method: "get",
    path: `/posts/tag/${tag}`,
  });

  useEffect(() => {
    getPosts();
  }, []);

  if (postsRes)
    return (
      <>
      <h2 className=" text-white font-bold text-center p-2">Tag <span className=" text-blue-400">{`#${tag}`}</span></h2>
        {postsRes.map((post) => (
          <Post key={post._id} {...post} />
        ))}
      </>
    );
}

export default TagPage;
