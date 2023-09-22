import React, { useEffect, useState } from "react";
import Post from "../../components/post/Post";
import useApi from "../../hooks/useApi";
import { useParams, useSearchParams } from "react-router-dom";
import InternalLoader from "../../components/loader/InternalLoader";
import CommentBox from "../../components/comment/CommentBox";
import CreateComment from "../../components/comment/CreateComment";

function PostComment() {
  const { postId } = useParams();
  const [updatePage, setUpdatePage] = useState(0);
  const [postResponse, postError, postLoading, getPost] = useApi({
    method: "get",
    path: `/posts/single/${postId}`,
  });
  const [commentsResponse, commentsError, commentsLoading, getComments] =
    useApi({
      method: "get",
      path: `/posts/comment/${postId}`,
    });

  useEffect(() => {
    getPost();
    getComments();
  }, [updatePage]);

  if (postLoading) return <InternalLoader />;
  if (postResponse)
    return (
      <>
        <Post {...postResponse} />
        <CreateComment postId={postId} setUpdatePage={setUpdatePage} />
        {commentsLoading && <InternalLoader />}
        {commentsResponse &&
          commentsResponse.map((comment) => <CommentBox {...comment} />)}
        <hr className="max-sm:h-14 border-none" />
      </>
    );
}

export default PostComment;
