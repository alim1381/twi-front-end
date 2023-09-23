import React, { useState } from "react";
import SearchInput from "../../components/input/SearchInput";
import { SearchUserList } from "./components/SearchUserList";

function SearchPage() {
  const [searchUsername, setSearchUsername] = useState("");
  return (
    <>
      <SearchInput
        searchUsername={searchUsername}
        setSearchUsername={setSearchUsername}
      />
      <SearchUserList searchUsername={searchUsername} />
      <hr className="max-sm:h-14 border-none" />
    </>
  );
}

export default SearchPage;
