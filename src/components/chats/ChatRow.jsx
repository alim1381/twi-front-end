import React, { useEffect } from "react";
import UserAvatar from "../userIcon/UserAvatar";
import { BsPatchCheckFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import useApi from "../../hooks/useApi";

function ChatRow({ user, chatId }) {
  const [lastMessageRes, lastMessageErr, lastMessageLoading, getLastMessage , postLastMessage] =
    useApi({
      path: `/chats/lastmessage`,
      method: "post",
      header: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    });
  useEffect(() => {
    postLastMessage({chatId : chatId});
  }, []);
  return (
    <div className="flex flex-shrink-0 p-4 pb-0 hover:bg-neutral-900">
      <Link
        to={`/messages/${chatId}`}
        className="w-full group block">
        <div className="flex items-center">
          <div className="w-10 h-10">
            <UserAvatar
              avatar={
                user.avatar
                  ? `${import.meta.env.VITE_STATIC_FILES_URL}${user.avatar}`
                  : null
              }
            />
          </div>
          <div className="ml-3 w-full">
            <p className="text-base leading-6 font-medium text-white flex max-lg:flex-col lg:items-center gap-1">
              <span className="flex items-center gap-1">
                {user.name}{" "}
                {user.blueTick && (
                  <BsPatchCheckFill className="w-4 h-4 text-blue-400" />
                )}
              </span>
              <span className=" lg:ml-1 text-sm leading-5 font-medium text-gray-400 group-hover:text-gray-300 transition ease-in-out duration-150">
                {user.username} 
              </span>
            </p>
            <p dir="ltr" className="w-full flex justify-between text-base leading-6 font-medium text-gray-600 max-lg:flex-col lg:items-center gap-1">
              {lastMessageRes ? lastMessageRes.lastMassage : "..."} <span>{lastMessageRes && lastMessageRes.createdAt.split("T")[0]}</span>
            </p>
          </div>
        </div>
      <hr className="border-gray-600 mt-1" />
      </Link>
    </div>
  );
}

export default ChatRow;
