import React, { useEffect } from "react";
import useApi from "../../hooks/useApi";
import InternalLoader from "../../components/loader/InternalLoader";
import ChatRow from "../../components/chats/ChatRow";
import { useSelector } from "react-redux";
import CreateNewChat from "./CreateNewChat";

function AllChatsPage() {
  const { userData } = useSelector((state) => state.loginState);
  const [chatsResponse, chatsError, chatsLoading, getAllChats] = useApi({
    path: "/chats",
    method: "get",
  });
  useEffect(() => {
    getAllChats();
  }, []);
  return (
    <>
    <CreateNewChat />
      {chatsLoading ? (
        <InternalLoader />
      ) : (
        chatsResponse &&
        chatsResponse.map((chat) => (
          <ChatRow
            chatId={chat._id}
            user={
              chat.firstUser._id === userData.id
                ? chat.secondUser
                : chat.firstUser
            }
          />
        ))
      )}
      {
        chatsResponse && chatsResponse.length ===0 && <h3 className="text-white font-bold text-center mt-9">There is no chat</h3>
      }
    </>
  );
}

export default AllChatsPage;
