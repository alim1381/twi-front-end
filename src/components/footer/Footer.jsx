import React from "react";

function Footer() {
  return (
    <>
      <div className="flow-root m-6 ">
        <div className="flex-1">
            <p className="text-sm leading-6 font-medium text-gray-500">
              Front and Backend Developer Ali Moayedi
            </p>
        </div>
        <div className="flex-1">
          <a href="https://tailwindcomponents.com/component/twitter-home">
            <p className="text-sm leading-6 font-medium text-gray-800">
              The styles are refactored from here
            </p>
          </a>
        </div>
        <div className="flex-2">
          <p className="text-sm leading-6 font-medium text-gray-600">
            {" "}
            © 2023 twi, Inc.
          </p>
        </div>
      </div>
    </>
  );
}

export default Footer;
