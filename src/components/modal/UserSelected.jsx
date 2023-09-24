import React, { useEffect } from "react";
import UserAvatar from "../userIcon/UserAvatar";
import useApi from "../../hooks/useApi";

function UserSelected({ _id }) {
  const [userRes, userErr, userLoading, getUser] = useApi({
    method: "get",
    path: `/users/${_id}`,
  });
  useEffect(() => {
    getUser();
  }, []);
  if (userRes)
    return (
      <div class="flex flex-col items-center pt-6 pr-6 pb-6 pl-6">
        <div className=" w-16 h-16">
          <UserAvatar
            avatar={
              userRes.avatar
                ? `${import.meta.env.VITE_STATIC_FILES_URL}${userRes.avatar}`
                : null
            }
          />
        </div>
        <p class="m-2 font-bold leading-none text-white tracking-tighter">
          {userRes.name}
        </p>
        <p class="mt-8 leading-none text-gray-500 tracking-tighter">
          What text do you want to send?
        </p>
      </div>
    );
}

export default UserSelected;
