import React from "react";
import PostHeader from "../post/PostHeader";
import { tagHandler } from "../../helper/tagHandler";

function CommentBox({ _id, authorId, text, updatedAt }) {
  console.log({ _id, authorId, text, updatedAt });
  const direction = "ضصثقفغعهخحجچپگکمنتالبیسشظطزرذدئو".includes(text[0])
    ? "rtl"
    : "ltr";

  return (
    <>
      <PostHeader
        authorId={authorId._id}
        avatar={
          authorId.avatar
            ? `${authorId.avatar}`
            : null
        }
        blueTick={authorId.blueTick}
        username={`@${authorId.username}`}
        name={authorId.name}
        createdAt={updatedAt.split("T")[0]}
      />
      <div className={"pl-16 pr-7 pb-4"}>
        <div className="text-base width-auto font-medium text-white bg-neutral-900 p-4 rounded-lg flex-shrink">
          <div
            dir={direction}
            dangerouslySetInnerHTML={{ __html: tagHandler(text) }}
          />
        </div>
      </div>
      <hr className="border-gray-600" />
    </>
  );
}

export default CommentBox;
