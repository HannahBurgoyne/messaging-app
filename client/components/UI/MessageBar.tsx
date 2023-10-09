import React from 'react'
import { useState } from 'react'

function MessageBar() {
  const [message, setMessage] = useState('')

  function sendMessage(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    console.log({ username: localStorage.getItem('username'), message })
    setMessage('')
  }

  return (
    <section className="fixed bottom-0 left-0 right-0 p-4 flex justify-center">
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
