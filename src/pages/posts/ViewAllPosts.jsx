import React from "react";
import CreatePost from "../../components/post/CreatePost";
import Post from "../../components/post/Post";

function ViewAllPosts() {
  return (
    <>
      <CreatePost />
      {/* Map to Posts */}
      <Post />
      <Post />
      <Post />
    </>
  );
}

export default ViewAllPosts;
