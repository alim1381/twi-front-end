import React from "react";
import { AiOutlineUser } from "react-icons/ai";

function UserAvatar({ avatar }) {
  if (avatar)
    return (
      <div className="flex items-center justify-center overflow-hidden bg-gray-800 h-full w-full rounded-full">
        <img src={avatar} className="w-full h-full" alt="userAvatar" />
      </div>
    );
  return (
    <div className="flex items-center justify-center bg-gray-800 h-full w-full rounded-full">
      <AiOutlineUser color="white" className="h-1/2 w-1/2" />
    </div>
  );
}

export default UserAvatar;
