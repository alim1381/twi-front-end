import React, { useEffect, useState } from "react";
import SearchUserItem from "../../../components/user/SearchUserItem";
import useApi from "../../../hooks/useApi";
import InternalLoader from "../../../components/loader/InternalLoader";

export function SearchUserList({ searchUsername }) {
  const [
    searchResponse,
    searchError,
    searchLoading,
    getSearchUser,
    post,
    clearSearchErrorsState,
    cancelSearchReq,
  ] = useApi({ method: "get", path: `/users?username=${searchUsername}` });
  const [up, setUp] = useState(0);
  console.log({ searchResponse, searchError, searchLoading });

  useEffect(() => {
    getSearchUser();
  }, [searchUsername, up]);

  return (
    <div className="w-full p-5">
      <div className="rounded-lg bg-neutral-900 overflow-hidden shadow-lg">
        <div className="flex">
          <div className="flex-1 m-2">
            <h2 className="px-4 py-2 text-xl w-48 font-semibold text-white">
              Which user ?
            </h2>
          </div>
        </div>

        <hr className="border-gray-600" />
        {searchLoading ? (
          <InternalLoader />
        ) : (
          searchResponse &&
          searchResponse.map((user) => (
            <SearchUserItem key={user._id} setUp={setUp} {...user} />
          ))
        )}

        {/* <!--show more--> */}

        <div className="flex">
          <div className="flex-1 p-4">
            <h2 className="px-4 ml-2 w-48 font-bold text-blue-400">
              Show more
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}
