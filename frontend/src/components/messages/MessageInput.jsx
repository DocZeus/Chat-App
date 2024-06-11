const MessageInput = () => {
    return (
        <form className='px-4 my-3'>
            <div className='w-full'>
                <input type='text'
                    className='border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 text-white'
                    placeholder='Send a message'
                />
            </div>
        </form>
    )
}

export default MessageInput