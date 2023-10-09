import { Outlet } from 'react-router-dom'
import { io } from 'socket.io-client'

export const socket = io('http://localhost:3000', { transports: ['websocket'] })

socket.on('connect', () => {
  console.log(socket.id)
})

socket.on('disconnect', () => {
  console.log('Disconnected', socket.id)
})

export default function App() {
  return (
    <>
      <Outlet />
    </>
  )
}
