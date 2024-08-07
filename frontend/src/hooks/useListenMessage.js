import React, { useEffect } from "react";
import { useSocket } from "../context/SocketContext";
import useConversation from "../store/useConversation";
import notifySound from "../assets/sounds/notification.mp3";

const useListenMessage = () => {
  const { socket } = useSocket();
  const { messages, setMessages } = useConversation();

  useEffect(() => {
    socket?.on("newMessage", (newMessage) => {
      const sound = new Audio(notifySound);
      sound.play();
      setMessages([...messages, newMessage]);
    });

    return () => socket?.off("newMessage");
  }, [socket, setMessages, messages]);
};

export default useListenMessage;
