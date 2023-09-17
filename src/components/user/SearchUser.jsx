import React from "react";
import SearchUserItem from "./SearchUserItem";

function SearchUser() {
  return (
    <>
      <div class="relative text-gray-300 max-w-sm p-5 pb-0 mr-16 max-xl:mr-8">
        <button type="submit" class="absolute ml-4 mt-3 mr-4">
          <svg
            class="h-4 w-4 fill-current"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            version="1.1"
            id="Capa_1"
            x="0px"
            y="0px"
            viewBox="0 0 56.966 56.966"
            // style="enable-background:new 0 0 56.966 56.966;"
            xml:space="preserve"
            width="512px"
            height="512px">
            <path d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z" />
          </svg>
        </button>

        <input
          type="search"
          name="search"
          placeholder="Search Twitter"
          class="bg-neutral-900 h-10 px-10 pr-5 w-full rounded-full text-sm focus:outline-none bg-purple-white shadow border-0"
        />
      </div>

      {/* <!--third-people suggetion to follow section--> */}

      <div class="max-w-sm rounded-lg bg-neutral-900 overflow-hidden shadow-lg m-4 mr-20 max-xl:mr-8">
        <div class="flex">
          <div class="flex-1 m-2">
            <h2 class="px-4 py-2 text-xl w-48 font-semibold text-white">
              Which user ?
            </h2>
          </div>
        </div>

        <hr class="border-gray-600" />
        <SearchUserItem />
        <SearchUserItem />
        <SearchUserItem />

        {/* <!--show more--> */}

        <div class="flex">
          <div class="flex-1 p-4">
            <h2 class="px-4 ml-2 w-48 font-bold text-blue-400">Show more</h2>
          </div>
        </div>
      </div>
    </>
  );
}

export default SearchUser;
