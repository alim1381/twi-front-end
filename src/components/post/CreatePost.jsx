import React from "react";

function CreatePost() {
  return (
    <>
      <div className="flex">
        <div className="m-2 w-10 py-1">
          <img
            className="inline-block h-10 w-10 rounded-full"
            src="https://pbs.twimg.com/profile_images/1121328878142853120/e-rpjoJi_bigger.png"
            alt=""
          />
        </div>
        <div className="flex-1 px-2 pt-2 mt-2">
          <textarea
            className=" bg-transparent text-gray-400 font-medium text-lg w-full"
            rows="2"
            cols="50"
            placeholder="What's happening?"></textarea>
        </div>
      </div>
      {/* <!--middle creat tweet below icons--> */}
      <div className="flex">
        <div className="w-10"></div>

        <div className="w-64 px-2">
          
        </div>

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
