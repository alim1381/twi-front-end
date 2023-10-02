import React from "react";
import { useSelector } from "react-redux";
import UserAvatar from "../../components/userIcon/UserAvatar";

function SendingChat({text}) {
    const {userData} = useSelector(state => state.loginState)
  return (
    <div dir="rtl" className=" text-neutral-900 w-full p-2 flex gap-1">
      <div className=" w-1/12 h-full flex flex-col">
        <div className=" w-10 h-10">
          <UserAvatar
            avatar={
              userData.avatar
                ? `${import.meta.env.VITE_STATIC_FILES_URL}${userData.avatar}`
                : null
            }
          />
        </div>
      </div>
      <div className="w-10/12 h-full mr-2 max-sm:mr-4">
        <div className=" bg-gray-300 rounded-lg w-4/5 p-3 flex flex-col">
          <p>{text}</p>
          <p className=" font-thin text-neutral-600 text-left">
            ...sending
          </p>
        </div>
      </div>
    </div>
  );
}

export default SendingChat;
