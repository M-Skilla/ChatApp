import React from "react";
import { Send } from "lucide-react";
const MessageInput = () => {
  return (
    <form action="" className="px-4 my-3">
      <div className="w-full relative">
        <input
          type="text"
          placeholder="Send a Message"
          className="border text-sm rounded-lg block w-full p-2 bg-gray-700 border-gray-600 text-white"
        />
        <button
          type="submit"
          className="absolute inset-y-0 end-0 flex items-center pe-3 hover:text-white"
        >
          <Send />
        </button>
      </div>
    </form>
  );
};

export default MessageInput;