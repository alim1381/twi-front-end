import React from "react";
import { FiSearch } from "react-icons/fi";

function SearchInput({ searchUsername, setSearchUsername }) {
  return (
    <div className="relative text-gray-300 w-full p-5">
      <button type="submit" className="absolute ml-4 mt-3 mr-4">
        <FiSearch />
      </button>

      <input
        type="search"
        name="search"
        value={searchUsername}
        onChange={(e) => setSearchUsername(e.target.value)}
        placeholder="Search twi"
        className="bg-neutral-900 h-10 px-10 pr-5 w-full rounded-full text-sm focus:outline-none bg-purple-white shadow border-0"
      />
    </div>
  );
}

export default SearchInput;
