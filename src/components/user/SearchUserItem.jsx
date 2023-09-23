import React from "react";
import UserAvatar from "../userIcon/UserAvatar";
import FAFButton from "../../pages/followersAndFollowing/components/FAFButton";

function SearchUserItem({ username, name, avatar, _id , setUp }) {
  return (
    <>
      <div className="flex justify-between items-center p-3">
        <div className="flex items-center justify-center">
          <div className="h-10 w-10">
            <UserAvatar
              avatar={
                avatar
                  ? `${import.meta.env.VITE_STATIC_FILES_URL}${avatar}`
                  : null
              }
            />
          </div>
          <div className="ml-3 mt-3">
            <p className="leading-6 font-medium text-white">{name}</p>
            <p className="text-sm leading-5 font-medium text-gray-400 group-hover:text-gray-300 transition ease-in-out duration-150">
              @{username}
            </p>
          </div>
        </div>
        <div className="">
        <FAFButton userId={_id} setUp={setUp} pathname={"/null"} />
        </div>
      </div>
    </>
  );
}

export default SearchUserItem;
