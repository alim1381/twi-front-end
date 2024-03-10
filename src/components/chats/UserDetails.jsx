import React from "react";
import UserAvatar from "../userIcon/UserAvatar";
import { BsPatchCheckFill } from "react-icons/bs";
import { Link } from "react-router-dom";

function UserDetails({ readyState, user }) {
  return (
    <div className="flex-shrink-0 flex backdrop-blur p-4 sticky top-0">
      <Link to={`/profile/${user._id}`} className="flex-shrink-0 group block">
        <div className="flex items-center">
          <div className="w-10 h-10">
            <UserAvatar
              avatar={
                user.avatar
                  ? `${user.avatar}`
                  : null
              }
            />
          </div>
          <div className="ml-3">
            <p
              className={
                readyState > 0
                  ? "text-base leading-6 font-medium text-white  flex items-center gap-1"
                  : "text-base leading-6 font-medium text-gray-400  flex items-center gap-1"
              }>
              {user.name}{" "}
              {user.blueTick && (
                <BsPatchCheckFill className="w-4 h-4 text-blue-400" />
              )}
            </p>
            <p className="text-sm leading-5 font-medium text-gray-400 group-hover:text-gray-300 transition ease-in-out duration-150">
              @{user.username}
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default UserDetails;
