import React from "react";
import UserAvatar from "../userIcon/UserAvatar";
import { BsPatchCheckFill } from "react-icons/bs";
import { Link } from "react-router-dom";

function PostHeader({authorId,username , name , avatar , createdAt , blueTick}) {
  return (
    <div className="flex flex-shrink-0 p-4 pb-0">
      <Link to={`/profile/${authorId}`} className="flex-shrink-0 group block">
        <div className="flex items-center">
          <div className="w-10 h-10">
            <UserAvatar avatar={avatar ? avatar : null} />
          </div>
          <div className="ml-3">
            <p className="text-base leading-6 font-medium text-white flex items-center gap-1">
              {name} {blueTick && <BsPatchCheckFill className="w-4 h-4 text-blue-400" />}
              <span className=" ml-1 text-sm leading-5 font-medium text-gray-400 group-hover:text-gray-300 transition ease-in-out duration-150">
                {username} . {createdAt}
              </span>
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default PostHeader;
