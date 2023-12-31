import React from "react";
import {
  AiOutlineHome,
  AiOutlineMessage,
  AiOutlineSearch,
} from "react-icons/ai";
import { BiLogOut } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import { Link, useLocation, useParams } from "react-router-dom";

function BottomMenu() {
  const { pathname } = useLocation();
  const params = useParams()
  const listItems = [
    {
      text: "Home",
      path: "/posts",
      icon: <AiOutlineHome className="h-6 w-6 " />,
    },
    {
      text: "Messages",
      path: "/messages",
      icon: <AiOutlineMessage className="h-6 w-6 " />,
    },
    {
      text: "Search",
      path: "/search",
      icon: <AiOutlineSearch className="h-6 w-6 " />,
    },
    {
      text: "Logout",
      path: "/logout",
      icon: <BiLogOut className="h-6 w-6 " />,
    },
  ];
  if (pathname === "/messages" && params.chatId) return null
  if (!params.chatId) {
    return (
      <div className="fixed z-30 sm:hidden bottom-0 w-screen h-14 bg-black flex justify-around items-center border-t border-gray-600">
        {listItems.map((item, index) => {
          return (
            <Link
              key={index}
              className={
                pathname === item.path ? "text-blue-400" : "text-white"
              }
              to={item.path}>
              {item.icon}
            </Link>
          );
        })}
      </div>
    );
  }
}

export default BottomMenu;
