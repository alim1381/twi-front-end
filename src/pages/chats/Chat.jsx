import React from "react";
import { useSelector } from "react-redux";
import UserAvatar from "../../components/userIcon/UserAvatar";

function Chat({ senderId, text, updatedAt }) {
  const { userData } = useSelector((state) => state.loginState);

  if (senderId._id !== userData.id)
    return (
      <div className=" text-white w-full p-2 flex gap-1">
        <div className=" w-1/12 h-full flex flex-col">
          <div className=" w-10 h-10">
            <UserAvatar
              avatar={
                senderId.avatar
                  ? `${senderId.avatar}`
                  : null
              }
            />
          </div>
        </div>
        <div className="w-10/12 h-full ml-2 max-sm:ml-4">
            <div className=" bg-neutral-800 rounded-lg w-4/5 p-3 flex flex-col">
              <p>{text}</p>
              <p className=" font-extralight text-neutral-500 text-right">{updatedAt.split("T")[0]}-{updatedAt.split("T")[1].substring(0,5)}</p>
            </div>
        </div>
      </div>
    );
  if (senderId._id === userData.id)
    return (
      <div dir="rtl" className=" text-white w-full p-2 flex gap-1">
        <div className=" w-1/12 h-full flex flex-col">
          <div className=" w-10 h-10">
            <UserAvatar
              avatar={
                senderId.avatar
                  ? `${senderId.avatar}`
                  : null
              }
            />
          </div>
        </div>
        <div className="w-10/12 h-full mr-2 max-sm:mr-4">
            <div className=" bg-blue-400 rounded-lg w-4/5 p-3 flex flex-col">
              <p>{text}</p>
              <p className=" font-extralight text-neutral-200 text-left">{updatedAt.split("T")[0]}-{updatedAt.split("T")[1].substring(0,5)}</p>
            </div>
        </div>
      </div>
    );
}

export default Chat;
