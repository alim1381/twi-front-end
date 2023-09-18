import React from "react";
import { AiFillHeart, AiOutlineHeart, AiOutlineMessage } from "react-icons/ai";

function IconsSection() {
  return (
    <div className="flex">
      <div className="w-full">
        <div className="flex items-center">
          <div className=" text-center py-2 m-2">
            <div className="w-12 mt-1 group flex items-center text-gray-500 px-3 py-2 text-base leading-6 font-medium rounded-full hover:bg-neutral-800">
              <AiFillHeart className="fill-red-500 text-center h-6 w-6" />
              {/* <AiOutlineHeart className="text-center h-6 w-6" /> */}
            </div>
          </div>
          <div className="text-center">
            <div className="w-12 mt-1 group flex items-center text-gray-500 px-3 py-2 text-base leading-6 font-medium rounded-full hover:bg-neutral-800">
              <AiOutlineMessage className="text-center h-6 w-6" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default IconsSection;
