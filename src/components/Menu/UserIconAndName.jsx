import React from "react";
import UserAvatar from "../userIcon/UserAvatar";

function UserIconAndName() {
  return (
    <div className="flex-shrink-0 flex hover:bg-blue-00 rounded-full p-4 mt-6 mr-2">
      <a href="#" className="flex-shrink-0 group block">
        <div className="flex items-center">
          <div className="w-10 h-10">
            <UserAvatar avatar={null} />
          </div>
          <div className="ml-3">
            <p className="text-base leading-6 font-medium text-white">
              Ali Moayedi
            </p>
            <p className="text-sm leading-5 font-medium text-gray-400 group-hover:text-gray-300 transition ease-in-out duration-150">
              @alim1381
            </p>
          </div>
        </div>
      </a>
    </div>
  );
}

export default UserIconAndName;
