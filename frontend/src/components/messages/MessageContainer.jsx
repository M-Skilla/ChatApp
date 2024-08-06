import React from "react";
import Messages from "./Messages";
import MessageInput from "./MessageInput";
import { MessagesSquare } from "lucide-react";

const MessageContainer = () => {
  const noChatSelected = true;
  return (
    <div className="md:min-w-[450px] my-0 flex flex-col">
      {noChatSelected ? (
        <NoChatSelected />
      ) : (
        <>
          <div className="bg-slate-500 px-4 py-2 ">
            <span className="label-text">To:</span>{" "}
            <span className="text-gray-900 font-bold">John Doe</span>
          </div>
          <Messages />
          <MessageInput />
        </>
      )}
    </div>
  );
};

const NoChatSelected = () => {
  return (
    <div className="flex items-center justify-center w-full h-full">
      <div className="px-4 text-center sm:text-lg md:text-xl text-gray-200 font-semibold flex flex-col items-center gap-2">
        <p>Welcome 👏 John Doe 🌿</p>
        <p>Select Chat to start Messaging</p>
        <MessagesSquare
          size={80}
          className="text-3xl md:text-6xl text-center"
        />
      </div>
    </div>
  );
};

export default MessageContainer;
