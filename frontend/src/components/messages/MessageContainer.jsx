import React from "react";
import Messages from "./Messages";
import MessageInput from "./MessageInput";
import { MessagesSquare } from "lucide-react";
import useConversation from "../../store/useConversation";
import { useAuth } from "../../context/AuthContext";

const MessageContainer = () => {
  const { selectedConversation, setSelectedConversation } = useConversation();

  React.useEffect(() => {
    return () => {
      setSelectedConversation(null);
    };
  }, [setSelectedConversation]);
  return (
    <div className="md:min-w-[450px] my-0 flex flex-col">
      {!selectedConversation ? (
        <NoChatSelected />
      ) : (
        <>
          <div className="bg-slate-500 px-4 py-2 ">
            <span className="label-text">To:</span>{" "}
            <span className="text-gray-900 font-bold">
              {selectedConversation.fullName}
            </span>
          </div>
          <Messages />
          <MessageInput />
        </>
      )}
    </div>
  );
};

const NoChatSelected = () => {
  const { user } = useAuth();
  return (
    <div className="flex items-center justify-center w-full h-full">
      <div className="px-4 text-center sm:text-lg md:text-xl text-gray-200 font-semibold flex flex-col items-center gap-2">
        <p>Welcome 👏 {user.fullName} 🌿</p>
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
