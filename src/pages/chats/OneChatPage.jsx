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
  const box = useRef();

  const [messages, setMessages] = useState([]);
  const [allChats, setAllChats] = useState([]);
  const [profile, setProfile] = useState(null);
  const [up, setUp] = useState();

  const [text, setText] = useState("");
  const url = `ws://localhost:3000/chat/${chatId}/${cookies.token}`;

  const { sendJsonMessage, lastJsonMessage, readyState } = useWebSocket(url);

  const [allChatsRes, allChatsErr, allChatsLoading, getAllChats] = useApi({
    method: "get",
    path: `/chats/page/${chatId}`,
  });

  useEffect(() => {
    if (lastJsonMessage !== null) {
      setMessages((prev) => prev.concat(lastJsonMessage));
      box.current.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "start",
      });
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
      }
    }, [allChatsRes]);
    
    const sendHandler = () => {
      if (text) {
        sendJsonMessage({
          text: text,
          senderId: userData.id,
          receiverId: profile._id,
          chatListId: location.pathname.split("/")[1],
        });
      }
    };
    
    if (allChatsLoading)
    return (
  <div className=" max-h-[100vh] flex items-center justify-center">
        <InternalLoader />
      </div>
    );
  return (
    <div ref={box} className=" relative h-[90vh] overflow-y-scroll">
      {profile && <UserDetails user={profile} />}
      {allChats.length > 0 &&
        allChats.map((chat) => <Chat key={chat._id} {...chat} />)}
      <ChatInput sendHandler={sendHandler} text={text} setText={setText} />
    </div>
  );
}

export default OneChatPage;
