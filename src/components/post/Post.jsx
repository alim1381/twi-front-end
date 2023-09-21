import React from "react";
import PostHeader from "./PostHeader";
import IconsSection from "./IconsSection";
import { tagHandler } from "../../helper/tagHandler";

function Post({ _id, likes, author, textBody, updatedAt, image }) {
  const direction = "ضصثقفغعهخحجچپگکمنتالبیسشظطزرذدئو".includes(textBody[0])
    ? "rtl"
    : "ltr";
  return (
    <>
      <PostHeader
        authorId={author._id}
        avatar={
          author.avatar
            ? `${import.meta.env.VITE_STATIC_FILES_URL}${author.avatar}`
            : null
        }
        blueTick={author.blueTick}
        username={`@${author.username}`}
        name={author.name}
        createdAt={updatedAt.split("T")[0]}
      />
      <div className={"pl-16 pr-7"}>
        <p className="text-base width-auto font-medium text-white flex-shrink">
          <div
            dir={direction}
            dangerouslySetInnerHTML={{ __html: tagHandler(textBody) }}
          />
        </p>
        {image && (
          <div className="w-full p-3">
            <div className=" rounded-md overflow-hidden w-full bg-neutral-900">
              <img
                className="w-full"
                src={`${import.meta.env.VITE_STATIC_FILES_URL}${image}`}
                alt="postImage"
              />
            </div>
          </div>
        )}
        <IconsSection postId={_id} />
      </div>
      <hr className="border-gray-600" />
    </>
  );
}

export default Post;
