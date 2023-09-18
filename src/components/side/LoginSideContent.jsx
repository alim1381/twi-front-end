import React from "react";
import "./LoginSide.css";

function LoginSideContent() {
  return (
    <div className="sm:w-1/2 xl:w-3/5 h-full hidden md:flex flex-auto items-center justify-center p-10 overflow-hidden relative text-white">
      <div className="w-full  max-w-md z-10">
        <div className="sm:text-4xl xl:text-5xl font-bold leading-tight mb-6">
          This is twi ...
        </div>
        <div className="sm:text-sm xl:text-md text-gray-200 font-normal">
          A platform for online chatting and sharing words
        </div>
        <p className="sm:text-sm xl:text-md text-gray-500 font-normal">
          Developed by{" "}
          <a href="https://github.com/alim1381" className="text-gray-400">
            Ali Moayedi
          </a>
        </p>
      </div>
      {/* <!---remove custom style--> */}
      <ul className="circles">
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
    </div>
  );
}

export default LoginSideContent;
