import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import useWebSocket from "react-use-websocket";

function Chat() {
  const location = useLocation();
  const url = `ws://localhost:3000/chat/${location.pathname.split("/")[1]}/${
    location.search.split("=")[1]
  }`;
  console.log(url);

  const [messages, setMessages] = useState([]);
  const [senderId, setSenderId] = useState("");
  const [receiverId, setReceiverId] = useState("");
  const [text, setText] = useState("");
  const { sendJsonMessage, lastJsonMessage, readyState } = useWebSocket(url);

  useEffect(() => {
    if (lastJsonMessage !== null) {
      setMessages((prev) => prev.concat(lastJsonMessage));
    }
  }, [lastJsonMessage]);
  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <input
        type="text"
        value={senderId}
        placeholder="sId"
        onChange={(e) => setSenderId(e.target.value)}
      />
      <input
        type="text"
        value={receiverId}
        placeholder="rId"
        onChange={(e) => setReceiverId(e.target.value)}
      />
      <button
        onClick={() =>
        }></button>
      {messages.length > 0 && messages.map((m) => <p>{m?.text}</p>)}
    </div>
  );
}

export default Chat;
