import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import useApi from "../../hooks/useApi";
import InternalLoader from "../../components/loader/InternalLoader";
import FAFHeader from "./components/FAFHeader";
import UserRow from "../../components/user/UserRow";

function FollowersAndFollowing() {
  const { pathname } = useLocation();
  const [datas, setDatas] = useState(null);
  const [updatePage, setUpdatePage] = useState(0);
  const [response, error, loading, getReq] = useApi({
    method: "get",
    path: `/users${pathname}`,
  });

  useEffect(() => {
    getReq();
  }, [pathname, updatePage]);

  useEffect(() => {
    if (response) {
      setDatas(response);
    }
  }, [response]);

  return (
    <>
      <FAFHeader />
      {loading && <InternalLoader />}
      {response &&
        response.map((user) => (
          <UserRow
          key={user._id}
            pathname={pathname}
            setUp={setUpdatePage}
            userId={user._id}
            avatar={
              user.avatar
                ? `${import.meta.env.VITE_STATIC_FILES_URL}${user.avatar}`
                : null
            }
            blueTick={user.blueTick}
            username={`@${user.username}`}
            name={user.name}
          />
        ))}
    </>
  );
}

export default FollowersAndFollowing;
