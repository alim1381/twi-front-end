import React, { useState } from "react";

function FollowingButton({ onClick }) {
  const [text, setText] = useState("Following");
  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setText("UnFollow")}
      onMouseLeave={() => setText("Following")}
      className=" h-fit p-1 px-2 rounded-md font-bold border-white text-white hover:bg-red-500">
      {text}
    </button>
  );
}

export default FollowingButton;
