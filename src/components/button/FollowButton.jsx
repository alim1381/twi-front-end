import React from "react";

function FollowButton({onClick}) {
  return (
    <button onClick={onClick} className=" h-fit p-1 px-2 rounded-md font-bold text-gray-900 hover:bg-neutral-200 bg-white">
      follow
    </button>
  );
}

export default FollowButton;
