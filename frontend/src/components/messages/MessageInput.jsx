import React, { useState } from "react";
import { Loader2, Send } from "lucide-react";
import useSendMessage from "../../hooks/useSendMessage";

const MessageInput = () => {
  const [message, setMessage] = useState("");
  const { loading, sendMessage } = useSendMessage();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!message) return;
    await sendMessage(message);
    setMessage("");
  };

  return (
    <form onSubmit={handleSubmit} className="px-4 my-3">
      <div className="w-full relative">
        <input
          type="text"
          placeholder="Send a Message"
          className="border text-sm rounded-lg block w-full p-2 bg-gray-700 border-gray-600 text-white"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button
          type="submit"
          className="absolute inset-y-0 end-0 flex items-center pe-3 hover:text-white"
        >
          {loading ? <Loader2 className="animate-spin w-6 h-6" /> : <Send />}
        </button>
      </div>
    </form>
  );
};

export default MessageInput;
