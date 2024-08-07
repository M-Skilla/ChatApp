import React from "react";
import { useAuth } from "../../context/AuthContext";
import useConversation from "../../store/useConversation";
import { extractTime } from "../../utils/extractTime";

const Message = ({ message }) => {
  const { user } = useAuth();
  const { selectedConversation } = useConversation();
  const fromMe = message.senderId === user._id;
  const chatClassName = fromMe ? `chat-end` : "chat-start";
  const profilePic = fromMe ? user.profilePic : selectedConversation.profilePic;
  const bubbleColor = fromMe ? "bg-teal-900" : "";
  const formattedTime = extractTime(message.createdAt);
  // const time = Intl.RelativeTimeFormat("en-GB").format(
  //   new Date(message.createdAt)
  // );
  return (
    <div className={`chat ${chatClassName}`}>
      <div className="chat-image avatar">
        <div className="w-10 rounded-full">
          <img src={profilePic} alt="Tailwind css chat bubble component" />
        </div>
      </div>
      <div className={`chat-bubble text-white ${bubbleColor}`}>
        {message.message}
      </div>
      <div className="chat-footer opacity-50 text-xs flex gap-1 items-center">
        {formattedTime}
      </div>
    </div>
  );
};

export default Message;
