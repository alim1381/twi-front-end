import React from "react";
import { AiFillHeart, AiOutlineHeart, AiOutlineMessage } from "react-icons/ai";
import Like from "./Like";

function IconsSection({ postId }) {
  return (
    <div className="flex">
      <div className="w-full">
        <div className="flex items-center">
          <Like postId={postId} />
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
