import React, { useState } from "react";
import { createPortal } from "react-dom";
import SearchInput from "../input/SearchInput";
import { SearchUserForChat } from "./SearchUserForChat";
import UserSelected from "./UserSelected";
import CreateChatForm from "../chats/CreateChatForm";

function CreateChatModal({ isOpen, close }) {
  const [searchUsername, setSearchUsername] = useState("");
  const [user, setUser] = useState(null);
  return (
    <>
      {isOpen &&
        createPortal(
          <>
            <div class=" fixed w-full h-screen top-0 flex justify-center items-center bg-[rgba(23,23,23,0.5)]">
              <div class="bg-black drop-shadow-[0_0_2px_rgba(96,165,250,0.5)] rounded-lg p-3 m-4">
                {!user && (
                  <>
                    <SearchInput
                      searchUsername={searchUsername}
                      setSearchUsername={setSearchUsername}
                    />
                    <SearchUserForChat
                      setUser={setUser}
                      searchUsername={searchUsername}
                    />
                  </>
                )}
                <hr className="max-sm:h-14 border-none" />
                {user && <UserSelected _id={user} />}
                <CreateChatForm _id={user} close={close} />
              </div>
            </div>
          </>,
          document.getElementById("modal")
        )}
    </>
  );
}

export default CreateChatModal;
