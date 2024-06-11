import MessageInput from "./MessageInput"
import Messages from "./Messages"

const MessageContainer = () => {
    return (
        <div className="md:min-w-[450px] flex flex-col">
            <>
                <div className="bg-zinc-900 px-4 py-2 mb-2">
                    <span className="label-text">To:</span> <span className="text-gray-300 font-bold">John</span>
                </div>
                <Messages />
                <MessageInput />
            </>
        </div>
    )
}

export default MessageContainer