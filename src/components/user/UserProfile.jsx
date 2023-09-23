import React, { useEffect, useState } from "react";
import { AiOutlineCalendar } from "react-icons/ai";
import useApi from "../../hooks/useApi";
import { useSelector } from "react-redux";
import UserAvatar from "../userIcon/UserAvatar";
import InternalLoader from "../loader/InternalLoader";
import { BsPatchCheckFill } from "react-icons/bs";
import { tagHandler } from "../../helper/tagHandler";
import { Link, useNavigate } from "react-router-dom";
import "../side/LoginSide.css";
import FAFButton from "../../pages/followersAndFollowing/components/FAFButton";

function UserProfile({ id }) {
  const { userData } = useSelector((state) => state.loginState);
  const [userDetails, setUserDetails] = useState();
  const [up, setUp] = useState(0);
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
  }, [id, up]);
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
        <div className="p-4">
          <div className="relative flex w-full">
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
            <div className="flex flex-1">
              <div>
                <div className="md h-36 w-36 rounded-full relative avatar">
                  <UserAvatar
                    avatar={
                      userDetails.avatar
                        ? `${import.meta.env.VITE_STATIC_FILES_URL}${
                            userDetails.avatar
                          }`
                        : null
                    }
                  />
                  <div className="absolute"></div>
                </div>
              </div>
            </div>
            {/* <!-- Follow Button --> */}
            <div className="flex flex-col-reverse z-30">
              {userData.id === id ? (
                <button className="justify-center  max-h-max whitespace-nowrap focus:outline-none  focus:ring max-w-max border bg-transparent border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white transition flex items-center hover:shadow-lg font-bold py-2 px-4 rounded-full mr-0 ml-auto">
                  Edit Profile
                </button>
              ) : (
                <FAFButton userId={id} setUp={setUp} pathname={"/null"} />
              )}
            </div>
          </div>

          {/* <!-- Profile info --> */}
          <div className="space-y-1 justify-center w-full mt-3 ml-3">
            {/* <!-- User basic--> */}
            <div>
              <h2 className="text-xl leading-6 font-bold text-white flex gap-1 items-center">
                {userDetails.name}{" "}
                {userDetails.blueTick && (
                  <BsPatchCheckFill className="w-4 h-4 text-blue-400" />
                )}
              </h2>
              <p className="text-sm leading-5 font-medium text-gray-600">
                @{userDetails.username}
              </p>
            </div>
            {/* <!-- Description and others --> */}
            <div className="mt-3">
              <p className="text-white leading-tight mb-2">
                {userDetails.bio && (
                  <div
                    dir={direction}
                    dangerouslySetInnerHTML={{
                      __html: tagHandler(userDetails.bio),
                    }}
                  />
                )}
              </p>
              <div className="text-gray-600 flex">
                <span className="flex mr-2 items-center">
                  <AiOutlineCalendar className="text-gray-400" />
                  <span className="leading-5 ml-1">
                    Joined {userDetails.createdAt.split("T")[0]}
                  </span>
                </span>
              </div>
              <div className=" text-gray-600 flex gap-1">
                <Link to={`/followers/${userDetails._id}`}>
                  <span className=" text-white font-bold">
                    {userDetails.followers.length}
                  </span>{" "}
                  Followers
                </Link>
                <Link to={`/following/${userDetails._id}`} className="ml-3">
                  <span className=" text-white font-bold">
                    {userDetails.following.length}
                  </span>{" "}
                  Following
                </Link>
              </div>
            </div>
          </div>
        </div>
        <hr className="border-gray-800" />
      </>
    );
}

export default UserProfile;
