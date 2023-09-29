import React, { useEffect, useState } from "react";
import useApi from "../../hooks/useApi";
import { useNavigate } from "react-router-dom";

function CreateChatForm({ _id, close }) {
  const [text, setText] = useState("");
  const navigate = useNavigate();
  const [createRes, createErr, createLoading, create, postCreate] = useApi({
    method: "post",
    path: `/chats/create`,
    header: { "Content-Type": "application/x-www-form-urlencoded" },
  });

  const sendHandler = () => {
    postCreate({ text: text, receiverId: _id });
  };

  useEffect(() => {
    if (createRes) {
      navigate(`/messages/${createRes.chatListId}`);
    }
  }, [createRes]);
  return (
    <div>
      <textarea
        onChange={(e) => setText(e.target.value)}
        className={
          " p-2 rounded-md bg-transparent text-gray-300 border-[1px] border-gray-400 font-medium text-lg w-full focus:outline-none"
        }
        rows="2"
        cols="50"></textarea>
      <div className=" w-full text-white flex max-sm:flex-col">
        <button
          onClick={() => close(false)}
          className="m-1 w-full border border-gray-300 rounded-lg hover:bg-white hover:text-black">
          Back
        </button>
        <button
          onClick={sendHandler}
          disabled={text && _id ? false : true}
          className={
            text && _id
              ? "m-1 w-full border border-blue-400 rounded-lg hover:bg-blue-400"
              : "m-1 w-full border border-neutral-800 text-neutral-800 rounded-lg"
          }>
          Send
        </button>
      </div>
    </div>
  );
}

export default CreateChatForm;
