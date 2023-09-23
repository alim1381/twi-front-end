import React from "react";
import Header from "../components/header/header";
import LeftMenu from "../components/Menu/LeftMenu";
import Footer from "../components/footer/Footer";
import { Outlet } from "react-router-dom";
import BottomMenu from "../components/Menu/BottomMenu";
import ScrollToTop from "../components/shared/ScrollToTop";
import SearchPage from "../pages/search/SearchPage";

function MainLayout() {
  return (
    <>
      <ScrollToTop />
      <BottomMenu />
      <div className=" flex max-w-7xl m-auto max-sm:px-2">
        {/*  left menu */}
        <div className="w-2/5 text-white pl-32 max-xl:pl-11 max-lg:pl-7 py-4 h-auto max-sm:hidden">
          <LeftMenu />
        </div>
        {/* main */}
        <div className=" w-3/5 border border-gray-600 h-auto  border-t-0 max-lg:mr-7 max-sm:w-full max-sm:m-0 ">
          <Header />
          <Outlet />
        </div>
        {/* right menu */}
        <div className="w-2/5 h-12 max-lg:hidden">
          <SearchPage />
          <Footer />
        </div>
      </div>
    </>
  );
}

export default MainLayout;
