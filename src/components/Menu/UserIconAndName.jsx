import React from "react";
import UserAvatar from "../userIcon/UserAvatar";
import { useSelector } from "react-redux";
import { BsPatchCheckFill } from "react-icons/bs";
import { Link } from "react-router-dom";

function UserIconAndName() {
  const { userData } = useSelector((state) => state.loginState);
  return (
    <div className="flex-shrink-0 flex hover:bg-blue-00 rounded-full p-4 mt-6 mr-2">
      <Link to={`/profile/${userData.id}`} className="flex-shrink-0 group block">
        <div className="flex items-center">
          <div className="w-10 h-10">
            <UserAvatar
              avatar={
                userData.avatar
                  ? `${userData.avatar}`
                  : null
              }
            />
          </div>
          <div className="ml-3">
            <p className="text-base leading-6 font-medium text-white  flex items-center gap-1">
              {userData.name} {userData.blueTick && <BsPatchCheckFill className="w-4 h-4 text-blue-400" />}
            </p>
            <p className="text-sm leading-5 font-medium text-gray-400 group-hover:text-gray-300 transition ease-in-out duration-150">
              @{userData.username}
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default UserIconAndName;
