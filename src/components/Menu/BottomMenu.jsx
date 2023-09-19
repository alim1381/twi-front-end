import React from "react";
import { AiOutlineHome, AiOutlineMessage } from "react-icons/ai";
import { BiLogOut } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import { Link } from "react-router-dom";

function BottomMenu() {
  const listItems = [
    {
      text: "Home",
      path: "/posts",
      icon: <AiOutlineHome color="white" className="h-6 w-6 " />,
    },
    {
      text: "Messages",
      path: "/messages",
      icon: <AiOutlineMessage color="white" className="h-6 w-6 " />,
    },
    {
      text: "Profile",
      path: "/profile",
      icon: <CgProfile color="white" className="h-6 w-6 " />,
    },
    {
      text: "Logout",
      path: "/logout",
      icon: <BiLogOut color="white" className="h-6 w-6 " />,
    },
  ];
  return (
    <div className="fixed sm:hidden bottom-0 w-screen h-14 bg-black flex justify-around items-center border-t border-gray-600">
      {listItems.map((item, index) => (
        <Link key={index} to={item.path}>
          {item.icon}
        </Link>
      ))}
    </div>
  );
}

export default BottomMenu;
