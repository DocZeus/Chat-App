import { useEffect } from "react";
import { useSocketContext } from "../context/SocketContext";
import useConversation from "../zustand/useConversation";
import notificationSound from "../assets/sound/notification.mp3";

const useListenMessages = () => {
    const { socket } = useSocketContext();
    const { setMessages, selectedConversation } = useConversation(state => ({
        setMessages: state.setMessages,
        selectedConversation: state.selectedConversation,
    }));

    useEffect(() => {
        const handleNewMessage = (newMessage) => {
            if (newMessage.receiverId === selectedConversation?._id) {
                setMessages((prevMessages) => [...prevMessages, newMessage]);
                newMessage.shouldShake = true;
                const sound = new Audio(notificationSound);
                sound.play();
            }
        };

        socket?.on("newMessage", handleNewMessage);

        // Cleanup function to remove the listener
        return () => {
            socket?.off("newMessage", handleNewMessage);
        };
    }, [socket, setMessages, selectedConversation]);

    return null;
};

export default useListenMessages;