import useGetConversations from "../../hooks/useGetConversations";
import useConversation from "../../zustand/useConversation";
import Conversation from "./Conversation";

const Conversations = () => {
    const { loading, conversations } = useGetConversations();
    const { selectedConversation, setSelectedConversation } = useConversation(state => ({
        selectedConversation: state.selectedConversation,
        setSelectedConversation: state.setSelectedConversation,
    }));
    return (
        <div className="py-2 flex flex-col overflow-auto">
            {conversations.map((conversation, idx) => (
                <Conversation
                    key={conversation._id}
                    conversation={conversation}
                    lastIdx={idx === conversations.length - 1}
                    isSelected = {selectedConversation.id === conversation._id}
                    onClick = {() => setSelectedConversation(conversation)}
                />
            ))}
            {loading ? (
                <span className="loading loading-spinner mx-auto"></span>
            ) : null}
        </div>
    );
};

export default Conversations;