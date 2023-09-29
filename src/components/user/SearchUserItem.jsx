import React from "react";
import UserAvatar from "../userIcon/UserAvatar";
import FAFButton from "../../pages/followersAndFollowing/components/FAFButton";
import { BsPatchCheckFill } from "react-icons/bs";
import { Link } from "react-router-dom";

function SearchUserItem({ username, name, avatar, _id, setUp , blueTick }) {
  return (
    <>
      <div className="flex justify-between items-center p-3">
        <Link to={`/profile/${_id}`} className="flex items-center justify-center">
          <div className="h-10 w-10">
            <UserAvatar
              avatar={
                avatar
                  ? `${import.meta.env.VITE_STATIC_FILES_URL}${avatar}`
                  : null
              }
            />
          </div>
          <div className="ml-3 mt-3">
            <p className="leading-6 font-medium text-white flex items-center gap-1">
              {name}{" "}
              {blueTick && (
                <BsPatchCheckFill className="w-4 h-4 text-blue-400" />
              )}
            </p>
            <p className="text-sm leading-5 font-medium text-gray-400 group-hover:text-gray-300 transition ease-in-out duration-150">
              @{username}
            </p>
          </div>
        </Link>
        <div className="">
          <FAFButton userId={_id} setUp={setUp} pathname={"/null"} />
        </div>
      </div>
    </>
  );
}

export default SearchUserItem;
