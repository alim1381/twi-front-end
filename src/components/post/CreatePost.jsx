import React from "react";
import UserAvatar from "../userIcon/UserAvatar";
import { useSelector } from "react-redux";

function CreatePost() {
  const { userData } = useSelector((state) => state.loginState);
  console.log(userData);
  return (
    <>
      <div className="flex">
        <div className="m-2 w-10 h-10 ">
          <UserAvatar avatar={userData.avatar ? `${import.meta.env.VITE_STATIC_FILES_URL}${userData.avatar}` : null} />
        </div>
        <div className="flex-1 px-2 pt-2 mt-2">
          <textarea
            className=" bg-transparent text-gray-300 font-medium text-lg w-full focus:outline-none"
            rows="2"
            cols="50"
            placeholder="What's happening?"></textarea>
        </div>
      </div>
      {/* <!--middle creat tweet below icons--> */}
      <div className="flex">
        <div className="w-10"></div>

        <div className="w-64 px-2"></div>

        <div className="flex-1">
          <button className="bg-blue-400 mt-5 mb-5 hover:bg-blue-600 text-white font-bold py-2 px-8 rounded-full mr-8 float-right">
            Post
          </button>
        </div>
      </div>

      <hr className="border-gray-600 mb-2" />
      <hr className="border-gray-600" />
    </>
  );
}

export default CreatePost;
