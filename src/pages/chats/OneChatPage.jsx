import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import useApi from "../../hooks/useApi";
import { useSelector } from "react-redux";
import UserDetails from "../../components/chats/UserDetails";
import Chat from "./Chat";
import InternalLoader from "../../components/loader/InternalLoader";
import ChatInput from "./ChatInput";
import { getCookie } from "../../helper/getCookie";
import useWebSocket from "react-use-websocket";

function OneChatPage() {
  const { chatId } = useParams();
  const { userData } = useSelector((state) => state.loginState);
  const cookies = getCookie();

  const [messages, setMessages] = useState([]);
  const [allChats, setAllChats] = useState([]);
  const [profile, setProfile] = useState(null);
  const [up, setUp] = useState();

  const [text, setText] = useState("");
  const url = `ws://87.248.155.164:443/chat/${chatId}/${cookies.token}`;

  const { sendJsonMessage, lastJsonMessage, readyState } = useWebSocket(url);

  const [allChatsRes, allChatsErr, allChatsLoading, getAllChats] = useApi({
    method: "get",
    path: `/chats/page/${chatId}`,
  });

  useEffect(() => {
    if (lastJsonMessage !== null) {
      setMessages((prev) => prev.concat(lastJsonMessage));
    }
  }, [lastJsonMessage]);

  useEffect(() => {
    if (lastJsonMessage !== null) {
      const arry = allChats;
      arry.unshift(lastJsonMessage);
      setAllChats(arry);
      setText("");
    }
    setUp((prev) => prev + 1);
    scrollToBottom();
    setTimeout(() => {
      scrollToBottom();
    }, 500);
  }, [lastJsonMessage]);

  useEffect(() => {
    getAllChats();
  }, []);

  useEffect(() => {
    if (allChatsRes) {
      setAllChats(allChatsRes.messages);
      setProfile(
        userData.id === allChatsRes.profiles.firstUser._id
          ? allChatsRes.profiles.secondUser
          : allChatsRes.profiles.firstUser
      );
      scrollToBottom();
      setTimeout(() => {
        scrollToBottom();
      }, 300);
    }
  }, [allChatsRes]);

  const sendHandler = () => {
    scrollToBottom();
    if (text) {
      sendJsonMessage({
        text: text,
        senderId: userData.id,
        receiverId: profile._id,
        chatListId: location.pathname.split("/")[1],
      });
    }
  };
  const messagesEndRef = useRef(null);
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  if (allChatsLoading)
    return (
      <div className=" max-h-[100vh] flex items-center justify-center">
        <InternalLoader />
      </div>
    );
  return (
    <>
      <div className=" relative h-[80vh] overflow-y-scroll sc">
        {profile && <UserDetails user={profile} />}
        <div className=" w-full    flex flex-col-reverse  ">
          {allChats.length > 0 &&
            allChats.map((chat) => <Chat key={chat._id} {...chat} />)}
        </div>
        <div ref={messagesEndRef} />
      </div>
      <ChatInput sendHandler={sendHandler} text={text} setText={setText} />
    </>
  );
}

export default OneChatPage;
