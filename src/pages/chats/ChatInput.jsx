import React from "react";

function ChatInput({text , setText , sendHandler}) {
  return (
    <form onSubmit={(e) => e.preventDefault()} className=' sticky w-full bottom-0 bg-black flex items-center justify-between p-2 px-3'>
      <input onChange={(e) => setText(e.target.value)} value={text} type="text" className=' w-full text-white text-base px-4 py-2 border border-white bg-black focus:outline-none rounded-2xl focus:border-blue-400' />
      <button
        type="submit"
        disabled={text ? false : true}
        onClick={sendHandler}
        className={
          text ? "bg-blue-400 hover:bg-blue-500 text-white font-bold py-2 px-6 rounded-full float-right" : "bg-gray-400 hover:bg-gray-500 text-white font-bold py-2 px-6 rounded-full float-right"
        }>Send</button>
    </form>
  );
}

export default ChatInput;
