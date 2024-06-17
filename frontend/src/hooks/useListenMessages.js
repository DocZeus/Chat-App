import { useEffect } from "react";
import { useSocketContext } from "../context/SocketContext";
import useConversation from "../zustand/useConversation";
import notificationSound from "../assets/sound/notification.mp3";

const useListenMessages = () => {
    const { socket } = useSocketContext();
    const { messages, setMessages, selectedConversation } = useConversation();

    useEffect(() => {
        socket?.on("newMessage", (newMessage) => {
            const check = newMessage.receiverId === selectedConversation.id;
            console.log(selectedConversation);
            newMessage.shouldShake = true;
            const sound = new Audio(notificationSound);
            sound.play();
            if (check) {
                setMessages([...messages, newMessage])
            }
        });
        //not listening more than once
        return () => socket?.off("newMessage");
    }, [socket, setMessages, messages, selectedConversation]);
};

export default useListenMessages;