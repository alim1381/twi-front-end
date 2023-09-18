import React from "react";
import PostHeader from "./PostHeader";
import IconsSection from "./IconsSection";

function Post() {
  return (
    <>
      <PostHeader
        avatar={null}
        username={"@alim1381"}
        name={"Ali Moayedi"}
        createdAt={"16 April"}
      />
      <div className="pl-16">
        <p className="text-base width-auto font-medium text-white flex-shrink">
          hi <span className="text-blue-400">#twi</span>
        </p>

        <IconsSection />
      </div>
      <hr className="border-gray-600" />
    </>
  );
}

export default Post;
