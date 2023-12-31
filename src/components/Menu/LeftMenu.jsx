import React from "react";
import { AiOutlineHome, AiOutlineMessage, AiOutlineSearch } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { BiLogOut } from "react-icons/bi";
import { Link, useLocation } from "react-router-dom";
import UserIconAndName from "./UserIconAndName";
import { useSelector } from "react-redux";
function LeftMenu() {
  const { pathname } = useLocation();
  const {userData} = useSelector(state => state.loginState)
  const listItems = [
    {
      text: "Home",
      path: "/posts",
      icon: <AiOutlineHome color="white" className="mr-4 h-6 w-6 " />,
    },
    {
      text: "Messages",
      path: "/messages",
      icon: <AiOutlineMessage color="white" className="mr-4 h-6 w-6 " />,
    },
    {
      text: "Profile",
      path: `/profile/${userData.id}`,
      icon: <CgProfile color="white" className="mr-4 h-6 w-6 " />,
    },
    {
      text: "Logout",
      path: "/logout",
      icon: <BiLogOut color="white" className="mr-4 h-6 w-6 " />,
    },
  ];
  return (
    <>
      <div className="flex items-center">
        <h1 className=" text-2xl w-fit text-white font-extrabold">twi</h1>
        <a href="https://github.com/alim1381" className="ml-2 text-gray-600">
          dev Ali Moayedi
        </a>
      </div>
      <nav className="mt-5 px-2">
      <Link
            to={'/search'}
            className={
              pathname === "/search"
                ? "lg:hidden mt-1 group flex items-center px-2 py-2 text-base leading-6 font-semibold rounded-full bg-blue-400 text-white"
                : "lg:hidden mt-1 group flex items-center px-2 py-2 text-base leading-6 font-medium rounded-full hover:bg-neutral-900"
            }>
            <AiOutlineSearch color="white" className="mr-4 h-6 w-6 " />
            Search
          </Link>
        {listItems.map((item, index) => (
          <Link
            key={index}
            to={item.path}
            className={
              pathname === item.path
                ? "mt-1 group flex items-center px-2 py-2 text-base leading-6 font-semibold rounded-full bg-blue-400 text-white"
                : "mt-1 group flex items-center px-2 py-2 text-base leading-6 font-medium rounded-full hover:bg-neutral-900"
            }>
            {item.icon}
            {item.text}
          </Link>
        ))}
      </nav>
      <UserIconAndName />
    </>
  );
}

export default LeftMenu;
