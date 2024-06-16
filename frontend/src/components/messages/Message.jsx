import { useAuthContext } from "../../context/AuthContext";
import useConversation from "../../zustand/useConversation";
import { extractTime } from "../../utils/extractTime";

const Message = ({ message }) => {
    const { authUser } = useAuthContext();
    const { selectedConversation } = useConversation();
    const me = message.senderId === authUser._id;
    const formattedTime = extractTime(message.createdAt);
    const chatClassName = me ? "chat-end" : "chat-start";
    const profilePic = me
        ? authUser.profilePic
        : selectedConversation?.profilePic;
    const bubbleBg = me ? "bg-red-500" : "";
    const shakeClass = message.shouldShake ? "shake" : ""
    return (
        <div className={`chat ${chatClassName}`}>
            <div className="chat-image avatar">
                <div className="w-10 rounded-full">
                    <img src={profilePic} alt="ChatBubble" />
                </div>
            </div>
            <div className={`chat-bubble text-white ${bubbleBg} ${shakeClass}`}>
                {message.message}
            </div>
            <div className="chat-footer opacity-50 text-xs flex gap-1 items-center">
                {formattedTime}
            </div>
        </div>
    );
};

export default Message;