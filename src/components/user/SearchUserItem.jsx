import React from "react";

function SearchUserItem() {
  return (
    <>
      <div className="flex flex-shrink-0">
        <div className="flex-1 ">
          <div className="flex items-center w-48">
            <div>
              <img
                className="inline-block h-10 w-auto rounded-full ml-4 mt-2"
                src="https://pbs.twimg.com/profile_images/1121328878142853120/e-rpjoJi_bigger.png"
                alt=""
              />
            </div>
            <div className="ml-3 mt-3">
              <p className="text-base leading-6 font-medium text-white">
                Sonali Hirave
              </p>
              <p className="text-sm leading-5 font-medium text-gray-400 group-hover:text-gray-300 transition ease-in-out duration-150">
                @ShonaDesign
              </p>
            </div>
          </div>
        </div>
        <div className="flex-1 px-4 py-2 m-2">
          <a href="" className=" float-right">
            <button className="bg-transparent hover:bg-blue-500 text-white font-semibold hover:text-white py-2 px-4 border border-white hover:border-transparent rounded-full">
              View
            </button>
          </a>
        </div>
      </div>
      <hr className="border-gray-600" />
    </>
  );
}

export default SearchUserItem;
