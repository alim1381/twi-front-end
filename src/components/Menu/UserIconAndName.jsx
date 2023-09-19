import React from "react";
import UserAvatar from "../userIcon/UserAvatar";
import { useSelector } from "react-redux";

function UserIconAndName() {
  const {userData} = useSelector(state => state.loginState)
  console.log(userData);
  return (
    <div className="flex-shrink-0 flex hover:bg-blue-00 rounded-full p-4 mt-6 mr-2">
      <a href="#" className="flex-shrink-0 group block">
        <div className="flex items-center">
          <div className="w-10 h-10">
            <UserAvatar avatar={`${import.meta.env.VITE_STATIC_FILES_URL}${userData.avatar}`} />
          </div>
          <div className="ml-3">
            <p className="text-base leading-6 font-medium text-white">
              {userData.name}
            </p>
            <p className="text-sm leading-5 font-medium text-gray-400 group-hover:text-gray-300 transition ease-in-out duration-150">
              @{userData.username}
            </p>
          </div>
        </div>
      </a>
    </div>
  );
}

export default UserIconAndName;
