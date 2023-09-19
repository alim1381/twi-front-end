import React from "react";
import UserAvatar from "../userIcon/UserAvatar";

function PostHeader({username , name , avatar , createdAt}) {
  return (
    <div className="flex flex-shrink-0 p-4 pb-0">
      <a href="#" className="flex-shrink-0 group block">
        <div className="flex items-center">
          <div className="w-10 h-10">
            <UserAvatar avatar={avatar} />
          </div>
          <div className="ml-3">
            <p className="text-base leading-6 font-medium text-white">
              {name}
              <span className=" ml-1 text-sm leading-5 font-medium text-gray-400 group-hover:text-gray-300 transition ease-in-out duration-150">
                {username} . {createdAt}
              </span>
            </p>
          </div>
        </div>
      </a>
    </div>
  );
}

export default PostHeader;
