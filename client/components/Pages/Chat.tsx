import { useNavigate } from 'react-router-dom'
import ActiveUsers from '../UI/ActiveUsers'
import ChatBody from '../UI/ChatBody'
import MessageBar from '../UI/MessageBar'
import { useEffect, useState } from 'react'
import { socket } from './Home'
import { Message } from '../../../types/Message'

function Chat() {
  const navigate = useNavigate()
  function leaveChat() {
    localStorage.removeItem('username')
    navigate('/')
    window.location.reload()
  }

  const [messages, setMessages] = useState([] as Message[])

  useEffect(() => {
    socket.on('messageResponse', (data) => setMessages([...messages, data]))
  }, [socket, messages])

  return (
    <>
      <header className="absolute top-0 right-0">
        <button className="bg-teal-300 p-4 m-2" onClick={leaveChat}>
          Leave chat
        </button>
      </header>
      <div className="flex flex-grow">
        <ActiveUsers />
        <ChatBody messages={messages} />
      </div>
    </>
  )
}
export default Chat
