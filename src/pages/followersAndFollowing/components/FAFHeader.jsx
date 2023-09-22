import React from "react";
import { Link, useLocation } from "react-router-dom";

function FAFHeader() {
  const { pathname } = useLocation();
  console.log(pathname.split("/")[1]);
  return (
    <div className="border-b border-gray-600 text-white p-4 flex justify-around">
      <Link
        to={`/followers/${pathname.split("/")[2]}`}
        className={
          pathname.split("/")[1] === "followers"
            ? "p-2 border-b-4 border-blue-400 rounded hover:bg-neutral-900"
            : "p-2 rounded hover:bg-neutral-900"
        }>
        Followers
      </Link>
      <Link
        to={`/following/${pathname.split("/")[2]}`}
        className={
          pathname.split("/")[1] === "following"
            ? "p-2 border-b-4 border-blue-400 rounded hover:bg-neutral-900"
            : "p-2 rounded hover:bg-neutral-900"
        }>
        Following
      </Link>
    </div>
  );
}

export default FAFHeader;
