import React from "react";
import Header from "../components/header/header";
import LeftMenu from "../components/Menu/LeftMenu";
import SearchUser from "../components/user/SearchUser";
import Footer from "../components/footer/Footer";
import { Outlet } from "react-router-dom";

function MainLayout({ children }) {
  return (
    <div className=" flex w-full max-sm:px-2">
      {/*  left menu */}
      <div class="w-2/5 text-white pl-32 max-xl:pl-11 max-lg:pl-7 py-4 h-auto max-sm:hidden">
        <LeftMenu />
      </div>
      {/* main */}
      <div class=" w-3/5 border border-gray-600 h-auto  border-t-0 max-lg:mr-7 max-sm:w-full max-sm:m-0 ">
        <Header />
        <Outlet/>
      </div>
      {/* right menu */}
      <div class="w-2/5 h-12 max-lg:hidden">
        <SearchUser />
        <Footer />
      </div>
    </div>
  );
}

export default MainLayout;
