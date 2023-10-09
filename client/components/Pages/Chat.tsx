import { useNavigate } from 'react-router-dom'
import ActiveUsers from '../UI/ActiveUsers'
import ChatBody from '../UI/ChatBody'
import { useEffect, useRef, useState } from 'react'
import { socket } from './Home'
import { Message } from '../../../types/Message'
import { User } from '../../../types/User'

function Chat() {
  const navigate = useNavigate()
  function leaveChat() {
    localStorage.removeItem('username')
    navigate('/')
    window.location.reload()
  }

  const [messages, setMessages] = useState([] as Message[])
  const [users, setUsers] = useState([] as User[])
  const lastMessage = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    socket.on('messageResponse', (data) => setMessages([...messages, data]))
    socket.on('newUserResponse', (data) => setUsers(data))
  }, [socket, messages, users])

  useEffect(() => {
    if (lastMessage) {
      lastMessage.current?.scrollIntoView({ behavior: 'smooth' })
    }
  }, [messages])

  return (
    <>
      <header className="absolute top-0 right-0">
        <button className="bg-teal-300 p-4 m-2" onClick={leaveChat}>
          Leave chat
        </button>
      </header>
      <div className="flex flex-grow overflow-y-scroll">
        <ActiveUsers users={users} />
        <ChatBody messages={messages} lastMessage={lastMessage} />
      </div>
    </>
  )
}
export default Chat
