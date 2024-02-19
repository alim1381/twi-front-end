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
import SendingChat from "./SendingChat";

function OneChatPage() {
  const { chatId } = useParams();
  const { userData } = useSelector((state) => state.loginState);
  const cookies = getCookie();

  const [messages, setMessages] = useState([]);
  const [allChats, setAllChats] = useState([]);
  const [profile, setProfile] = useState(null);
  const [up, setUp] = useState();
  const [sendigMsg, setSendigMsg] = useState(null);

  const [text, setText] = useState("");
  const url = `wss://twi-front-end.vercel.app/chat/${chatId}/${cookies.token}`;
  // const url = `ws://localhost:443/chat/${chatId}/${cookies.token}`;

  const { sendJsonMessage, lastJsonMessage, readyState } = useWebSocket(url);

  const [allChatsRes, allChatsErr, allChatsLoading, getAllChats] = useApi({
    method: "get",
    path: `/chats/page/${chatId}`,
  });

  useEffect(() => {
    if (lastJsonMessage !== null) {
      if (
        lastJsonMessage.senderId._id === userData.id ||
        lastJsonMessage.senderId._id === profile._id
      ) {
        setSendigMsg(null);
        setMessages((prev) => prev.concat(lastJsonMessage));
      }
    }
  }, [lastJsonMessage]);

  useEffect(() => {
    if (lastJsonMessage !== null) {
      if (
        lastJsonMessage.senderId._id === userData.id ||
        lastJsonMessage.senderId._id === profile._id
      ) {
        setSendigMsg(null);
        const arry = allChats;
        arry.unshift(lastJsonMessage);
        setAllChats(arry);
        setText("");
      }
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
    setTimeout(() => {
      scrollToBottom();
    }, 300);
    if (text) {
      setSendigMsg(text);
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
        {profile && <UserDetails readyState={readyState} user={profile} />}
        <div className=" w-full    flex flex-col-reverse  ">
          {sendigMsg && <SendingChat text={sendigMsg} />}
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
