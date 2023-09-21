import React, { useEffect, useState } from "react";
import { AiFillHeart, AiOutlineHeart, AiOutlineMessage } from "react-icons/ai";
import useApi from "../../hooks/useApi";
import { useSelector } from "react-redux";
import InternalLoader from "../loader/InternalLoader";

function Like({ postId }) {
  const { userData } = useSelector((state) => state.loginState);
  const [updatePage, setUpdatePage] = useState(0);
  const [likersList, setLikersList] = useState(null);

  // like
  const [likeResponse, likeError, likeingLoading, get, likeing] = useApi({
    method: "post",
    path: `/posts/like`,
    header: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
  });

  // disLike
  const [
    disLikeResponse,
    disLikeError,
    disLikeLoading,
    disLikeGet,
    disLikeing,
  ] = useApi({
    method: "post",
    path: `/posts/dislike`,
    header: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
  });

  // get Like Status
  const [getResponse, getErr, getLoading, getLikes] = useApi({
    method: "get",
    path: `/posts/like/${postId}`,
  });

  const likeHandler = () => {
    likeing({ postId: postId });
  };
  const disLikeHandler = () => {
    disLikeing({ postId: postId });
  };

  useEffect(() => {
    getLikes();
  }, [updatePage]);

  useEffect(() => {
    if (getResponse) {
      setLikersList(getResponse);
    }
  }, [getResponse]);

  // like and dislike
  useEffect(() => {
    if (likeResponse) {
      setUpdatePage((prev) => prev + 1);
    }
  }, [likeResponse]);

  useEffect(() => {
    if (disLikeResponse) {
      setUpdatePage((prev) => prev + 1);
    }
  }, [disLikeResponse]);

  if (likeingLoading || disLikeLoading || getLoading) return <InternalLoader />;
  return (
    <div className=" text-center py-2 m-2 flex items-center">
      <div className="w-12 h-12 mt-1 group flex items-center text-gray-500 px-3 py-2 text-base leading-6 font-medium rounded-full hover:bg-neutral-800">
        {likersList && likersList.includes(userData.id) ? (
          <AiFillHeart
            onClick={disLikeHandler}
            className="fill-red-500 text-center h-6 w-6"
          />
        ) : (
          <AiOutlineHeart
            onClick={likeHandler}
            className="text-center h-6 w-6"
          />
        )}
      </div>
      <p className={" text-gray-600"}>{likersList && likersList.length}</p>
    </div>
  );
}

export default Like;
