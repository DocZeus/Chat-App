import { useAuthContext } from "../../context/AuthContext"
import useConversation from "../../zustand/useConversation"

const Message = ({message}) => {
    const {authUser} = useAuthContext()
    const {selectedConversation} = useConversation()
    const me = message.senderId === authUser._id
    const chatClassName = me ? 'chat-end' : 'chat-start'
    const profilePic = me ? authUser.profilePic : selectedConversation?.profilePic
    const bubbleBg = me ? 'bg-red-500' : ''
    return (
        <div className={`chat ${chatClassName}`}>
            <div className='chat-image avatar'>
                <div className='w-10 rounded-full'>
                    <img src={profilePic} alt='ChatBubble' />
                </div>
            </div>
            <div className={`chat-bubble text-white bg-red-500 ${bubbleBg}`}>
                {message.message}
            </div>
            <div className="chat-footer opacity-50 text-xs flex gap-1 items-center">
                12:50
            </div>
        </div>
    )
}

export default Message