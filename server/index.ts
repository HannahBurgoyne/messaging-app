import * as Path from 'node:path'
import * as URL from 'node:url'
import express from 'express'
import cors from 'cors'
import { createServer } from 'node:http'
import { Server } from 'socket.io'
import dotenv from 'dotenv'
import { User } from '../types/User'

const __filename = URL.fileURLToPath(import.meta.url)
const __dirname = Path.dirname(__filename)

const server = express()
const httpServer = createServer(server)

const io = new Server(httpServer, {
  cors: { origin: 'https://messaging-app-websockets.up.railway.app/' },
})

dotenv.config()

const port = process.env.PORT || 3000

server.use(express.json())
server.use(express.static(Path.join(__dirname, 'public')))
server.use(cors())

if (process.env.NODE_ENV === 'production') {
  server.use(express.static(Path.resolve('public')))
  server.use('/assets', express.static(Path.resolve('./dist/assets')))
  server.get('*', (req, res) => {
    res.sendFile(Path.resolve('./dist/index.html'))
  })
}

let users = [] as User[]

io.on('connection', (socket) => {
  console.log(`client ${socket.id} just connected`)

  socket.on('message', (data) => {
    io.emit('messageResponse', data)
  })

  socket.on('newUser', (data) => {
    users.push(data)
    io.emit('newUserResponse', users)
  })

  socket.on('disconnect', () => {
    console.log(`client ${socket.id} disconnected`)
    users = users.filter((user) => user.id !== socket.id)
    io.emit('newUserResponse', users)
    socket.disconnect()
  })
})

httpServer.listen(port, () => {
  console.log('Server listening on port', port)
})
export default server
