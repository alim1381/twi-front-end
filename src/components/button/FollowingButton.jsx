import React, { useState } from "react";

function FollowingButton({ loading, onClick }) {
  const [text, setText] = useState("Following");
  return (
    <button
      onClick={onClick}
      disabled={loading}
      onMouseEnter={() => setText("UnFollow")}
      onMouseLeave={() => setText("Following")}
      className={
        loading
          ? " h-fit p-1 px-2 rounded-md font-bold bg-gray-400 text-white hover:bg-gray-500"
          : " h-fit p-1 px-2 rounded-md font-bold border-white text-white hover:bg-red-500"
      }>
      {loading ? "prosses..." : text}
    </button>
  );
}

export default FollowingButton;
