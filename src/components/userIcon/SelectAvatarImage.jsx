import React from "react";
import UserAvatar from "./UserAvatar";
import { BsFillTrashFill } from "react-icons/bs";
import { AiOutlineCamera } from "react-icons/ai";
import "./SelectUserAvatar.css";

function SelectAvatarImage({ avatarImage, setAvatarImage }) {
  return (
    <div className="w-full flex flex-col items-center">
      <div className="w-20 h-20 relative overflow-hidden rounded-full avatar-hover">
        <label htmlFor="avatar" className="w-20 h-20">
          <UserAvatar
            avatar={avatarImage ? URL.createObjectURL(avatarImage) : null}
          />
        </label>
        <div className=" camera-up bg-[#37415190] p-1 w-full h-5 flex items-center justify-center absolute bottom-0">
          <AiOutlineCamera color="white" />
        </div>
      </div>
      {avatarImage && (
        <button
          type="button"
          onClick={() => setAvatarImage(null)}
          className=" bg-neutral-800 text-white p-2 mt-3">
          <BsFillTrashFill />
        </button>
      )}
      <input
        type="file"
        accept="image/jpeg, image/png,"
        onChange={(e) => {
          setAvatarImage(e.target.files[e.target.files.length - 1]);
        }}
        className="hidden"
        id="avatar"
      />
    </div>
  );
}

export default SelectAvatarImage;
