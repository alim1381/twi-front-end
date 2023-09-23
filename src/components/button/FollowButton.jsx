import React from "react";

function FollowButton({ loading, onClick }) {
  return (
    <button
      disabled={loading}
      onClick={onClick}
      className={
        loading
          ? " h-fit p-1 px-2 rounded-md font-bold text-gray-900 bg-gray-400 hover:bg-gray-500"
          : " h-fit p-1 px-2 rounded-md font-bold text-gray-900 hover:bg-neutral-200 bg-white"
      }>
      {loading ? "follow..." : "follow"}
    </button>
  );
}

export default FollowButton;
