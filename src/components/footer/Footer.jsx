import React from "react";

function Footer() {
  return (
    <>
      <div class="flow-root m-6 ">
        <div class="flex-1">
          <a href="#">
            <p class="text-sm leading-6 font-medium text-gray-500">
              Front and Backend Developer Ali Moayedi
            </p>
          </a>
        </div>
        <div class="flex-1">
          <a href="https://tailwindcomponents.com/component/twitter-home">
            <p class="text-sm leading-6 font-medium text-gray-800">
              The styles are refactored from here
            </p>
          </a>
        </div>
        <div class="flex-2">
          <p class="text-sm leading-6 font-medium text-gray-600">
            {" "}
            © 2023 twi, Inc.
          </p>
        </div>
      </div>
    </>
  );
}

export default Footer;
