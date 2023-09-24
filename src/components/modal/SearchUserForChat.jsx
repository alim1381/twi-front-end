import React, { useEffect, useState } from "react";
import useApi from "../../hooks/useApi";
import InternalLoader from "../loader/InternalLoader";
import SearchAdd from "../chats/SearchAdd";

export function SearchUserForChat({ searchUsername , setUser }) {
  const [up, setUp] = useState(0);
  const [showMore, setShowMore] = useState(false);
  
  const [
    searchResponse,
    searchError,
    searchLoading,
    getSearchUser,
    post,
    clearSearchErrorsState,
    cancelSearchReq,
  ] = useApi({
    method: "get",
    path: searchUsername
      ? `/users?username=${searchUsername}`
      : showMore
      ? `/users`
      : `/users?showmore=false`,
  });

  useEffect(() => {
    getSearchUser();
  }, [searchUsername, up, showMore]);

  useEffect(() => {
    if (searchUsername.length === 0 && showMore) {
      setShowMore(false);
    }
    if (searchUsername.length > 0 && !showMore) {
      setShowMore(true);
    }
  }, [searchUsername]);
  return (
    <div className="w-full p-5">
      <div className="rounded-lg bg-neutral-900 h-20 overflow-hidden shadow-lg">
        {searchLoading ? (
          <InternalLoader />
        ) : (
          searchResponse &&
          searchResponse.map((user) => (
            <SearchAdd
              key={user._id}
              setUp={setUp}
              {...user}
              setUser={setUser}
            />
          ))
        )}
      </div>
    </div>
  );
}
