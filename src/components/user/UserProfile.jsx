import React, { useEffect, useState } from "react";
import { AiOutlineCalendar } from "react-icons/ai";
import useApi from "../../hooks/useApi";
import { useSelector } from "react-redux";
import UserAvatar from "../userIcon/UserAvatar";
import Loader from "../loader/Loader";
import InternalLoader from "../loader/InternalLoader";
import { BsPatchCheckFill } from "react-icons/bs";
import { tagHandler } from "../../helper/tagHandler";
import { useNavigate } from "react-router-dom";
import "../side/LoginSide.css";

function UserProfile({ id }) {
  const { userData } = useSelector((state) => state.loginState);
  const [userDetails, setUserDetails] = useState();
  const navigate = useNavigate();
  const direction = userDetails
    ? "ضصثقفغعهخحجچپگکمنتالبیسشظطزرذدئو".includes(userDetails.bio)
      ? "rtl"
      : "ltr"
    : "ltr";

  const [response, error, loading, getReqApi] = useApi({
    method: "get",
    path: `/users/${id}`,
  });
  useEffect(() => {
    getReqApi();
  }, [id]);
  useEffect(() => {
    if (response) {
      setUserDetails(response);
    }
  }, [response]);

  useEffect(() => {
    if (error) {
      navigate("/error");
    }
  }, [error]);

  if (loading) return <InternalLoader />;

  if (userDetails)
    return (
      <>
        <div class="p-4">
          <div class="relative flex w-full">
            {/* background Animation */}
            <ul className="circles-profile blur">
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
            </ul>
            {/* <!-- Avatar --> */}
            <div class="flex flex-1">
              <div>
                <div class="md h-36 w-36 rounded-full relative avatar">
                  <UserAvatar
                    avatar={
                      userDetails.avatar
                        ? `${import.meta.env.VITE_STATIC_FILES_URL}${
                            userDetails.avatar
                          }`
                        : null
                    }
                  />
                  <div class="absolute"></div>
                </div>
              </div>
            </div>
            {/* <!-- Follow Button --> */}
            {userData.id === id && (
              <div class="flex flex-col-reverse z-30">
                <button class="justify-center  max-h-max whitespace-nowrap focus:outline-none  focus:ring max-w-max border bg-transparent border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white transition flex items-center hover:shadow-lg font-bold py-2 px-4 rounded-full mr-0 ml-auto">
                  Edit Profile
                </button>
              </div>
            )}
          </div>

          {/* <!-- Profile info --> */}
          <div class="space-y-1 justify-center w-full mt-3 ml-3">
            {/* <!-- User basic--> */}
            <div>
              <h2 class="text-xl leading-6 font-bold text-white flex gap-1 items-center">
                {userDetails.name}{" "}
                {userDetails.blueTick && (
                  <BsPatchCheckFill className="w-4 h-4 text-blue-400" />
                )}
              </h2>
              <p class="text-sm leading-5 font-medium text-gray-600">
                @{userDetails.username}
              </p>
            </div>
            {/* <!-- Description and others --> */}
            <div class="mt-3">
              <p class="text-white leading-tight mb-2">
                {userDetails.bio && (
                  <div
                    dir={direction}
                    dangerouslySetInnerHTML={{
                      __html: tagHandler(userDetails.bio),
                    }}
                  />
                )}
              </p>
              <div class="text-gray-600 flex">
                <span class="flex mr-2 items-center">
                  <AiOutlineCalendar className="text-gray-400" />
                  <span class="leading-5 ml-1">
                    Joined {userDetails.createdAt.split("T")[0]}
                  </span>
                </span>
              </div>
            </div>
          </div>
        </div>
        <hr class="border-gray-800" />
      </>
    );
}

export default UserProfile;
