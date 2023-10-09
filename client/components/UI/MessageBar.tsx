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
    <section>
      <form onSubmit={sendMessage}>
        <input
          type="text"
          placeholder="Write a message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button>Send</button>
      </form>
    </section>
  )
}

export default MessageBar
