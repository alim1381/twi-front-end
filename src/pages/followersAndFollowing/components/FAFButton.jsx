import React, { useEffect, useState } from "react";
import FollowButton from "../../../components/button/FollowButton";
import FollowingButton from "../../../components/button/FollowingButton";
import { useSelector } from "react-redux";
import useApi from "../../../hooks/useApi";

function FAFButton({ userId, setUp, pathname }) {
  const { userData } = useSelector((state) => state.loginState);
  const [updatePage, setUpdatePage] = useState(0);
  const [
    loginUserFollowingLists,
    followingListError,
    followingListLoading,
    getLoginUserFollowingLists,
  ] = useApi({
    method: "get",
    path: `/users/following/${userData.id}`,
  });

  const [
    followResponse,
    followError,
    followLoading,
    getFollowLists,
    postFollow,
  ] = useApi({
    method: "post",
    path: `/users/follow`,
    header: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
  });
  const [
    unFollowResponse,
    unFollowError,
    unFollowLoading,
    getUnFollowLists,
    postUnFollow,
  ] = useApi({
    method: "post",
    path: `/users/unfollow`,
    header: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
  });

  const followHandler = () => {
    postFollow({ userId: userId });
  };
  const unFollowHandler = () => {
    postUnFollow({ userId: userId });
  };

  // get LoginUser Following Lists
  useEffect(() => {
    getLoginUserFollowingLists();
  }, [updatePage]);

  useEffect(() => {
    if (followResponse) {
      setUpdatePage((prev) => prev + 1);
      if (
        pathname.split("/")[1] !== "followers" &&
        pathname.split("/")[1] !== "following"
      ) {
        setUp((prev) => prev + 1);
      }
    }
  }, [followResponse]);

  useEffect(() => {
    if (unFollowResponse) {
      setUpdatePage((prev) => prev + 1);
      if (
        pathname.split("/")[1] !== "followers" &&
        pathname.split("/")[1] !== "following"
      ) {
        setUp((prev) => prev + 1);
      }
    }
  }, [unFollowResponse]);
  return (
    <>
      {userData.id === userId ? (
        ""
      ) : loginUserFollowingLists &&
        loginUserFollowingLists.find((user) => user._id === userId) ? (
        <FollowingButton onClick={unFollowHandler} />
      ) : (
        <FollowButton onClick={followHandler} />
      )}
    </>
  );
}

export default FAFButton;
