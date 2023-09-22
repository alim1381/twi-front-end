import React from "react";
import Like from "./Like";
import CommentIcon from "./CommentIcon";

function IconsSection({ postId }) {
  return (
    <div className="flex">
      <div className="w-full">
        <div className="flex items-center">
          <Like postId={postId} />
          <CommentIcon postId={postId} />
        </div>
      </div>
    </div>
  );
}

export default IconsSection;
