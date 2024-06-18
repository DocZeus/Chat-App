import { useEffect } from "react";
import { useSocketContext } from "../context/SocketContext";
import useConversation from "../zustand/useConversation";
import notificationSound from "../assets/sound/notification.mp3";

const useListenMessages = () => {
    const { socket } = useSocketContext();
    const { messages, setMessages, selectedConversation } = useConversation();

    useEffect(() => {
        socket?.on("newMessage", (newMessage) => {
            const check =
                newMessage.receiverId === selectedConversation._id ||
                newMessage.senderId === selectedConversation._id;
            if (check) {
                setMessages([...messages, newMessage]);
            }
            newMessage.shouldShake = true;
            const sound = new Audio(notificationSound);
            sound.play();
        });
        //not listening more than once
        return () => socket?.off("newMessage");
    }, [socket, setMessages, selectedConversation, messages]);
};

export default useListenMessages;