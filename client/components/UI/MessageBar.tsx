import React from 'react'
import { useState } from 'react'
import { socket } from '../Pages/Home'

function MessageBar() {
  const [message, setMessage] = useState('')

  function sendMessage(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (message.trim() && localStorage.getItem('username')) {
      socket.emit('message', {
        text: message,
        name: localStorage.getItem('username'),
        id: `${socket.id}`,
      })
    }
    setMessage('')
  }

  return (
    <section className="fixed bottom-0 left-0 right-0 p-4 flex justify-center bg-teal-500">
      <form onSubmit={sendMessage} className="w-screen ml-80 pr-4">
        <div className="flex">
          <input
            type="text"
            placeholder="Write a message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="p-2 flex-grow"
          />
          <button className="bg-teal-300 p-2">Send</button>
        </div>
      </form>
    </section>
  )
}

export default MessageBar
