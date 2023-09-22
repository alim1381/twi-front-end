import React, { useEffect } from "react";
import useApi from "../../hooks/useApi";
import { Link } from "react-router-dom";
import { AiOutlineMessage } from "react-icons/ai";

function CommentIcon({ postId }) {
  const [commentsResponse, commentsError, commentsLoading, getComments] =
    useApi({
      method: "get",
      path: `/posts/comment/${postId}`,
    });

  useEffect(() => {
    getComments();
  }, []);

  if (commentsResponse)
    return (
      <div className="flex items-center">
        <Link
          to={`/comments/${postId}`}
          className="w-12 h-12 mt-1 group flex items-center text-gray-500 px-3 py-2 text-base leading-6 font-medium rounded-full hover:bg-neutral-800">
          <AiOutlineMessage className="text-center h-6 w-6" />
        </Link>
        <p className="text-gray-600">{commentsResponse.length}</p>
      </div>
    );
}

export default CommentIcon;
