import React, { useEffect } from "react";
import { AiOutlineHome, AiOutlineMessage } from "react-icons/ai";
import { BiLogOut } from "react-icons/bi";
import { CgProfile, CgTwitter } from "react-icons/cg";
import { IoIosArrowBack } from "react-icons/io";
import { useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import UserAvatar from "../userIcon/UserAvatar";
import { toUpperCaseIndexOne } from "../../helper/toUpperCaseIndexOne";

function Header() {
  const { pathname } = useLocation();
  const { userData } = useSelector((state) => state.loginState);
  const navigate = useNavigate();
  useEffect(() => {
    document.title = `twi | ${toUpperCaseIndexOne(pathname.split("/")[1])}`;
  }, [pathname]);
  return (
    <div className="flex z-40 sticky top-0 border-b border-gray-600 backdrop-blur	">
      <div className="flex-1 m-2">
        <h2 className="px-4 py-2 text-xl font-semibold text-white">
          {pathname === "/posts" ? (
            "Home"
          ) : pathname === "/messages" ? (
            "Messages"
          ) : pathname === "/profile" ? (
            "Profile"
          ) : pathname === "/logout" ? (
            "Logout"
          ) : (
            <IoIosArrowBack
              onClick={() => navigate(-1)}
              className="w-6 h-6 cursor-pointer"
            />
          )}
        </h2>
      </div>
      <div className="flex-1 px-4 py-2 m-2">
        <div className=" max-sm:hidden text-2xl font-medium rounded-full text-white float-right">
          {pathname === "/posts" ? (
            <AiOutlineHome color="white" className=" h-6 w-6 " />
          ) : pathname === "/messages" ? (
            <AiOutlineMessage color="white" className=" h-6 w-6 " />
          ) : pathname === "/profile" ? (
            <CgProfile color="white" className=" h-6 w-6 " />
          ) : pathname === "/logout" ? (
            <BiLogOut color="white" className=" h-6 w-6 " />
          ) : (
            <CgTwitter />
          )}
        </div>
        <div className="sm:hidden float-right">
          <div className="w-9 h-9">
            <Link to={`/profile/${userData.id}`}>
              <UserAvatar
                avatar={
                  userData.avatar
                    ? `${
                        userData.avatar
                      }`
                    : null
                }
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
