import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { io } from 'socket.io-client'

export const socket = io('https://messaging-app-websockets.up.railway.app/', {
  transports: ['websocket'],
})

socket.on('connect', () => {
  console.log(socket.id)
})

socket.on('disconnect', () => {
  console.log('Disconnected', socket.id)
})

function Home() {
  const navigate = useNavigate()
  const [username, setUsername] = useState('')

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()

    localStorage.setItem('username', username)
    socket.emit('newUser', { username, id: socket.id })
    navigate('/chat')
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Sign in to start messaging</h2>
      <label htmlFor="username">Username</label>
      <input
        type="text"
        minLength={5}
        name="username"
        id="username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <button>Sign in</button>
    </form>
  )
}

export default Home
