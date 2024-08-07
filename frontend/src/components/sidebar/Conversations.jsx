import React from "react";
import Conversation from "./Conversation";
import useGetConversations from "../../hooks/useGetConversations";
import { Loader2 } from "lucide-react";
import { getRandomEmoji } from "../../utils/emoji";
const Conversations = () => {
  const { loading, conversations } = useGetConversations();
  console.log(conversations);
  return (
    <div className="py-2 flex flex-col overflow-auto">
      {conversations.map((item, idx) => (
        <Conversation
          key={item._id}
          conversation={item}
          emoji={getRandomEmoji()}
          lastIdx={idx === conversations.length - 1}
        />
      ))}

      {loading ? <Loader2 className="animate-spin w-6 h-6" /> : ""}
    </div>
  );
};

export default Conversations;
